// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    if (!typeof obj[key] === 'array' || obj[key.length == 0 || !obj[key]]) {
        return []
    }

    let arr = obj[key];
    let newArray = [];
    arr.forEach(element => {
        if (typeof element === 'string' && element.length % 2 > 0) {
            newArray.push(element)
        }

    })

    return newArray;


}

