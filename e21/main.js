/*21 – Fazer um algoritmo que leia três notas e mostre: a média das notas, a situação final do aluno
onde aprovado media = 7. */

function media_nota(nota, nota_total, resultado){
    for(var i = 0; i < 3; i++){
        nota_total = nota_total + nota[i];
    }
    resultado = nota_total / 3;
    return resultado
}

function nota_final(resultado, situacao){
    if(resultado > 6){
        situacao = "Aprovado";
        return situacao
    }else{
        situacao = "Reprovado";
        return situacao
    }
}

var nota = [3], nota_total = 0, resultado = 0, situacao;

for(var i = 0; i < 3; i++){
    nota[i] = parseFloat(prompt("Digite sua nota: "));
}

resultado = media_nota(nota, nota_total, resultado);

console.log(media_nota(nota, nota_total, resultado));
console.log(nota_final(resultado, situacao));
