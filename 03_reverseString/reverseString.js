const reverseString = function(string) {
    let stringArray = string.split("");
    let arrayLength = stringArray.length;
    let reversedString = [];

    for(let arrayIndex = arrayLength - 1;arrayIndex>=0;arrayIndex--) {
        reversedString.push(stringArray[arrayIndex]);
    }

    reversedString = reversedString.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
