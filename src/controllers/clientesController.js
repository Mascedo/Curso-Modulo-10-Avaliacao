const clientesService = require("../services/clientesService")

exports.mostrarClientes = async (req, res) => {
    try{
        const query = req.query
        const clientes = await clientesService.mostrar(query)
        res.status(200).json(clientes)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}  

exports.criarCliente = async (req, res) => {
    try{
        const {nome} = req.body
        const novoCliente = await clientesService.criar(nome)
        res.status(201).json(novoCliente)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarCliente = async (req, res) => {
    try{
        const {nome} = req.body
        const id = req.params.id   
        const novoCliente = await clientesService.atualizar(id, nome)
        res.status(201).json(novoCliente)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarCliente = async (req, res) => {
    try{
        const id = req.params.id
        await clientesService.deletar(id)
        res.status(201).json("Cliente removido!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.buscarCliente = async (req, res) => {
    try{
        const id = req.params.id
        const response = await clientesService.buscar(id)
        res.status(200).json(response)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}