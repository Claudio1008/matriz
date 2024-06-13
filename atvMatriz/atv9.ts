/*9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
*/

const teclado = require(`prompt-sync`)();
function criarMatriz(): number[][] {
    let matriz: number[][] = [];
    console.log(`Insira os elementos da matriz 6x6: `);

    for (let x = 0; x < 6; x++) {
        matriz[x] = [];
        
        for (let y = 0; y < 6; y++) {
            matriz[x][y] = parseInt(teclado(`Insira o elemento da posição [${x}][${y}]: `) || `0`);
        }
    }
    return matriz;
}

function somaPares(matriz: number[][]): number {
    let soma: number = 0;

    for (let x = 0; x < 6; x++) {
        for (let y = 0; y < 6; y++) {
            if (y % 2 == 0) { 
                soma += matriz[x][y];
            }
        }
    }
    return soma;
}

function principal(): void {
    let matriz: number[][] = criarMatriz();
    console.log(matriz);
    let soma: number = somaPares(matriz);
    console.log(`A soma dos elementos das colunas pares é: ${soma}`);
}

principal();
