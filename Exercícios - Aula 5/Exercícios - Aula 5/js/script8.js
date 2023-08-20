"use strict";

let salario = document.querySelector("#salario")

let validarValorNumero = (event) => {
    return ((event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46)) ?
        true : event.preventDefault();
}

salario.addEventListener("keypress", validarValorNumero)

botao = document.querySelector("#botao").addEventListener("click", function () {
    let sal = Number(salario.value)
    let aliquota = 0;
    if (sal > 3582) {
        aliquota = 0.275;
    } else if (sal >= 2866 && sal <= 3582) {
        aliquota = 0.225;
    } else if (sal >= 2150 && sal < 2866) {
        aliquota = 0.15;
    } else if (sal >= 1434 && sal < 2150) {
        aliquota = 0.075
    }

    document.querySelector("#final").value = `R$ ${(sal + sal * aliquota).toFixed(2)}`
})