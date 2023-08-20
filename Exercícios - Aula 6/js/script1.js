"use strict";
let nomes = []
let nome = ''
let tabela = document.querySelector("#tabela")

do {
    nome = prompt('Digite nomes:')
    nomes.push(nome)
} while (nome != null)

nomes.pop()

for (let i = 0; i < nomes.length; i++) {
    tabela.innerHTML += `<tr><td>${i + 1}</td>
<td>${nomes[i]}</td></tr>`
}

document.querySelector("#display").style.display = 'block'