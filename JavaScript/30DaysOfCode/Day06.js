function processData(input) {
    //Enter your code here
    message = input.split("\n");
    let n = parseInt(message[0]);
    for (let i = 0; i<n; i++){
        let m = message[i + 1];
        let l = m.length;
        let array = m.split('');
        let evens = "";
        let odds = "";

        for (let x = 0; x < l; x++){
            if (x % 2 == 0)
                evens = evens + array[x];
            else
                odds = odds + array[x];
        }
        console.log(evens + " " + odds);


    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
