"use strict";

let l = Number(prompt("Digite as linhas:"))
let c = Number(prompt("Digite as colunas:"))
let vetor = [l, c]
let tabela = document.querySelector("#tabela")
let cores = ["par", "impar"]
let x;

for(let contlin = 1; contlin < l + 1; contlin++){
    tabela.innerHTML += `<tr id="linha${contlin}"></tr>`
    for(let contcol = 1; contcol < c + 1; contcol++){
        if (contcol % 2 == 0){
            x = 0
        }
        else{
            x = 1
        }
        document.querySelector(`#linha${contlin}`).innerHTML += `<td class="
        ${cores[x]}">${contlin},${contcol}</td>`
    }
}