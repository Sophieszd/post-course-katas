// 6. How do you find all pairs of an integer array whose sum is equal to a given number?

const sumPairs = (numArray, sum) => {
    numberIndexes = {};
    
    for(i = 0; i < numArray.length; i += 1) {
        let currentDifference = sum - numArray[i];

        if(numberIndexes[currentDifference] !== undefined && numberIndexes[currentDifference] !== i) {
            return [i, numberIndexes[currentDifference]];
        } else {
            numberIndexes[numArray[i]] = i;
        }
    }
};
console.log(sumPairs([2, 7, 2, 3, 9, 1, 4], 16));

// Solution not working
