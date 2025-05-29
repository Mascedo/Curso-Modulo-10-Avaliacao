const Pista = require('../models/pistaModel')

function validarDisponibilidade (data, horario, pistaID){
    const dataHorarioRequest = data + horario

    return Pista.findById(pistaID).then(pista => {
        if (!pista) throw new Error("Pista não encontrada!")

        pista.dataHorario.forEach(dataHorario => {
            if (dataHorario === dataHorarioRequest) {
                throw new Error("Este horario ja foi agendado!")
            }
        })

        return true
    })
}

module.exports = { validarDisponibilidade }