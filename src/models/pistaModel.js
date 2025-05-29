const mongoose = require('mongoose');

const Pista = mongoose.model('Pista', {
    nome: String,
    dataHorario: Array
})

module.exports = Pista