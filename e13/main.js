/*13 – Faça um algoritmo que mostre o resultado da expressão abaixo: (( x 5) *y) z Obs: Ler valores
para as variáveis x, y e z. */

function algoritmo(numero, resultado){
    resultado = ((numero[0] * 5) * numero[1]) * numero[2];
    return resultado 
}

var numero = [3], resultado = 0;

numero[0] = 2;
numero[1] = 10;
numero[2] = 5;

console.log("O resultado é: " + algoritmo(numero,resultado));
