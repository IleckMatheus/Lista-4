/*12 – Faça um algoritmo que leia valores para as variáveis A, B e C e mostre o resultado da seguinte
expressão: ( A B ) *C */

function algoritmo(numero, resultado){
    resultado = (numero[0] + numero [1]) * numero[2];
    return resultado
}

var resultado = 0, numero = [3];

numero[0] = 5;
numero[1] = 5;
numero[2] = 5;

console.log("O resultado é: " + algoritmo(numero, resultado));

