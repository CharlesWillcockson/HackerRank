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
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function processData(input) {
    //Enter your code here
    var N = parseInt(input),
        num = 1;

    function factorial(N){
        if (N > 1){
            num = num * N;
            factorial(N-1);
        }
    }
    factorial(N);
    console.log(num);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = factorial(n);

    ws.write(result + '\n');

    ws.end();
}
