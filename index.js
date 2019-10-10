// Code your solution here:

function driversWithRevenueOver(drivers, number){
    return drivers.filter((driver)=> driver.revenue > number)
}

function driverNamesWithRevenueOver(drivers, number){
    let driversNames = [];
    drivers.filter((driver) => {
        if (driver.revenue > number){
            driversNames.push(driver.name)
        }
    })
    return driversNames;
}

function exactMatch(drivers, matcher){
    let matches = [];
    drivers.map(driver => {
        for(key in matcher){
            console.log('Driver name '+ driver[key])
            if(driver[key] === matcher[key]){
                matches.push(driver);
            };
        console.log('Mathcer '+ matcher[key])
        };
    });
    return matches;

}
