"use strict";

let somaTermos = (numero) => {
    let cont;
    let soma = 0;
    for(cont = 0; cont <= numero; cont++){
        soma += cont
    }
    return soma
}

document.querySelector("#btn").addEventListener("click", function(){
    let num = Number(document.querySelector("#num").value)
    document.querySelector("#result").value = somaTermos(num)
})