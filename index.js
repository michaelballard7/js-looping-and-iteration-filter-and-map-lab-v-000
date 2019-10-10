// Code your solution here:

function driversWithRevenueOver(drivers, number){
    return drivers.filter((driver)=> driver.revenue > number)
}

function driverNamesWithRevenueOver(drivers, number){
    // let driversNames = [];
    return drivers.filter((driver) => {
        if (driver.revenue > number){
            driver.name
        }
    })
    // return driversNames;
}

function exactMatch(drivers, revenue){

}
