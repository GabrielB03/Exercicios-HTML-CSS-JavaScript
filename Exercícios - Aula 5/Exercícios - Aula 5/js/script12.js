"use strict";
let num_secreto;
let tentativas = 0;

num_secreto = sortearNum(100);

function sortearNum(n){
    return Math.round(Math.random() * n);
}

document.querySelector("#txtchute")
        .addEventListener("keypress", function(event){
            if (event.keyCode == 13){
                verificarJogada();
            }
        });

function verificarJogada(){
    let msg = document.querySelector("#msg");
    let dica = document.querySelector("#txtdica");
    tentativas++;
    let chute = Number(document.querySelector("#txtchute").value);
    if(chute < num_secreto){
        dica.value = "O número secreto é maior";
    }
    else if(chute > num_secreto){
        dica.value = "O número secreto é menor";
    }else{
        msg.innerHTML = `<h1>Parabéns, você acertou em ${tentativas} tentativas`;
        setTimeout(function(){
            if(confirm("Deseja jogar novamente?")){
                window.location.reload();
            }
        })
    }
}