/*1 – Faça um algoritmo que receba a idade e o peso de 7 pessoas, calcule e mostre:
• A quantidade de pessoas com mais de 90 quilos;
• A média das idades das 7 pessoas. */

function qtdpeso(peso, contador){
    for (var i = 0; i < 7; i++){
        if(peso[i] > 90){
            contador ++;
        }
    }
    return contador;
}

function media_idade(idade, total_idade, media_id){
    for (var i = 0; i < 7; i++){
        total_idade = total_idade + idade[i];
    }
    media_id = total_idade / 7;
    return media_id
}

var total_idade = 0, media_id, idade = [ 7 ];
var peso = [ 7 ], contador = 0;

for(var i = 0; i < 7; i++){
    idade[i] = parseInt(prompt("Digite a sua idade: "));
    peso[i] = parseFloat(prompt("Digite o peso: "));
}

console.log("A media de idade é de: " + media_idade(idade,total_idade,media_id));

console.log("Quantidade de pessoas com mais de 90kg: " + qtdpeso(peso, contador));
