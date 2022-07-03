// Code your solution in this file!
let drivers = [`Antonia`, `Nuru`, `Amari`, `Mo`]

const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(){
    return drivers.slice (-2)
}

let selectingDrivers = [returnFirstTwoDrivers(), returnFirstTwoDrivers()]
