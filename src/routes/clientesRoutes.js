const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.mostrarClientes)
router.post('/', clientesController.criarCliente)
router.put('/:id', clientesController.atualizarCliente);
router.delete('/:id', clientesController.deletarCliente);
router.get('/:id', clientesController.buscarCliente);

module.exports = router;
