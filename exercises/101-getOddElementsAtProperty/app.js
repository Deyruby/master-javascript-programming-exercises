function getOddElementsAtProperty(obj, key) {
    // your code here
    if (obj[key].length == 0 || !typeof obj[key] === 'array' || !obj[key]) {
      return [];
    }
     
    return obj[key].filter(element => element.length % 2 >0)
    
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
