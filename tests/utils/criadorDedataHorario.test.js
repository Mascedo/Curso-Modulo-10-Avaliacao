const { criadorDedataHorario } = require("../../src/utils/criadorDedataHorario")

describe("Teste da função que junta a data e horario", () => {

    test("Deve voltar uma junçao da data e horario", () => {
        expect(criadorDedataHorario("2025/04/22", "20:00")).toBe("2025/04/2220:00")
    })
})