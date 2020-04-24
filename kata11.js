// 11. How do you check if a given string is a palindrome?

const isPalindrome = () => {
    const string = "madam";
    const reverseString = string.split("").reverse().join("");
    return reverseString === string;
}
console.log(isPalindrome());