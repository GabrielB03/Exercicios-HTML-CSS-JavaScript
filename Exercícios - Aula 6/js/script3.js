"use strict";

let saida = document.querySelector("#saida")

document.querySelector("#btn_maiu").addEventListener("click", function(){
    let texto = document.querySelector("#texto").value.toUpperCase()
    saida.innerHTML += texto
})

document.querySelector("#btn_sep").addEventListener("click", function(){
    let texto = document.querySelector("#texto").value.split("")

    for(let i = 0; i < texto.length; i++){
        saida.innerHTML += texto[i] + " "
    }
})
