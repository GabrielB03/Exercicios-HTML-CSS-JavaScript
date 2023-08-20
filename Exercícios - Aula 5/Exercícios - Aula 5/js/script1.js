"use strict";
//Se usar o querySelector para pegar um ID use #
let elem_valor = document.querySelector("#txtvalor");
let elem_parc = document.querySelector("#txtparcelas");
let elem_result = document.querySelector("#txtresult");

document.getElementById("botao")
        .addEventListener("click", function(){
        calcular();
});

function calcular(){
    let valor_compra = parseFloat(elem_valor.value);
    let qtd_p = parseInt(elem_parc.value);
    let msg = "";
    let valor_final = 0;
    let cor = "";
    if (qtd_p == 1){
        valor_final = valor_compra;
        msg = `1x R$ ${valor_final}`;
        cor = "#00BFFF";
    }else if(qtd_p == 2){
        valor_final = valor_compra * 1.03;
        msg = `2x R$ ${valor_final/2}`
        cor = "#F5DEB3";
    }else{
        valor_final = valor_compra * 1.07;
        msg = `4x R$ ${valor_final/4}`;
        cor = "#FF69B4";
    }
    let result = document.querySelector("#txtresult");
    result.value = msg;
    result.style.backgroundColor = cor;
    }