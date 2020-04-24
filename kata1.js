// 1. How do you find the missing numbers in a given integer array?

numberArray = [1, 2, 3, 4, 6, 8];
count = numberArray[numberArray.length - 1];
missingArray = [];

for(i = 1; i <= count ; i++) {
    if(numberArray.indexOf(i) == -1) {
            missingArray.push(i);
    }
}
console.log(missingArray);