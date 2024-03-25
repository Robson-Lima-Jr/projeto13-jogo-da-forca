import listaDeFrutas from "./dados/dados.js";
import {recebePalavraOculta, atualizarPalavraOculta, validarletra} from "./funcoes/funcoes.js";
import teclado from "readline-sync";

let statusJogo = "andamento";

const palavraEscolhida = listaDeFrutas[Math.floor(Math.random(0, 1) * listaDeFrutas.length)];

const palavraOculta = recebePalavraOculta(palavraEscolhida);

while (palavraAtualizada === "andamento") {
    
};

let palavraAtualizada = atualizarPalavraOculta(palavraOculta, palavraDigitada, palavraEscolhida);

console.log(palavraAtualizada);