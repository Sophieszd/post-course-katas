// 5. How do you find the largest and smallest number in an unsorted integer array?

const numArray = [2, 7, 2, 3, 9, 1, 4];
let sortedArray = numArray.slice().sort();
const largestNumber = sortedArray[sortedArray.length -1];
const smallestNumber = sortedArray[0];

    console.log(largestNumber);
    console.log(smallestNumber);