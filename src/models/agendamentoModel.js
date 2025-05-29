const mongoose = require('mongoose');

const Agendamento = mongoose.model('Agendamento', {
    data: String,
    horario: String,
    clienteID: String,
    pistaID: String
})

module.exports = Agendamento