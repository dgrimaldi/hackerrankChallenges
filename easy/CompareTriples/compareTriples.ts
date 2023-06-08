'use strict';
const readLineFunc= require('../../utils/readLine');

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function compareTriplets(a: number[], b: number[]): number[] {
    let res: number[] = [0, 0]
    if(a.length === b.length){
        a.forEach((elementA: number, index:number) => {
            const elementB = b[index];
            if(elementA > elementB) {res = [res[0]+1, res[1]]}
            if(elementB > elementA) {res = [res[0], res[1]+1]}
        })
    }
    return res

}
async function main() {

    const inputLine = await readLineFunc.Input(2);

    const a: number[] = inputLine[0].replace(/\s+$/g, '').split(' ').map((aTemp: string) => parseInt(aTemp, 10));

    const b: number[] = inputLine[1].replace(/\s+$/g, '').split(' ').map((bTemp: string) => parseInt(bTemp, 10));

    return compareTriplets(a, b);
}

main();

module.exports = {compareTriplets}