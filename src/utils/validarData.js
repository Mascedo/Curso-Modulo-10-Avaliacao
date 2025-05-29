function validarData (data){

    if(typeof data !== "string"){
        throw new Error("Data precisa ser uma String")
    }

    if(!((data.split("").length===10&&data[4]==="-"&&data[7]==="-")&&parseInt((data.slice(5,7))) > 0 && parseInt(data.slice(5,7)) < 13 && parseInt(data.slice(8,10)) > 0 && parseInt(data.slice(8,10)) < 32)){//verifica o formato da data
        throw new Error("Data precisa estar em formato ISO! Ex: 2020-05-30")
    }

    const valorData = Number(data.replace(/[-\/]/g, ""))

    const valorDataAtual = Number(new Date().toISOString().slice(0, 10).replace(/[-\/]/g, ""))

    if(valorData < (valorDataAtual + 1)){
        throw new Error("Data tem que ser marcada com pelo menos um dia de antecedencia")
    }

    return true;
}

module.exports = { validarData }