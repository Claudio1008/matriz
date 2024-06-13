/*
O código 1 e 2 desse slide deve ser salva e enviado juntos com
as atividades abaixo. Todo o conteúdo deve ser
compartilhado no github
*/

console.clear();
let teclado = require (`Prompt-sync`)();
let matriz: string[][] = []; // declarando minha matriz

// No código que esta no slide não mostra a parte em que é declarada a váriavel linha e coluna, então eu coloquei da forma em que acho estar correta.
let linha: number = parseInt(teclado(`Digite o número de linhas: `));
let coluna: number = parseInt(teclado(`Digite o número de colunas: `));

// z percorre as linhas
for (let z = 0; z < linha; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z
    matriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        // Ateibuição via entrada de dados manual na variavel nome
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${z}, ${x}] da matriz: `);

        // Atribui nome na matriz do endereço dado por z e x
        matriz[z][x] = nome;
    }
}
// Imprime a matriz
console.log(matriz);