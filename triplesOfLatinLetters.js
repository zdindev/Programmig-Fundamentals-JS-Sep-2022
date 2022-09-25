function triplesOfLatinLetters(parameter) {

    let number = Number(parameter);
    

    for (let i = 0; i < number; i++) {
        
        let firstChar = String.fromCharCode(97 + i);


        for (let k = 0; k < number; k++) {
            let secondChar = String.fromCharCode(97 + k);


            for (let j = 0; j < number; j++) {
                let result = '';
                let thirdChar = String.fromCharCode(97 + j);
    
                result += `${firstChar}${secondChar}${thirdChar}`

                console.log(result);
            }
        }    

    }
   
}
