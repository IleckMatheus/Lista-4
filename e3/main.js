/*3 – Faça um algoritmo que receba 10 idades, pesos e alturas, calcule e mostre:
• A média das idades das 10 pessoas;
• A quantidade de pessoas com peso superior a 90 quilos e altura inferior a 1.50;
• A porcentagem de pessoas com idade entre 10 e 30 anos entre as pessoas que medem mais de
1.90.*/

function total_idade(idade, idade_total, media_idade) {
    for (var i = 0; i < 10; i++) {
        idade_total = idade_total + idade[i];
    }
    media_idade = idade_total / 10;
    return media_idade
}

function total_peso(peso, peso_total) {
    for (var i = 0; i < 10; i++) {
        if ((peso[i] > 90) && (altura[i] < 150)) {
            peso_total++;
        }
    }
    return peso_total
}

function total_altura(cont, porcentagem) {
    porcentagem = 100 * cont / 10;
    return porcentagem.toFixed(2)
}

var idade = [10], peso = [10], altura = [10], media_idade, peso_total = 0, altura_total = 0, idade_total = 0, cont = 0, porcentagem;
for (var i = 0; i < 10; i++) {
    idade[i] = parseInt(prompt("Digite sua Idade: "));
    peso[i] = parseFloat(prompt("Digite seu Peso: "));
    altura[i] = parseFloat(prompt("Digite sua Altura: "));

    if ((idade[i] >= 10 && idade[i] <= 30) && (altura[i] > 190)) {
        cont++;
    }
}

console.log("A media de idade: " + total_idade(idade, idade_total, media_idade));
console.log("Pessoas com mais de 90kg e menores que 150cm: " + total_peso(peso, peso_total));
console.log("Porcentagens de pessoas entre 10 e 30 anos com mais de 190cm: " + total_altura(cont, porcentagem) + " % ");