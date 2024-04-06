function findShortestElement(arr) {
    // your code here
    if (arr.length == 0) return ''

    let shortestStr = 0
    for (let i =0 ; i<arr.length; i++){
        if (arr[i].length < shortestStr) {
            shortestStr = arr[i].length
        }
    }
    
    return shortestStr
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'