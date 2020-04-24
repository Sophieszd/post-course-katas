// 13. How do you check if two strings are a rotation of each other?

const areRotations = (stringOne, stringTwo) => {
    if(stringOne.length != stringTwo.length) return false;
    return (stringOne + stringOne).indexOf(stringTwo) != -1;
}

console.log(areRotations("abcd", "cdab"));
console.log(areRotations("abcd", "ceab"));