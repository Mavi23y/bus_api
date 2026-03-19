const express = require('express');
const router = express.Router();
const lineController = require('../controllers/lineController');

// Rota para CRIAR (Create) uma linha
router.post('/bus-line', lineController.createLine);

//Rota para LER (Read) todos os registros de linha
router.get('/bus-line', lineController.getAllLine);

//Rota para LER (Read) uma linha pelo ID
router.get('/bus-line/:id', lineController.getLineById);

//Rota para ATUALIZAR (Update) uma linha pelo ID
router.put('/bus-line/:id', lineController.updateLine);

//Rota para DELETAR (Delete) uma linha pelo ID
router.delete('/bus-line/:id', lineController.deleteLine);

module.exports = router;