function sumOfOddNumbers(num) {

    let currentNum = -1;

    let sum = 0;

    for (i = 1; i <= num; i++) {

        currentNum += 2

        sum += currentNum

        console.log(currentNum);
        
    }

    console.log(`Sum: ${sum}`)
}