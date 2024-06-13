/*
7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
*/

console.clear();
let matriz = new Array(3);

for (let c = 0; c < 3; c++) {
    matriz[c] = new Array(3);
    for (let l = 0; l < 3; l++) {
        let n: number = 0
        n = Math.floor(Math.random()*9)

        if(n >= 0 && n < 10) {
            matriz[c][l] = n
        } else {
            l--;
        }
    }
}
for (let l = 0; l < 3; l++) {
    console.log(matriz[l]);
}