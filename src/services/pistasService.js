const pistasRepository = require("../repositories/pistasRepository")

class pistasService {
    async mostrar(query){
        if(Object.keys(query).length === 0){//caso nao tenha query ele vai mostrar todos
            return await pistasRepository.mostrar()
        }
        
        const page = query.page

        const limit = query.limit

        if(page===undefined || limit===undefined){
            throw new Error("O valor de page e limit devem existir!")
        }

        if((page*2%2!==0) ||(limit*2%2!==0)){//descobrir se page e limit são numeros atraves do uso de tecnicas nao convencionais de progamação
            throw new Error("Page e limit tem que ser um numero!")
        }

        if(page<1 || limit<1){
            throw new Error("Page e limit precisam ser um numero maior que zero!")
        }

        return await pistasRepository.mostrarPagina(page, limit)
    }

    async criar(nome){
        if(!(nome)){
            throw new Error("Todos os campos são necessarios!")
        }

        if(typeof nome !== "string" || nome.trim() === ""){
            throw new Error("Nome precisa ser uma string!")
        }

        const novoCliente = {nome}
        
        return await pistasRepository.criar(novoCliente)
    }

    async atualizar(id, nome){
        if(!(id&&nome)){
            throw new Error("Todos campos são necessarios!")
        }

        if(typeof nome !== "string" || nome.trim() === ""){
            throw new Error("Nome precisa ser uma string!")
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