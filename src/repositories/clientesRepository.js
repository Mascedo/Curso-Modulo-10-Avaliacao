const Cliente = require('../models/clienteModel')


class clienteRepository {
    async mostrar(){
        return await Cliente.find()
    }

    async mostrarPagina(page, limit){
        const clientes = await Cliente.find()//cria uma variavel com todos os clientes

        return clientes.slice((page - 1) * limit, limit * page)//calcula o startIndex e endIndex
    }

    async criar(cliente){
        return  await Cliente.create(cliente)
    }

    async atualizar(id, cliente){
        return await Cliente.findByIdAndUpdate(id, cliente, {new:true})
    }

    async deletar(id){
        return await Cliente.findByIdAndDelete(id)
    }

    async buscar(id){
        const cliente = await Cliente.findById(id)
        return cliente
    }

    async agendamentoID(id, agendamentoID){
    await Cliente.findByIdAndUpdate(
        id,
        { $push: { agendamentosID: agendamentoID } }
        )
    }
    }

module.exports = new clienteRepository();