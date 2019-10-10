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
    return drivers.map((driver)=>{
        let matches = false

        for (key of matcher){
            matches = driver[key] === matcher[key]
        }

        return matches
    });
}
