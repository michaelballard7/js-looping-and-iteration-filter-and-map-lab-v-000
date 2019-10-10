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
            if(driver.name === matcher[key]){
                matches.push(driver);
            };
        };
    });
    return matches;

}
