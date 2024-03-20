const recebePalavraOculta = (palavra) => {
    let primeiraLetra = palavra[0];
    let ocultaLetras = "_".repeat(palavra.length -1);
    let palavraOculta = primeiraLetra + ocultaLetras;
    return palavraOculta;
};

export default recebePalavraOculta;