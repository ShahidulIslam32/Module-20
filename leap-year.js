
function isLeapYear(leapyearFinder){
    if(leapyearFinder% 4 == 0){
        return true;

    } else if(leapyearFinder % 4 != 0){
        return false;
        
    }
    return false;
}

let yearOne = 2012;
let yearResult = isLeapYear(yearOne);
console.log(yearResult)