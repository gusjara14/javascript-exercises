const removeFromArray = function(array,...remove) {
    console.log("Length of args: " + Object.keys(arguments).length);

    
    for(let argumentsIndex = 1;argumentsIndex<=Object.keys(arguments).length-1;argumentsIndex++) {
        console.log(arguments[argumentsIndex]);
        let removalIndex = array.indexOf(arguments[argumentsIndex]);
        if(removalIndex == -1) continue;
        console.log("removalIndex: " + removalIndex);
        array = array.slice(0, removalIndex).concat(array.slice(removalIndex+1));    

    }
   
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;