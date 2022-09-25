function sumOfDigits(number) {

    let inputToString = String(number);
    let sum = 0;
    
    for (let i = 0; i <= inputToString.length - 1; i++) {
        let current = Number(inputToString[i]);
        sum += current;
    }

    console.log(sum);
}