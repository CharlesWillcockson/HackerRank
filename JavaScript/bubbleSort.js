function bubbleSwap(array, n) {
    let i, j, temp;
    let swapped;
    for (i = 0; i < n - 1; i++ ) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (array[j] > array[j + 1]){
                temp = array[j];
                array[j] = array[j + 1];
                swapped = true;
            }
        }
        if (swapped == false){
            break;
        }
    }
}