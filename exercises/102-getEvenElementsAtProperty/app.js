function getEvenElementsAtProperty(obj, key) {
  // your code here
  if (obj[key].length == 0 || !typeof obj[key] === 'array' || !obj[key]) {
    return []
  }

  let newArray = []
  obj[key].forEach(element => {
    if (element.length % 2 === 0) {
      newArray.push(element)
    } else {
      return [];
    }

  });

  return newArray;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
