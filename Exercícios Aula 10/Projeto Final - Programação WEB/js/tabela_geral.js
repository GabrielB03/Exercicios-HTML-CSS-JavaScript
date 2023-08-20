"use strict"

import { Calculos } from "./calculos.js"


let fii_user = [];
let fii_table = [];

async function carregarDadosUser(url) {
  await fetch(url)
    .then(resp => resp.json())
    .then(json => fii_user = json);
  //Carregou os dados do JSON e armazenou no vetor fii_user
  //console.log(fii_user)
  carregarDadosFundos();
}

async function carregarDadosFundos() {

  for (let fii of fii_user) {
    let json = await fetch(`https://api-simple-flask.herokuapp.com/api/${fii.nome}`)
      .then(resp => resp.json());
    //Carregou os dados do site de acordo com os valores armazenados no vetor fii_user que se originou de outro JSON
    fii_table.push(json);
    //JSON que iremos trabalhar, armazenado no vetor fii_table
  }
  exibirTabela();

}



//json intero é fii_user
//json externo(do site) é fii_table

carregarDadosUser("json/fii.json");
function exibirTabela() {
  let total_cotas = 0;
  let total_investido = 0;
  let total_proventos = 0;

  //Para cada fundo do vetor fii_user
  fii_user.forEach((element) => {
    //Pegue o objeto de informação correspondente à esse fundo. Condição: Se o nome do fundo do objeto do site possuí (é igual) ao nome do fundo do objeto local em maiúsculo!
    let fii_informacao = fii_table.find((objeto) => objeto.fundo.indexOf(element.nome.toUpperCase()) != -1)

    /*Atenção pessoal da tabela! Essa variável aqui em baixo contém um objeto com o resultado de todos
    os cálculos respectivos ao fundo no laço de repetição!
    O objeto possuí atributos com nomes para cada cálculo que foi pedido
    Acessem cada informação correspondente para colocar na tabela: Exemplo: fii_calculos.valorProvento(é o valor do provento!)
    Para verem os nomes dos atributos vcs podem dar uma olhada lá no arquivo calculos.js*/

    //Pegue os dois objetos e retorne o vetor dos cálculos referentes à esse fundo
    let fii_calculos = new Calculos(element, fii_informacao)


    /**prints só para testes */
    //console.log(element)
    //console.log(fii_informacao)
    //console.log(fii_calculos)
    /**Exemplo de como pegar um cálculo do objeto que criei: */
    //console.log(fii_calculos.precoMedio)

    /**--------------- */
    //console.log("fim-elemento")


    //Implementação de linha
    document.querySelector("table>tbody").innerHTML += `
        <tr class ="${(fii_calculos.percentualRendimento >= 0.9) ? 'positivo' : 'negativo'}">
            <td>${fii_informacao.fundo}</td>
            <td>${fii_informacao.setor}</td>
            <td>${fii_calculos.dataFechamentoFii}</td>
            <td>${fii_calculos.dataPagamentoProvento}</td>
            <td>R$${fii_calculos.valorProvento.toFixed(2)}</td>
            <td>R$${fii_informacao.valorAtual}</td>
            <td>${element.qtde}</td>
            <td>R$${fii_calculos.totalInvestido}</td>
            <td>R$${fii_calculos.precoMedio.toFixed(2)}</td>
            <td>${fii_calculos.percentualRendimento.toFixed(2)}%</td>
            <td>${fii_informacao.dividendYield}%</td>
            <td>R$${fii_informacao.rendimentoMedio24M.toFixed(2)}</td>
            <td>R$${fii_informacao.valorPatrimonioPCota.toFixed(2)}</td>
            <td>R$${fii_informacao.pvp.toFixed(2)}</td>
        </tr>
        `
    //Somatória
    total_investido += fii_calculos.totalInvestido;
    total_proventos += fii_calculos.totalProventosRecebidos;
    total_cotas += element.qtde;

    //Fim laço foreach
  })

  //Implementação última linha
  document.querySelector("table>tbody").innerHTML += `
    <tr class = 'fundo_total'>
      <td colspan = '4'>Total Geral</td>
      <td>R$ ${total_proventos.toFixed(2)}</td>
      <td>-</td>
      <td>${total_cotas}</td>
      <td>R$ ${total_investido.toFixed(2)}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  `;
  //Remoção imagem de loading ao terminar a execução da função
  document.getElementById("loading").style.display = "none"
}