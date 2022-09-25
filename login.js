function login(input) {

    let index = 0;
    let user = input[index];
    index++;
    let password = input[index];
    index++;

    let correctPassword = '';
    let userLength = user.length - 1;
    let wrongPassCount = 0;
    

    for (let i = userLength; i <= userLength; i--) {
       
        if (i < 0) {
            break;
        }

        let currentChar = user[i]
        correctPassword += `${currentChar}`    
    }

    while (password !== correctPassword) {
        wrongPassCount++;

        if (wrongPassCount == 4) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }

        password = input[index];
        index++;
       
    }

    if (password === correctPassword) {
    console.log(`User ${user} logged in.`);
    }
    
   
}