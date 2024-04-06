function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length == 0 && !typeof arr[i] === 'string' ) {
        return ''
    }

    let longestString = 0
    for(let e of arr){
        if (e.length > longestString){
            longestString = e
        }
    }
    return longestString
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
