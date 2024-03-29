function getEvenLengthWordsAtProperty(obj, key) {
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
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
