// 8. How do you print duplicate characters from a string?

const sentence = "hello here is a sentence";

const printDuplicate = () => {
    let sentenceArray = sentence.split("").sort();
    let duplicates = [];

    for (i = 0; i < sentenceArray.length -1; i++) {
        if (sentenceArray[i + 1] === sentenceArray[i]) {
                duplicates.push(sentenceArray[i]);
        }
        return duplicates;
    }
}
console.log(printDuplicate("hello"));
// Solution not working

