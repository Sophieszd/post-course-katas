// 14. How do you swap two numbers without using a third variable?

const swapTwoNumbers = () => {
    let a = array[0];
    let b = array[1];

    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
};
const array = [10, 40];
console.log(swapTwoNumbers());