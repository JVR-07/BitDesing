const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();

// Endpoint para autenticación con Phantom Wallet
router.post('/phantom', async (req, res) => {
  try {
    const { publicKey, username, role } = req.body;

    // Si no se proporciona username y role, es un intento de login
    if (!username || !role) {
      const user = await prisma.usuarios.findUnique({
        where: {
          public_key: publicKey
        }
      });

      if (!user) {
        return res.json({
          success: false,
          needsRegistration: true,
          message: 'Usuario no registrado'
        });
      }

      return res.json({
        success: true,
        user: {
          publicKey: user.public_key,
          username: user.user_name,
          role: user.user_rol
        }
      });
    }

    // Si se proporcionan username y role, es un registro
    const existingUser = await prisma.usuarios.findUnique({
      where: {
        public_key: publicKey
      }
    });

    if (existingUser) {
      return res.json({
        success: false,
        message: 'Esta wallet ya está registrada'
      });
    }

    const newUser = await prisma.usuarios.create({
      data: {
        public_key: publicKey,
        user_name: username,
        user_rol: role
      }
    });

    return res.json({
      success: true,
      user: {
        publicKey: newUser.public_key,
        username: newUser.user_name,
        role: newUser.user_rol
      }
    });

  } catch (error) {
    console.error('Error en autenticación:', error);
    return res.status(500).json({
      success: false,
      message: 'Error en el servidor'
    });
  }
});

module.exports = router; 