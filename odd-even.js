
function isEven(checkEven){
    if(checkEven % 2 == 0){
        return true;
       
    }
    return false;
}

let Even = 16;
let result = isEven(Even)
console.log(result)

let numberTwo = 22;
let updateResult = isEven(numberTwo)
console.log(updateResult)

function evenOrodd(number){
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

let mynumber = 8;
let finalResult = evenOrodd(mynumber);
console.log(finalResult);

function isOdd(numbertwo){
    if(numbertwo % 2 != 0){
        return true;
    }
    return false;
}

let oddcheck = 24;
let update = isOdd(oddcheck)
console.log(update)