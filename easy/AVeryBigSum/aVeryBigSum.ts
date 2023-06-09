'use strict';
const readLineFunc= require('../../utils/readLine');

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar: number[]): number {
    // Write your code here
    return ar.reduce((prevValue: number, currValue: number)=> prevValue + currValue);

}

async function main() {
    const inputLine = await readLineFunc.Input(1);

    const ar: number[] = inputLine.replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    return aVeryBigSum(ar);
}

main();

module.exports = {aVeryBigSum}
