function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0 && !typeof arr[i] === 'string' ) {
        return ''
    }

    let shortestString = 0
    for (let e of arr) {
        if (e.length < shortestString) {
            shortestString = e
        }
    }
    return shortestString
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
