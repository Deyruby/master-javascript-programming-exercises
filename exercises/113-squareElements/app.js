function squareElements(arr) {
  // your code here
  
  let newArray= arr.map(function (element) {
    return element * element
    
  })
  
  return newArray;

}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
