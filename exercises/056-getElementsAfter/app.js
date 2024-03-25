function getElementsAfter(array, n) {
  // your code here
let elementsAfter = array.slice(n)
return elementsAfter;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
