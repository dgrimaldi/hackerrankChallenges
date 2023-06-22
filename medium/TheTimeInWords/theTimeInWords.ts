'use strict';
const readLineFunc= require('../../utils/readLine');

const numberToText: {[value: number]: string} = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
}

/** Complete the 'encryption' function below.
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.*/
function timeInWords(h: number, m: number): string {
    let output: string = ''
    switch(m) {
        case 1:
            output = numberToText[m] + ' minute past ' + numberToText[h];
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            output = numberToText[m] + ' minutes past ' + numberToText[h];
            break;
        case 15:
            output =  'quarter past ' + numberToText[h];
            break;
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            output = numberToText[m] + ' minutes past ' + numberToText[h];
            break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
            output = numberToText[20] + " " + numberToText[m % 10] + ' minutes past ' + numberToText[h];
            break;
        case 30:
            output = 'half past ' + numberToText[h];
            break;
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
            const remaingMinutes = 60 - m
            output = numberToText[Math.floor(remaingMinutes / 10) * 10] + " " + numberToText[remaingMinutes % 10] + ' minutes to ' + numberToText[h+1]
            break;
        case 45:
            output = 'quarter to ' + numberToText[h+1];
            break;
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
            output = numberToText[60 - m] + ' minutes to ' + numberToText[h+1];
            break;
        default:
            output = numberToText[h] + " o' clock";
    }
    return output
}

async function main() {
    const inputLine: string = await readLineFunc.Input(2);

    const h: number = parseInt(inputLine[0].trim(), 10);

    const m: number = parseInt(inputLine[1].trim(), 10);

    return timeInWords(h, m);
}

main();

module.exports = {timeInWords}
