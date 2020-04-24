// 16. How do you check if a string contains only digits?

const onlyDigitsString = (string) => {
    if(string.match(/^[0-9]+$/) != null) {
        return true;
    }
}
// const string = "01234";
console.log(onlyDigitsString("01234"));

// Still working on solution, logs 'true' correctly but if false logs undefined.
