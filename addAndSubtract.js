function addAndSubstract(array) {

    let arrLength = array.length;
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < arrLength; i++) {

        originalSum += array[i];
        let currentIndex = array[i];

        if (currentIndex % 2 == 0) {

            array[i] = array[i] + i;

        } else { 

            array[i] = array[i] - i;

        }

        modifiedSum += array[i];
    }

    console.log(array);
    console.log(originalSum);
    console.log(modifiedSum);

}