function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length == 0){
    return 0
  }

  let result= 1;
  for (let element of arr){
    result *= element

  }
  return result ;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
