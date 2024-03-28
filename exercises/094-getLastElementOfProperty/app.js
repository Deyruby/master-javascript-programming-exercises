// Write your function here
function getLastElementOfProperty(obj, key){
    if (!typeof obj[key]=== 'array' || !obj[key]  || obj[key].length == 0){
        return undefined
    }
    return obj[key][length-1]
}
