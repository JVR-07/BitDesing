const express = require("express");
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Ruta para obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.users.findMany(); // ← OJO: el nombre del modelo puede variar
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
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

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

