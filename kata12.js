// 12. How can a given string be reversed using recursion?

const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str;
};

console.log(reverseString("reverse this sentence"));