const pistasService = require("../services/pistasService")

exports.mostrarPistas = async (req, res) => {
    try{
        const pistas = await pistasService.mostrar()
        res.status(200).json(pistas)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}  

exports.criarPista = async (req, res) => {
    try{
        const {nome} = req.body
        const novoPista = await pistasService.criar(nome)
        res.status(201).json(novoPista)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarPista = async (req, res) => {
    try{
        const {nome} = req.body
        const id = req.params.id   
        const novoPista = await pistasService.atualizar(id, nome)
        res.status(201).json(novoPista)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarPista = async (req, res) => {
    try{
        const id = req.params.id
        await pistasService.deletar(id)
        res.status(201).json("Pista removida!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.buscarPista = async (req, res) => {
    try{
        const id = req.params.id
        const response = await pistasService.buscar(id)
        res.status(200).json(response)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}