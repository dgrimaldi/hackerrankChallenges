'use strict';
const readLineFunc= require('../../utils/readLine');

/** Complete the 'encryption' function below.
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.*/
function encryption(s: string): string {
    // Write your code here
    const text: string = s.trim()
    const inputLength: number = Math.sqrt(text.length)
    const rows: number = Math.round(inputLength)
    const columns: number = Math.ceil(inputLength)

    const path: string[] = []
    for(let i = columns; i <= (rows * columns) ; i += columns){
        path.push(text.slice(i-columns,i))
    }

    let output = ''
    for(let i = 0; i < columns; i++){
        let j = 0;
        while(j < path.length && path[j].at(i)) {
            output += path[j].at(i);j++
        }output += ' '
    }
    return output
}

async function main() {
    const inputLine = await readLineFunc.Input(1);

    return encryption(inputLine);
}

main();

module.exports = {encryption}
