"use strict";

// Controle

let numero1 = document.querySelector("#n1")
let numero2 = document.querySelector("#n2")

let validarValorNumero = (event) => {
    return ((event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46)) ?
        true : event.preventDefault();
}

numero1.addEventListener("keypress", validarValorNumero)
numero2.addEventListener("keypress", validarValorNumero)

// Contas

let soma = document.querySelector("#soma")
let subt = document.querySelector("#subt")
let mult = document.querySelector("#mult")
let divi = document.querySelector("#divi")

let n1 = Number(numero1.value)
let n2 = Number(numero2.value)

let result = document.querySelector("#result")

soma.addEventListener("click", function () {
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    result.value = n1 + n2
})
subt.addEventListener("click", function () {
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    result.value = n1 - n2
})
mult.addEventListener("click", function () {
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    result.value = n1 * n2
})
divi.addEventListener("click", function () {
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    result.value = (n1/n2).toFixed(2)
})