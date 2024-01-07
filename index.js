// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42
    if (pickupLocation < hqLocation) {
        return hqLocation - pickupLocation
    
    } else {
        return pickupLocation - hqLocation
    }
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation)
    return blocks * 264
    
}

function distanceTravelledInFeet(start, destination) {
    let feetTravelled = Math.abs(destination - start)

    return feetTravelled * 264
}

function calculatesFarePrice(start, destination) {
    
    let feetTravelled = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet <= 2000){
        return (feetTravelled - 400) * 0.02
    }
    else if (feet > 2000 && feet < 2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}