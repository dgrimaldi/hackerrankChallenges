'use strict';
const readLineFunc = require('../../utils/readLine');

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
    // Write your code here
    const uniqueLeadboard: number[] = [...new Set(ranked)]

    const finalRank: number[] = [];
    let lowestRank: number = uniqueLeadboard.length;
    player.forEach((playerScore) => { 
        while(playerScore >= uniqueLeadboard[lowestRank - 1] && lowestRank > 0) {
            uniqueLeadboard.pop();
            lowestRank--;
        }
        finalRank.push(lowestRank + 1)
    })
    return finalRank
}

async function main() {
    const inputLine = await readLineFunc.Input(2);

    const ranked: number[] = inputLine[0].replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));
    const player: number[] = inputLine[1].replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10))

    return climbingLeaderboard(ranked, player);
}

main();

module.exports = {climbingLeaderboard}
