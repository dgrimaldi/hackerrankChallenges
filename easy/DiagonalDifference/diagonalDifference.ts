'use strict';
const readLineFunc= require('../../utils/readLine');

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let leftToRightDiagonal: number = 0;
    let rightToLeftDiagonal: number = 0
    const matrixLength: number = arr.length

    arr.forEach((value: number[], index: number) => {
        leftToRightDiagonal += value[index];
        rightToLeftDiagonal += value[matrixLength - 1 - index]
    })

    return Math.abs(rightToLeftDiagonal - leftToRightDiagonal)
}

async function main() {

    const numberOfLines = 3

    const inputLine = await readLineFunc.Input(numberOfLines);

    let arr: number[][] = Array(numberOfLines);

    for (let i: number = 0; i < numberOfLines; i++) {
        arr[i] = inputLine[i].replace(/\s+$/g, '').split(' ').map((arrTemp: string) => parseInt(arrTemp, 10));
    }

    console.log(diagonalDifference(arr))

    return diagonalDifference(arr);
}

main();

module.exports = {diagonalDifference}
