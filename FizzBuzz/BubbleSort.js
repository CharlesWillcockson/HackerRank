function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){

        for (let j = 0; j < (arr.length - i -1); j++){
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}

let arr = [4, 323, 1, 234, 1232, 30, -12];
bubbleSort(arr);