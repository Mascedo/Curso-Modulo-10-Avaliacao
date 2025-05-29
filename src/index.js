const express = require('express');
const clientesRoutes = require("./routes/clientesRoutes")
const pistasRoutes = require("./routes/pistasRoutes")
const agendamentosRoutes = require("./routes/agendamentosRoutes")
const mongoose = require('mongoose');
require('dotenv').config({path: 'Modulo 10/Atividades/avaliacao/src/.env'});

const app = express()
const port = process.env.PORT


mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use("/clientes", clientesRoutes)
app.use("/pistas", pistasRoutes)
app.use("/agendamentos", agendamentosRoutes)

app.listen(port, () => {
    console.log("Aplicação rodando...")
})