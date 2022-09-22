function printAndSum(start, end) {
    
    let result = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        
        sum += i;
        let current = String(i);
        result += `${current} `

    }
        console.log(result);
        console.log(`Sum: ${sum}`);

}