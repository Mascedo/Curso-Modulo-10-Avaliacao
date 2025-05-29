const express = require('express')
const router = express.Router()
const agendamentosController = require('../controllers/agendamentosController')

router.get('/', agendamentosController.mostrarAgendamentos)
router.post('/', agendamentosController.criarAgendamento)
router.delete('/:id', agendamentosController.deletarAgendamento)

module.exports = router