import listaDeFrutas from "./dados/dados.js";
import {
  recebePalavraOculta,
  atualizarPalavraOculta,
  verificaLetraNaPalavra,
  validarletra, fraseExibida
} from "./funcoes/funcoes.js";
import teclado from "readline-sync";

let statusJogo = "andamento";
let totalChances = 4;

const palavraEscolhida = listaDeFrutas[Math.floor(Math.random(0, 1) * listaDeFrutas.length)];

let palavraOculta = recebePalavraOculta(palavraEscolhida);

console.log(`----------Jogo da Forca----------`);
console.log(`\nFruta com ${palavraEscolhida.length} letras...\n`);

while (statusJogo === "andamento") {
  console.log(`Fruta: ${palavraOculta}`);

  const pergunta = teclado.question("Digite uma letra: ").toLowerCase();

  if (validarletra(pergunta)) {
    if (verificaLetraNaPalavra(palavraEscolhida, pergunta)) {
      palavraOculta = atualizarPalavraOculta(palavraOculta, pergunta, palavraEscolhida);
      if (palavraOculta === palavraEscolhida) {
        statusJogo = "venceu";
      }
    } else {
      totalChances--;

      if (totalChances > 0) {
        console.log(
          `Resposta Errada, você ainda tem mais ${totalChances} chances`);
      } else {
        statusJogo = "perdeu";
      }
    }
  } else {
    console.log(`\nPor favor, digite a apenas letras, sem números ou caracteres especiais...`);
  }
}

fraseExibida(statusJogo);