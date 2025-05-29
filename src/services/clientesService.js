const clientesRepository= require("../repositories/clientesRepository")

class veiculosService {
    async mostrar(){
        return await clientesRepository.mostrar()
    }

    async criar(nome){
        if(!(nome)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novoCliente = {nome}
        
        return await clientesRepository.criar(novoCliente)
    }

    async atualizar(id, nome){
        if(!(id&&nome)){
            throw new Error("Todos campos são necessarios!")
        }

        const dadosAtualizados = {nome}

        return await clientesRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await clientesRepository.deletar(id)
    }

    async buscar(id) {
      
        if(!(id)){
            throw new Error("Sem id de busca!")
        }

        return await clientesRepository.buscar(id)
      }
}

module.exports = new veiculosService()