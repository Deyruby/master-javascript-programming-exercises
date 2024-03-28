// Write your function here
function getNthElementOfProperty(obj, key, n){
    if(!typeof obj[key]=== 'array'|| obj[key].length ==0 || obj[key].length <= n){
        return undefined
    }

    return obj[key][n]
}