import React, { createContext, useContext, useState, useEffect } from 'react';
import usersData from '../data/users.json';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const validatePassword = (password) => {
    if (password.length < 6) {
      throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
      throw new Error('La contraseña debe contener al menos una mayúscula');
    }
    if (!/[0-9]/.test(password)) {
      throw new Error('La contraseña debe contener al menos un número');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('El correo electrónico no es válido');
    }
  };

  const validateUsername = (username) => {
    if (username.length < 3) {
      throw new Error('El nombre de usuario debe tener al menos 3 caracteres');
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      throw new Error('El nombre de usuario solo puede contener letras, números y guiones bajos');
    }
  };

  const login = async (walletAddress, signature) => {
    try {
      // Obtener el nickname de la wallet
      let walletNickname = '';
      try {
        const resp = await window.solana.connect();
        // Intentar obtener el nombre de la wallet
        const walletName = await window.solana.getWalletName?.();
        if (walletName) {
          walletNickname = walletName;
        } else {
          // Si no se puede obtener el nombre, usar las primeras letras de la publicKey
          walletNickname = resp.publicKey.toString().slice(0, 6);
        }
      } catch (error) {
        console.error('Error al obtener el nombre de la wallet:', error);
        walletNickname = walletAddress.slice(0, 6);
      }

      // Verificar si el usuario ya existe
      const existingUser = usersData.users.find(user => user.walletAddress === walletAddress);
      
      if (existingUser) {
        // Si el usuario existe, usar sus datos
        setUser(existingUser);
        localStorage.setItem('user', JSON.stringify(existingUser));
        return { success: true };
      }

      // Si es un nuevo usuario, mostrar el modal de selección de rol
      const role = await new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.className = 'role-selection-modal';
        modal.innerHTML = `
          <div class="modal-content">
            <h2>Selecciona tu rol</h2>
            <p>¿Cómo te gustaría usar la plataforma?</p>
            <div class="form-group">
              <label for="username">Nombre de Usuario</label>
              <input 
                type="text" 
                id="username" 
                class="username-input" 
                value="${walletNickname}"
                placeholder="Ingresa tu nombre de usuario"
              />
            </div>
            <select id="role-select" class="role-select">
              <option value="">Selecciona un rol</option>
              <option value="client">Cliente</option>
              <option value="developer">Desarrollador</option>
            </select>
            <button id="confirm-role" class="confirm-btn" disabled>Confirmar</button>
          </div>
        `;

        document.body.appendChild(modal);

        // Agregar estilos al modal
        const style = document.createElement('style');
        style.textContent = `
          .role-selection-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            min-width: 300px;
          }
          .form-group {
            margin-bottom: 1rem;
            text-align: left;
          }
          .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
          }
          .username-input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
          }
          .username-input:focus {
            outline: none;
            border-color: #512da8;
          }
          .role-select {
            width: 100%;
            padding: 0.75rem;
            margin: 1rem 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
          }
          .role-select:focus {
            outline: none;
            border-color: #512da8;
          }
          .confirm-btn {
            width: 100%;
            padding: 0.75rem;
            background-color: #512da8;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .confirm-btn:disabled {
            background-color: #9e9e9e;
            cursor: not-allowed;
          }
          .confirm-btn:not(:disabled):hover {
            background-color: #311b92;
          }
        `;
        document.head.appendChild(style);

        const roleSelect = modal.querySelector('#role-select');
        const confirmBtn = modal.querySelector('#confirm-role');
        const usernameInput = modal.querySelector('#username');

        // Habilitar el botón cuando se seleccione un rol y haya un nombre de usuario
        const validateForm = () => {
          confirmBtn.disabled = !roleSelect.value || !usernameInput.value.trim();
        };

        roleSelect.addEventListener('change', validateForm);
        usernameInput.addEventListener('input', validateForm);

        // Manejar la confirmación del rol
        confirmBtn.addEventListener('click', () => {
          if (roleSelect.value && usernameInput.value.trim()) {
            document.body.removeChild(modal);
            resolve({
              role: roleSelect.value,
              username: usernameInput.value.trim()
            });
          }
        });
      });

      // Crear el nuevo usuario con el rol seleccionado
      const userData = {
        id: walletAddress,
        username: role.username,
        name: role.username,
        role: role.role,
        email: `${role.username}@example.com`,
        walletAddress: walletAddress,
        signature: signature,
        // Agregar campos específicos según el rol
        ...(role.role === 'developer' && {
          skills: [],
          experience: '0 años',
          rating: 0,
          completedProjects: 0,
          hourlyRate: '$0',
          availability: 'Disponible'
        })
      };

      // Agregar el nuevo usuario a la base de datos
      usersData.users.push(userData);

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Error al iniciar sesión'
      };
    }
  };

  const register = (userData) => {
    try {
      // Validar campos requeridos
      if (!userData.username || !userData.password || !userData.name || !userData.email) {
        throw new Error('Por favor, completa todos los campos');
      }

      // Validar formato de datos
      validateUsername(userData.username);
      validatePassword(userData.password);
      validateEmail(userData.email);

      // Verificar si el usuario ya existe
      const existingUser = usersData.users.find(
        u => u.username === userData.username || u.email === userData.email
      );

      if (existingUser) {
        if (existingUser.username === userData.username) {
          throw new Error('El nombre de usuario ya está en uso');
        }
        if (existingUser.email === userData.email) {
          throw new Error('El correo electrónico ya está en uso');
        }
      }

      // Crear nuevo usuario
      const newUser = {
        id: usersData.users.length + 1,
        username: userData.username,
        password: userData.password,
        name: userData.name,
        role: userData.role,
        email: userData.email,
        availability: userData.role === 'developer' ? 'Disponible' : null,
        experience: userData.role === 'developer' ? '0 años' : null,
        hourlyRate: userData.role === 'developer' ? '$0' : null,
        completedProjects: userData.role === 'developer' ? 0 : null,
        rating: userData.role === 'developer' ? 0 : null,
        skills: userData.role === 'developer' ? [] : null
      };

      // Agregar el nuevo usuario al array de usuarios
      usersData.users.push(newUser);
      return true;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUserAvailability = (availability) => {
    if (user && user.role === 'developer') {
      const updatedUser = { ...user, availability };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      register,
      updateUserAvailability
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}; 