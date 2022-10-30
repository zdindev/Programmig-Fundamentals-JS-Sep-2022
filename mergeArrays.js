function mergeArrays(arr1, arr2) {

    let mergedArray = [];
    let arr1Length = arr1.length;

    for (let i = 0; i < arr1Length; i++) {
        
        let arr1Current = arr1[i];
        let arr2Current = arr2[i];

        if (i % 2 == 0) {

            let result = Number(arr1Current) + Number(arr2Current);
            mergedArray.push(result);

        } else {

            let resultString = arr1Current + arr2Current;
            mergedArray.push(resultString);

        }
    }

    console.log(mergedArray.join(' - '));

}
