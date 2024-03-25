function getElementsUpTo(array, n) {
  // your code here
  let elements = array.slice(0,n)
  return elements
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
