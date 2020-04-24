// 15. How do you find all permutations of a string?

const permutationsOfString = (string) => {
    if (!string || typeof string !== "string") {
        return "Please input a string"
    } else if (string.length < 2) {
        return string
    }

    let permutationsArray = []
    
    for (i = 0; i < string.length; i++) {
        let character = string[i];
        if (string.indexOf(character) != i)
        continue
        let remainingCharacters = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of permutationsOfString(remainingCharacters)) {
            permutationsArray.push(character + permutation) }
        }
        return permutationsArray;
}

console.log(permutationsOfString("banana"));

// Solution not working
