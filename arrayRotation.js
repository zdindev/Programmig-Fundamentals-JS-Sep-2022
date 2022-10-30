function arrayRotation(arr, rotation) {

    let result = arr
    let arrLength = arr.length;

    for (let i = 0; i < rotation; i++) {

        let arrCurrent = arr[0];
        result.push(arrCurrent);
        result.splice(0, 1);

    }

    console.log(result.join(' '));

} 
