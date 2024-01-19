const repeatString = function(string, num) {
    let repeatedString = ""
    if(num<=-1) return "ERROR";
    
    for (let repititions = 0;repititions<num;repititions++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
