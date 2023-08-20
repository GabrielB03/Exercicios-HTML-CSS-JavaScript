"use strict";

let alt_degrau = parseFloat(prompt("Digite a altura de um degrau: "))
let alt_desejada = parseFloat(prompt("Digite a altura que deseja alcançar: "))

let alt_final = alt_desejada/alt_degrau;

alert(`${alt_final} metros`)