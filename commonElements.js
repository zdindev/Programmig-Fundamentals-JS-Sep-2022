function commonElements(arr1, arr2) {

    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    for (let i = 0; i < arr1Length; i++) {

        let arr1Current = arr1[i];

        for (let k = 0; k < arr2Length; k++) {

            let arr2Current = arr2[k];

            if (arr1Current === arr2Current) {

                console.log(arr1Current)
            }
        }   
    }
}
