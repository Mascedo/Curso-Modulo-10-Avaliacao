const { validarHorario } = require("../../src/utils/validarHorario")

describe("Testes da função que faz a validação do horario", () => {

    test("Deve passar com um horario valido como 16:00, 18:00, 20:00 ou 22:00", () => {
        expect(validarHorario("16:00")).toBe(true)
    })

    test("Deve falhar caso seja enviado um horario que não seja estes acima", () => {
        expect( () => validarHorario("13:43")).toThrow("Horario ser 16:00, 18:00, 20:00 ou 22:00")
    })

    test("Deve falhar caso oque seja enviado nao seja uma string", () => {
        expect( () => validarHorario(["teste", "amo paçoca"])).toThrow("Horario precisa ser uma String")
    })
})