import React, { createContext, useContext, useState, useEffect } from 'react';

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

  const login = async (userData) => {
    try {
      // Guardar el usuario en el estado y localStorage
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