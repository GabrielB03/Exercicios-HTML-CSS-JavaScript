"use strict";

document.querySelector("#botao").addEventListener("click", function (){
    let nota1 = Number(document.querySelector("#n1").value);
    let nota2 = Number(document.querySelector("#n2").value);
    let nota3 = Number(document.querySelector("#n3").value);

    let media = (nota1 + nota2 + nota3) / 3;
    document.querySelector("#media").value = media
    if (media >= 6) {
        document.querySelector("#conceito").value = "APROVADO"
    } else if (media >= 3 && media < 6) {
        document.querySelector("#conceito").value = "EXAME"
    } else if (media < 3) {
        document.querySelector("#conceito").value = "REPROVADO"
    }
});