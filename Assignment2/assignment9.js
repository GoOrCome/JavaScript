function uniqueCharactersCheck(inputString) {
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("the input string contains Duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("the input string contains only unique Characters.");
    return true;
}

uniqueCharactersCheck("Krishna")
// OUTPUT: the input string contains only unique Characters.

uniqueCharactersCheck("Vasudave")
// OUTPUT: the input string contains Duplicates.



