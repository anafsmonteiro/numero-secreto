const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gertarNumeroAleatorio();

function gertarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

//console.log(`Número secreto ${numeroSecreto}`);

const elementoMenorValor = document.querySelector('#menor-valor').innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor').innerHTML = maiorValor;

//Web Speech API - consultar MDN
