const Agendamento = require("../models/agendamentoModel")
const Pista = require("../models/pistaModel")

class agendamentoRepository {
    async mostrar(){
        return await Agendamento.find()
    }

    async mostrarPagina(page, limit){
        const agendamentos = await Agendamento.find()//cria uma variavel com todos os agendamentos

        return agendamentos.slice((page - 1) * limit, limit * page)//calcula o startIndex e endIndex
    }

    async criar(agendamento){
        return await Agendamento.create(agendamento)
    }

    async deletar(id){
        const agendamento = await Agendamento.findById(id)

        const dataHorario = agendamento.data + agendamento.horario

        await Pista.findByIdAndUpdate(
            agendamento.pistaID,
            { $pull: {dataHorario: dataHorario } }
        )

        return await Agendamento.findByIdAndDelete(id)
    }
}

module.exports = new agendamentoRepository();