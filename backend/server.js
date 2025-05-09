const express = require("express");
const { PrismaClient } = require('./generated/prisma');
const cors = require('cors');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5173', // URL del frontend
  credentials: true
}));

// Middleware para permitir JSON
app.use(express.json());

// Ruta para obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    console.log('Intentando obtener usuarios...');
    const users = await prisma.users.findMany({
      select: {
        public_key: true,
        user_name: true,
        rol: true
      }
    });
    console.log('Usuarios encontrados:', users);
    res.json(users);
  } catch (error) {
    console.error("Error detallado al obtener usuarios:", error);
    res.status(500).json({ 
      error: "Error al obtener usuarios",
      details: error.message
    });
  }
});

// Ruta para obtener todos los proyectos
app.get("/projects", async (req, res) => {
  try {
    const projects = await prisma.projects.findMany();  // Obtener todos los proyectos
    res.json(projects);
  } catch (error) {
    console.error("Error al obtener proyectos:", error);
    res.status(500).json({ error: "Error al obtener proyectos" });
  }
});

// Ruta para obtener tareas de un proyecto específico
app.get("/projects/:id/tasks", async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await prisma.tasks.findMany({
      where: { projectId: parseInt(id) }, // Filtra las tareas por project_id
    });
    res.json(tasks);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    res.status(500).json({ error: "Error al obtener tareas" });
  }
});

// Ruta para login/registro con Phantom
app.post("/auth/phantom", async (req, res) => {
  try {
    const { publicKey, username, role } = req.body;

    // Buscar usuario existente
    const existingUser = await prisma.users.findUnique({
      where: { public_key: publicKey }
    });

    if (existingUser) {
      // Si el usuario existe, devolver sus datos
      return res.json({
        success: true,
        user: {
          publicKey: existingUser.public_key,
          username: existingUser.user_name,
          role: existingUser.rol
        }
      });
    }

    // Si no existe y no se proporcionaron username y role, indicar que se necesita registro
    if (!username || !role) {
      return res.json({
        success: false,
        needsRegistration: true,
        message: "Usuario no encontrado. Se requiere registro."
      });
    }

    // Validar que el rol sea válido
    if (role !== 'client' && role !== 'developer') {
      return res.status(400).json({
        success: false,
        message: "Rol inválido. Debe ser 'client' o 'developer'"
      });
    }

    // Crear nuevo usuario
    const newUser = await prisma.users.create({
      data: {
        public_key: publicKey,
        user_name: username,
        rol: role
      }
    });

    res.json({
      success: true,
      user: {
        publicKey: newUser.public_key,
        username: newUser.user_name,
        role: newUser.rol
      }
    });

  } catch (error) {
    console.error("Error en autenticación:", error);
    res.status(500).json({
      success: false,
      message: "Error en el proceso de autenticación"
    });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

