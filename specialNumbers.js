function specialNumbers(num) {

    for (let current = 1; current <= num; current++) {

        let sum = 0;
        let numberToString = current.toString();
        let stringLength = numberToString.length - 1;

        for (let index = 0; index <= stringLength; index++) {

            sum += Number(numberToString[index]);

        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${current} -> True`);

        } else {
            console.log(`${current} -> False`);

        }

    }


}