function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0 && !typeof arr[i] === 'number' ) {
        return 0
    }

    let largestNumber = 0
    for (let e of arr){
        if (e > largestNumber){
            largestNumber = e
        }
    }
    
    return largestNumber
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
