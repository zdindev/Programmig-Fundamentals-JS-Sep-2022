function blackFlag(input) {

    let daysOfPlunder = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expextedPlunder = Number(input[2]);

    let totalPlunder = 0;

    let additionalPlunder = dailyPlunder * 0.5;
    

    for (let startDay = 1; startDay <= daysOfPlunder; startDay++) {

        let currentDay = startDay;
        let thirdDay = currentDay / 3;
        let fifthDay = currentDay / 5;

        totalPlunder += dailyPlunder;

        if (thirdDay % 1 == 0) {
            totalPlunder += additionalPlunder;
        }

        if (fifthDay % 1 == 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
        
    }

    if (totalPlunder >= expextedPlunder) {
        console.log(`Ahoy ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {

        let result = totalPlunder / expextedPlunder * 100;
        console.log(`Collected only ${result.toFixed(2)}% of the plunder.`);
    }

}
