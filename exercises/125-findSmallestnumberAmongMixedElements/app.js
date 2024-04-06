function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0 && !typeof arr[i] === 'number') {
    return 0
  }

  let smallestNumber = 0
  for (let e of arr) {
    if (e < smallestNumber) {
      smallestNumber = e
    }
    return e
  }

}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
