function triangleOfNumbers(endNumber) {
    let result = 0;

    for (let i = 1; i <= endNumber; i++) {
        let result = '';

        for (let k = 1; k <= i; k++) {
            result += `${i} `
        }
        console.log(result);

    } 

}