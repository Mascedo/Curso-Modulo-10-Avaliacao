const clientesRepository = require("../repositories/clientesRepository")
const pistasRepository = require("../repositories/pistasRepository")
const agendamentosRepository = require("../repositories/agendamentosRepository")
const { validarHorario } = require("../utils/validarHorario")
const { validarData } = require("../utils/validarData")
const { validarDisponibilidade } = require("../utils/validarDisponibilidade")
const { criadorDedataHorario } = require("../utils/criadorDedataHorario")

class agendamentosService {
    async mostrar(){
        return await agendamentosRepository.mostrar()
    }

    async criar(data, horario, clienteID, pistaID){
        if(!(data, horario, clienteID, pistaID)){
            throw new Error("Todos os campos são necessarios!")
        }

        if(!validarData(data)){
            throw new Error("Data invalida!")
        }
      
        if(!validarHorario(horario)){
            throw new Error("Horario invalido!")
        }

        const cliente = await clientesRepository.buscar(clienteID)
        if (!cliente) {
            throw new Error("ID de cliente invalido!")
        }

        const pista = await pistasRepository.buscar(pistaID)
        if (!pista) {
            throw new Error("ID de pista invalido!")
        }

        if(! await validarDisponibilidade(data, horario, pistaID)){
            throw new Error("Erro na disponibilidade")
        }
        
        await pistasRepository.dataHorario(pistaID, criadorDedataHorario(data, horario))

        const novoAgendamento = {data, horario, clienteID, pistaID}
        
        return await agendamentosRepository.criar(novoAgendamento)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await agendamentosRepository.deletar(id)
    }
}

module.exports = new agendamentosService()