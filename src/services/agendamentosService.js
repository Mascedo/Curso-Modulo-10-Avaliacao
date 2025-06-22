const clientesRepository = require("../repositories/clientesRepository")
const pistasRepository = require("../repositories/pistasRepository")
const agendamentosRepository = require("../repositories/agendamentosRepository")
const { validarHorario } = require("../utils/validarHorario")
const { validarData } = require("../utils/validarData")
const { validarDisponibilidade } = require("../utils/validarDisponibilidade")
const { criadorDedataHorario } = require("../utils/criadorDedataHorario")

class agendamentosService {
    async mostrar(query){
        if(Object.keys(query).length === 0){
            return await agendamentosRepository.mostrar()
        }

        const page = query.page
    
        const limit = query.limit
    
        if(page===undefined || limit===undefined){
            throw new Error("O valor de page e limit devem existir!")
        }
    
        if((page*2%2!==0) ||(limit*2%2!==0)){
            throw new Error("Page e limit tem que ser um numero!")
        }
    
        if(page<1 || limit<1){
            throw new Error("Page e limit precisam ser um numero maior que zero!")
        }
    
        return await agendamentosRepository.mostrarPagina(page, limit)
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