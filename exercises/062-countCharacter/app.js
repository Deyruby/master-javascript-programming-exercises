function countCharacter(str, char) {
    // your code here
    let character = 0;
    for (let i= 0 ; i<str.length; i++){
       let sum = str[i] === char
       character+= sum
    }
    return character;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
