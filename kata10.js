//  10. How do you print the first non-repeated character from a string?

const firstNonRepeatedCharacter = (string) => {
    for (i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (string.indexOf(character) == i && string.indexOf(character, i + 1) == -1) {
            return character;
        }
    }
   return null;
}
console.log(firstNonRepeatedCharacter("abbabdddef"));