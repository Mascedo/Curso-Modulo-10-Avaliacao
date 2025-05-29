const agendamentosService = require("../services/agendamentosService")

exports.mostrarAgendamentos = async (req, res) => {
    try{
        const agendamentos = await agendamentosService.mostrar()
        res.status(200).json(agendamentos)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}  

exports.criarAgendamento = async (req, res) => {
    try{
        const {data, horario, clienteID, pistaID} = req.body
        const novoAgendamento = await agendamentosService.criar(data, horario, clienteID, pistaID)
        res.status(201).json(novoAgendamento)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarAgendamento = async (req, res) => {
    try{
        const id = req.params.id
        await agendamentosService.deletar(id)
        res.status(201).json("Agendamento removido!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}