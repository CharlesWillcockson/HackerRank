function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let N = parseInt(input[0]);
    let phoneBook = [];

    for (let i = 0; i < N; i++){
        let line = input[i + 1];
        line = line.split(' ');
        phoneBook[line[0]] = line[1];
    }

    for (let i = N + 1; i < input.length; i++){
        let num = (phoneBook[input[i]])
        if (num !== undefined){
            console.log(input[i] + '=' + num)
        }else{
            console.log('Not found')
        }
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
