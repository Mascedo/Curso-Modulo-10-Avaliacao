const Cliente = require('../models/clienteModel')


class clienteRepository {
    async mostrar(){
        return await Cliente.find()
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