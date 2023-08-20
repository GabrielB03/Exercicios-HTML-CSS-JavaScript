"use strict";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
var n1_o = 0;
const resp = document.getElementById("resp");

// + - / *

btn1.addEventListener("click", function() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    n1_o = (Number.parseFloat(n1)) + (Number.parseFloat(n2));

    document.getElementById("resp").value = n1_o;
})

btn2.addEventListener("click", function() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    n1_o = (Number.parseFloat(n1)) - (Number.parseFloat(n2));

    document.getElementById("resp").value = n1_o;
});

btn3.addEventListener("click", function() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    n1_o = (Number.parseFloat(n1)) * (Number.parseFloat(n2));

    document.getElementById("resp").value = n1_o;
});

btn4.addEventListener("click", function() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    n1_o = (Number.parseFloat(n1)) / (Number.parseFloat(n2));

    document.getElementById("resp").value = n1_o;
});

// potencia / elevado e raiz / criar sua propria expressão

btn5.addEventListener("click", function() {
    alert("Use apenas números e simbolos matematicas: + - / *\nDivirta-se");
    var exp = prompt("Crie sua expressão matematica: ", "ex: 5+5/3");

    // Transforma a string em uma expressão matematica.
    var conta = eval(exp);
    document.getElementById("resp").value = conta;
});

btn6.addEventListener("click", function() {
    var x = parseInt(prompt("Digite um número: "));
    var y = parseInt(prompt("Digite a potência do número: "));

    n1_o = Math.pow(Number.parseInt(x), Number.parseInt(y));

    document.getElementById("resp").value = n1_o;
});

btn7.addEventListener("click", function() {
    var x = parseInt(prompt("Digite um número para calcular a raiz quadrada: "));

    n1_o = Math.round(x);
    var n2_o = Math.sqrt(n1_o).toFixed(2);

    document.getElementById("resp").value = n2_o;
    console.log(n2_o);
});