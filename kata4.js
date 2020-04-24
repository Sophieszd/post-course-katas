// 4. How do you remove duplicates from an array in place?

const array = [20, 20, 30, 20, 10, 40];

const removeDupicates = () => {
    return [...new Set(array)];
}
console.log(removeDupicates());