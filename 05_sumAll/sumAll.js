const sumAll = function(start, end) {
    let sum = 0;
    let smallerInt;
    let largerInt;

    if(start<0 || end<0 || typeof start != "number" || typeof end != "number") return "ERROR";

    if(start>end) {
        largerInt = start;
        smallerInt = end; 
    } else {
        largerInt = end;
        smallerInt = start;
    }
    for(let index = smallerInt;index<=largerInt;index++) {
        sum+=index;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
