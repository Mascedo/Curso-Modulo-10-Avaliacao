const pistasRepository = require("../repositories/pistasRepository")

class pistasService {
    async mostrar(){
        return await pistasRepository.mostrar()
    }

    async criar(nome){
        if(!(nome)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novoCliente = {nome}
        
        return await pistasRepository.criar(novoCliente)
    }

    async atualizar(id, nome){
        if(!(id&&nome)){
            throw new Error("Todos campos são necessarios!")
        }

        const dadosAtualizados = {nome}

        return await pistasRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await pistasRepository.deletar(id)
    }

    async buscar(id) {
      
        if(!(id)){
            throw new Error("Sem id de busca!")
        }

        return await pistasRepository.buscar(id)
      }
}

module.exports = new pistasService()