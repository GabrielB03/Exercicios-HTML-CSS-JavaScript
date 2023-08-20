"use strict";

let nome = $("#nome")
let rgm = $("#rgm")
let media = $("#media")
let num = 0;

$("#botaoCadastrar").on("click", function () {
    localStorage.setItem(`nome ${num}`, nome.val())
    localStorage.setItem(`rgm ${num}`, rgm.val())
    localStorage.setItem(`media ${num}`, media.val())

    nome.val("");
    rgm.val("");
    media.val("");

    num += 1;
    localStorage.setItem("numero", num)
})

$("#botaoExibir").on("click", function () {

    let div = $("#exibir")
    div.html(`<table border = "0" id="tabela"><thead><td>Número do Aluno</td><td>Nome</td><td>RGM</td><td>Média</td><td>Conceito Final</td></thead></table>`)
    let tabela = $("#tabela")
    for (let i = 0; i < Number(localStorage.getItem("numero")) + 1; i++) {
        tabela.append(`<tr id="linha${i}"></tr>`)
        $(`#linha${i}`).append(`<td>${i}</td>`)
        $(`#linha${i}`).append(`<td>${localStorage.getItem(`nome ${i}`)}</td>`)
        $(`#linha${i}`).append(`<td>${localStorage.getItem(`rgm ${i}`)}</td>`)
        $(`#linha${i}`).append(`<td>${localStorage.getItem(`media ${i}`)}</td>`)

        let conceito = ''

        if (localStorage.getItem(`media ${i}`) == 0) {
            conceito = 'REPROVADO'
        }
        else if (localStorage.getItem(`media ${i}`) > 6) {
            conceito = 'APROVADO'
        }
        else if (localStorage.getItem(`media ${i}`) > 0) {
            conceito = 'EXAME'
        }

        $(`#linha${i}`).append(`<td class="${conceito.toLowerCase()}">${conceito}</td>`)
    }
})