function getLargestElement(arr) {
  // your code here
  if (arr.length === 0){
    return 0
  }

  let varAux = 0;
  for (let e of arr){
    if (e > varAux ){
      varAux= e
    }
  }
  return varAux;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;