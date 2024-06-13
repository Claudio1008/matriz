/*
3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.
*/

console.clear();
let teclado = require('prompt-sync')();
let matriz: number[][] = [];

let linha: number = parseInt(teclado('Digite o número de linhas: '));
let coluna: number = parseInt(teclado('Digite o número de coluna: '));

for (let z = 0; z < linha; z++) {
    matriz[z] = [];
    for (let x = 0; x < coluna; x++) {
        let numero: number = parseFloat(teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `));
        matriz[z][x] = numero;
    }
}
for (let l = 0; l < linha; l++) {
    console.log(matriz[l]);
}


