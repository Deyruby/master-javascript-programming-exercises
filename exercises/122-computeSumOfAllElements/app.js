function computeSumOfAllElements(arr) {
  // your code here
  let sumNumbers= 0;
  for (let e of arr){
    sumNumbers+= e
  }
  return sumNumbers
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
