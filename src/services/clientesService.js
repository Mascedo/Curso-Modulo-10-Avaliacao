const clientesRepository= require("../repositories/clientesRepository")

class veiculosService {
    async mostrar(query){
        if(Object.keys(query).length === 0){//caso nao tenha query ele vai mostrar todos
            return await clientesRepository.mostrar()
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
    
        return await clientesRepository.mostrarPagina(page, limit)
    }

    async criar(nome){
        if(!(nome)){
            throw new Error("Todos os campos são necessarios!")
        }

        if(typeof nome !== "string" || nome.trim() === ""){
            throw new Error("Nome precisa ser uma string!")
        }

        const novoCliente = {nome}
        
        return await clientesRepository.criar(novoCliente)
    }

    async atualizar(id, nome){
        if(!(id&&nome)){
            throw new Error("Todos campos são necessarios!")
        }

        if(typeof nome !== "string" || nome.trim() === ""){
            throw new Error("Nome precisa ser uma string!")
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