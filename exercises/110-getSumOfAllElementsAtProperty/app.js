function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (obj[key].length === 0 || !typeof obj[key] === 'array' || !obj[key]) {
        return 0
    }

    let arr = obj[key];
    let sum = 0;
    arr.forEach(element => {
        sum += element
    }); 


return sum;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
