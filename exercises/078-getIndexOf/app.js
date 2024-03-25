// Write your function here
function getIndexOf(character, string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            return i;
        } 

    }
    return -1

}

console.log(getIndexOf("i", "Parangaricutirimicuaro"))