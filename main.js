import listaDeFrutas from "./dados/dados.js";
import recebePalavraOculta from "./funcoes/funcoes.js";
import teclado from "readline-sync";

const palavraEscolhida = listaDeFrutas[Math.floor(Math.random(0, 1) * listaDeFrutas.length)];

const palavraOculta = recebePalavraOculta(palavraEscolhida);

console.log(palavraOculta);