function countChar(string, countedChar) {
    let countedString = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == countedChar) {
            countedString += 1;
        }
    }
    return countedString;
}

function countBs(string) {
    return countChar(string, "B");
}