'use strict';

const readline= require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const Input = (numberOfLines: number): Promise<string[]> => {
    let response: string[] = [];
    let currentLine : number = 0;
    return new Promise((resolve, reject) => {
        rl.on('line', (userInput: string) => {
            response.push(userInput);
            if(currentLine === (numberOfLines - 1)){
                rl.close();
            } else  {
                currentLine ++;
            }
        });

        rl.on('close', () => {
            resolve(response);
        });
    })
}

module.exports = {Input}