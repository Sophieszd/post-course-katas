// 2. How do you find the duplicate number on a given integer array?
// &
// 3. How do you find duplicate numbers in an array if it contains multiple duplicates?

const getDuplicates = (arr) => {
    let sortedArray = arr.slice().sort();
    let duplicates = [];
    for (i = 0; i < sortedArray.length -1; i++) {
        if (sortedArray[i +1] === sortedArray[i]) {
            duplicates.push(sortedArray[i]);
        }
    }
    console.log(duplicates);
    return duplicates;
}

const numArray = [1, 2, 2, 4, 2, 4, 8];
const duplicateArray = getDuplicates(numArray);