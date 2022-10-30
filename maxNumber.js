function maxNumber(arr) {

    let arrLength = arr.length;
    let result = '';

    for (let i = 0; i < arrLength; i++) {

        let current = arr[i];
        let check = [];
        let isGreater;

        if (i == arrLength - 1) {

            result += `${current}`;

            break;
        }

        for (let k = i + 1; k < arrLength; k++) {

            let currentRight = arr[k];

            if (current > currentRight) {

                isGreater = true;
                check.push(isGreater);

            } else {

                isGreater = false;
                check.push(isGreater);
            }       
        }

        if (check.includes(false)) {

        } else {
            result += `${current} `;
        }
    }

    console.log(result);
}
