function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if (obj[key].length === 0 || !typeof obj[key] === 'array' || !obj[key]) {
    return 0
  }

  let arr = obj[key]
  let aux = 1
  for (let i = 0; i < arr.length; i++) {
    aux *= i
  }
  return aux;

}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
