// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if (!typeof obj[key] === 'array' || !obj[key] || obj[key].length == 0) {
        return []
    }
    let arr = obj[key]
    let newArray = []
    arr.forEach(element => {
        if (element === 10) {
            newArray.push(element)
        }

    })
    return newArray

}
