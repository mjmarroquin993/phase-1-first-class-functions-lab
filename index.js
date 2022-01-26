const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
} 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayofDrivers, func) {
    return func(arrayofDrivers)
}