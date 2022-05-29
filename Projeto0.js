const prompt = require('prompt-sync')();
console.clear();

let perg1 = prompt('Você gosta de chocolate? 1[sim]/2[não] ');
let perg2 = prompt('Você gosta de bolo? 1[sim]/2[não] ');
let perg3 = prompt('Você estava em casa? 1[sim]/2[não] ');
let perg4 = prompt('Você viu o bolo na geladeira? 1[sim]/2[não] ');
let perg5 = prompt('Você sabe quem comeu o bolo da geladeira? 1[sim]/2[não] ');


let pontuacao = 0


if (perg1 == 1) {
pontuacao++
}
if (perg2 == 1) {
pontuacao++
}
if (perg3 == 1) {
pontuacao++
}       
if (perg4 == 1) {
pontuacao++
}
if (perg5 == 1) {
pontuacao++
}

if (pontuacao <= 2) {
console.log(`\nVocê é inocente.`)
}
else if (pontuacao == 3) {
console.log(`\nVocê é suspeito.`)
}
else if (pontuacao >= 4) {
console.log(`\nVocê é culpado.`)
}




console.log();