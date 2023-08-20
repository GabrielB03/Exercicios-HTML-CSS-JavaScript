"use strict";

let numero1 = document.querySelector("#n1")
let numero2 = document.querySelector("#n2")

let validarValor = (event) => {
    return ((event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46)) ?
        true : event.preventDefault();
}

numero1.addEventListener("keypress", validarValor)
numero2.addEventListener("keypress", validarValor)

document.querySelector("#botao").addEventListener("click", function () {
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)

    if (n1 > n2) {
        document.querySelector("#result").value = `${n1} é maior que ${n2}`
    } else if (n2 > n1) {
        document.querySelector("#result").value = `${n2} é maior que ${n1}`
    } else {
        document.querySelector("#result").value = `${n1} é igual a ${n2}`
    }
})