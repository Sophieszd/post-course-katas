// 9. How do you check if two strings are anagrams of each other?

 const isAStringAnAnagram = (a, b) => {
    a = "baB";
    b = "abb";
    let stringOne = a.toLowerCase().split("").sort().join("");
    let stringTwo = b.toLowerCase().split("").sort().join("");
    return stringOne === stringTwo;  
 }
 console.log(isAStringAnAnagram());