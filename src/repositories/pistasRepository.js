const Pista = require('../models/pistaModel')


class pistaRepository {
    async mostrar(){
        return await Pista.find()
    }

    async criar(pista){
        return  await Pista.create(pista)
    }

    async atualizar(id, pista){
        return await Pista.findByIdAndUpdate(id, pista, {new:true})
    }

    async deletar(id){
        return await Pista.findByIdAndDelete(id)
    }

    async buscar(id){
        const pista = await Pista.findById(id)
        return pista
    }

    async dataHorario(id, dataHorario){
        await Pista.findByIdAndUpdate(
            id,
            { $push: { dataHorario: dataHorario } }
        )
    }
    }

module.exports = new pistaRepository();