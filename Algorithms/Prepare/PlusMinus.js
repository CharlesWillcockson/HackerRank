'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let posCount = arr.filter(number => number > 0).length / n;
    let negCount = arr.filter(number => number < 0).length / n;
    let zeroCount = arr.filter(number => number == 0).length / n;
    return console.log(posCount.toFixed(6)  + '\n' + negCount.toFixed(6) + '\n' + zeroCount.toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
