function average(arr) {
  // your code here
  
  let average = sum(arr) / arr.length
  return average
}

function sum(arr) {
  // your code here
  let sumNumbers = 0
  for (let e of arr){
    sumNumbers += e
  }
  return sumNumbers
}

console.log(average([1, 2])); // --> 1.5
