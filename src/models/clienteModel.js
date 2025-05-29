const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente', {
    nome: String
})

module.exports = Cliente