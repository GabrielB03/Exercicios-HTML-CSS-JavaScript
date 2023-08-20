"use strict";

let ids = ["nome", "rgm", "nota_parc", "nota_exer", "nota_proj", "nota_regi"]
let nomes = []
let rgms = []
let notas_parc = []
let notas_exer = []
let notas_proj = []
let notas_regi = []

document.querySelector("#btn1").addEventListener("click", function () {
    let valor = 0;
    for (let i = 0; i < ids.length; i++) {
        if (document.querySelector(`#${ids[i]}`).value == '') {
            valor++
        }
    }
    if (valor == 0) {
        nomes.push(document.querySelector("#nome").value)
        rgms.push(Number(document.querySelector("#rgm").value))
        notas_parc.push(Number(document.querySelector("#nota_parc").value))
        notas_exer.push(Number(document.querySelector("#nota_exer").value))
        notas_proj.push(Number(document.querySelector("#nota_proj").value))
        notas_regi.push(Number(document.querySelector("#nota_regi").value))

        document.querySelector("#repet").innerHTML = null
    } else {
        document.querySelector("#repet").innerHTML = 'Preencha todos os campos!'
    }
})

document.querySelector("#btn2").addEventListener("click", function () {
    function calculaConceito(parc, exer, proj, regi){
        let result = parc + exer + proj + regi
        let conceito = ''
        if(result >= 6){
            conceito = 'Aprovado'
        }
        else{
            conceito = 'Reprovado'
        }
        return conceito
    }
    for (let linha = 0; linha < nomes.length; linha++) {
        tabela.innerHTML += `<tr id="linha${linha}"></tr>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${nomes[linha]}</td>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${rgms[linha]}</td>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${notas_parc[linha]}</td>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${notas_exer[linha]}</td>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${notas_proj[linha]}</td>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${notas_regi[linha]}</td>`
        document.querySelector(`#linha${linha}`).innerHTML += `<td>${calculaConceito(notas_parc[linha], notas_exer[linha], notas_proj[linha], notas_regi[linha])}</td>`
    }   
})