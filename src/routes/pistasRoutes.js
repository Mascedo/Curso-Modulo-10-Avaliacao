const express = require('express');
const router = express.Router();
const pistasController = require('../controllers/pistasController');

router.get('/', pistasController.mostrarPistas)
router.post('/', pistasController.criarPista)
router.put('/:id', pistasController.atualizarPista);
router.delete('/:id', pistasController.deletarPista);
router.get('/:id', pistasController.buscarPista);

module.exports = router;
