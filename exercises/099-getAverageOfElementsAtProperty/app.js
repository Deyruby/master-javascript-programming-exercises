function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!typeof obj[key] === 'array' || obj[key.length == 0 || !obj[key]]) {
    return 0
  }

  let arr = obj[key]
  let sum = 0;
  for (let i = 0; arr.length; i++) {
    sum += i
  }
  let average = sum / arr.length
  return average;
}