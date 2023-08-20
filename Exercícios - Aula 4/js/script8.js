"use strict";

let nome = prompt("Digite seu nome: ");
let nascimento = parseInt(prompt("Digite seu ano de nascimento: "));
let atual = parseInt(prompt("Digite o ano atual: "));

alert(`Nome: ${nome}
Idade: ${atual - nascimento}`);