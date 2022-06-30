'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram(a, b) {
    // Write your code here
    let map = {};
    let aCount = 0;
    let bCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (!map[a[i]]) {
            map[a[i]] = 1;
        } else {
            map[a[i]] += 1;
        }
    }

        for (let j = 0; j < b.length; j++) {
            if (map[b[j]]) {
                aCount += 1;
                map[b[j]] -= 1;
            } else {
                bCount += 1
            }
        }
        return ((a.length - aCount) + bCount);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
