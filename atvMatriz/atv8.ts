/*
8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
*/

function matrizAleatoria(linha: number, coluna: number): number[][] {
    let matriz: number[][] = [];
    for (let z = 0; z < linha; z++) {
        matriz[z] = [];
        for (let x = 0; x < coluna; x++) {
            matriz[z][x] = Math.floor(Math.random() * 21);
        }
    }
    return matriz;
}

function maiorNumero(matriz: number[][]): { valor: number; linha: number; coluna: number } {
    let nMax = matriz[0][0];
    let linhaMax = 0;
    let colunaMax = 0;

    for (let z = 0; z < matriz.length; z++) {
        for (let x = 0; x < matriz[z].length; x++) {
            if (matriz[z][x] > nMax) {
                nMax = matriz[z][x];
                linhaMax = z;
                colunaMax = x;
            }
        }
    }

    return { valor: nMax, linha: linhaMax, coluna: colunaMax };
}

let matriz = matrizAleatoria(4, 4);
console.log(matriz);

let { valor, linha, coluna } = maiorNumero(matriz);