function validarHorario (horario){

    if(typeof horario !== "string"){
        throw new Error("Horario precisa ser uma String")
    }

    if(horario !== "16:00" && horario !== "18:00" && horario !== "20:00" && horario !== "22:00"){
        throw new Error("Horario ser 16:00, 18:00, 20:00 ou 22:00")
    }

    return true;
}

module.exports = { validarHorario }