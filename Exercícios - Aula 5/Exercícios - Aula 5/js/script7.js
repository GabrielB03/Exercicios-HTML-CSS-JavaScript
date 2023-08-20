"use strict";
let botao = document.getElementById("btn");
let div = document.querySelector("#final");

let sexo1 = document.querySelector("#sexo")
let altura1 = document.querySelector("#altura")
let peso1 = document.querySelector("#peso")

let validarValorNumero = (event) => {
    return ((event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46)) ?
        true : event.preventDefault();
}
let validarValorSexo = (event) => {
    return ((event.charCode == 77 || event.charCode == 109 || event.charCode == 70 || event.charCode == 102)) ?
        true : event.preventDefault();
}

sexo1.addEventListener("keypress", validarValorSexo)
altura1.addEventListener("keypress", validarValorNumero)
peso1.addEventListener("keypress", validarValorNumero)

botao.addEventListener("click", function () {
    let sexo = document.querySelector("#sexo").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let imc = peso / (altura * altura)
    let condiçao = '';

    if (sexo == 'F' || sexo == 'f') {
        if (imc < 19.1) {
            condiçao = 'Abaixo do peso'
        } else if (imc >= 19.1 && imc < 25.8) {
            condiçao = 'No peso normal'
        } else if (imc >= 25.8 && imc < 27.3) {
            condiçao = 'Marginalmente acima do peso'
        } else if (imc >= 27.3 && imc <= 32.3) {
            condiçao = 'Acima do peso ideal'
        } else {
            condiçao = 'Obeso'
        }
    } else {
        if (imc < 20.7) {
            condiçao = 'Abaixo do peso'
        } else if (imc >= 20.7 && imc < 26.4) {
            condiçao = 'No peso normal'
        } else if (imc >= 26.4 && imc < 27.8) {
            condiçao = 'Marginalmente acima do peso'
        } else if (imc >= 27.8 && imc <= 31.1) {
            condiçao = 'Acima do peso ideal'
        } else {
            condiçao = 'Obeso'
        }
    }

    div.innerHTML = `IMC (Índice de Massa Corporal): ${imc.toFixed(2)}kg/m².
    Categoria da Condição: ${condiçao}.`;
})