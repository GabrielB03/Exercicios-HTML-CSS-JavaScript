"use strict";

let numero = document.querySelector("#numero")

document.querySelector("#btn").addEventListener("click", function () {
    let inteiro = Number(numero.value)
    if (inteiro % 2 == 0) {
        document.querySelector("#result").value = "Par"
    } else {
        document.querySelector("#result").value = "Ímpar"
    }
})