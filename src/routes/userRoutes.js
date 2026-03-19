const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para CRIAR (Create) um usuário
router.post('/user', userController.createUser);

//Rota para LER (Read) todos os registros de usuário
router.get('/user', userController.getAllUser);

//Rota para LER (Read) um usuário pelo ID
router.get('/user/:id', userController.getUserById);

//Rota para ATUALIZAR (Update) um usuário pelo ID
router.put('/user/:id', userController.updateUser);

//Rota para DELETAR (Delete) um usuário pelo ID
router.delete('/user/:id', userController.deleteUser);

module.exports = router;