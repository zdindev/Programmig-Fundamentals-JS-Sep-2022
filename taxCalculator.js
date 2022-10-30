function taxCalculator(input) {

    let carData = input.shift()
    .split('>>');

    let carDataLength = carData.length;
    let nationalRevenueAgency = 0;

    for (let i = 0; i < carDataLength; i++) {

        let currentElementToArr = carData.shift()
        .split(' ');

        let typeOfVehicle = currentElementToArr.shift();
        let years = Number(currentElementToArr.shift());
        let mileage = Number(currentElementToArr.shift());

        let yearsInUseTaxDecline = 0;
        let mileageTaxIncrease = 0;
        let taxCost = 0;

        switch (typeOfVehicle) {
            case `family`:
                
                yearsInUseTaxDecline = 5 * years;
                mileageTaxIncrease = Math.floor(mileage / 3000) * 12;

                taxCost = (50 - yearsInUseTaxDecline) + mileageTaxIncrease;

                nationalRevenueAgency += taxCost;

                console.log(`A family car will pay ${taxCost.toFixed(2)} euros in taxes.`);

                break;
            case 'heavyDuty':

                yearsInUseTaxDecline = 8 * years;
                mileageTaxIncrease = Math.floor(mileage / 9000) * 14;

                taxCost = (80 - yearsInUseTaxDecline) + mileageTaxIncrease;

                nationalRevenueAgency += taxCost;

                console.log(`A heavyDuty car will pay ${taxCost.toFixed(2)} euros in taxes.`);
                
                break;
            case 'sports':

                yearsInUseTaxDecline = 9 * years;
                mileageTaxIncrease = Math.floor(mileage / 2000) * 18;

                taxCost = (100 - yearsInUseTaxDecline) + mileageTaxIncrease;

                nationalRevenueAgency += taxCost;

                console.log(`A sports car will pay ${taxCost.toFixed(2)} euros in taxes.`);
                
                break;
            default:
                console.log(`Invalid car type.`);
                
            break;
        }    
    }
  
    console.log(`The National Revenue Agency will collect ${nationalRevenueAgency.toFixed(2)} euros in taxes.`);

}
