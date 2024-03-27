const recebePalavraOculta = (palavra) => {
    let primeiraLetra = palavra[0];
    let ocultaLetras = "_".repeat(palavra.length -1);
    let palavraOculta = primeiraLetra + ocultaLetras;
    return palavraOculta;
};

const atualizarPalavraOculta = (palavraOculta, letraDigitada, palavraEscolhida) => {
    let palavraOcultaArray = palavraOculta.split("");

    for(let i = 0; i < palavraEscolhida.length; i++) {
        if (letraDigitada === palavraEscolhida[i]) {
            palavraOcultaArray[i] = letraDigitada;
        }
    };

    return palavraOcultaArray.join("");
};

const verificaLetraNaPalavra = (palavraEscolhida, letraDigitada) => {
    if (palavraEscolhida.includes(letraDigitada)) {
        return true;
    } else {
        return false;
    }
};

const validarletra = (letraDigitada) => {
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
        return true;
    } else {
        return false;
    }
};

const fraseExibida = (resultadoJogo) => {
    if(resultadoJogo === "venceu") {
        console.log("\n-----Você venceu o Jogo-----");
    } else {
        console.log("\n-----Você perdeu o Jogo-----");
    }
};

export {recebePalavraOculta, atualizarPalavraOculta, verificaLetraNaPalavra ,validarletra, fraseExibida};