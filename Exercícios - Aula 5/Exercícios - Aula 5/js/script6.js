"use strict";

document.querySelector("#btn").addEventListener("click", function(){
    let valor = Number(document.querySelector("#valor").value)
    let codigo = Number(document.querySelector("#codigo").value)
    let condi = 0;

    switch(codigo){
        case 1: condi = 0.9
            break;
        case 2: condi = 0.95
            break;
        case 3: condi = 1.1
            break;
    }

    document.querySelector("#real").value = `R$ ${valor.toFixed(2)}`
    document.querySelector("#pago").value = `R$ ${(valor * condi).toFixed(2)}`
})