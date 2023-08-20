"use strict";

let base = document.querySelector("#base")
let altura = document.querySelector("#altura")

document.querySelector("#btn").addEventListener("click", function () {
    let b = Number(base.value)
    let h = Number(altura.value)
    document.querySelector("#area").value = `${b*h/2}m²`
})