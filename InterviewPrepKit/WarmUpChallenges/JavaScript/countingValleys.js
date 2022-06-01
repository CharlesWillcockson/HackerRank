'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(n, s) {
    // Write your code here
    let steps = s.split("");
    let valleyCount = 0;
    let currentSeaLevel = 0;
    let valleyStatus = false;

    steps.forEach(step => {
        step === 'U' ? currentSeaLevel++ : currentSeaLevel --;
        if (currentSeaLevel < 0 && !valleyStatus){
            valleyCount++;
            valleyStatus = true;
        }else if (currentSeaLevel >= 0 && valleyStatus){
            valleyStatus = false;
        }
    })
    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
