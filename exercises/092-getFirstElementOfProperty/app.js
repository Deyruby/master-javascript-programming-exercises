// Write your function here
function getfirstlElementOfProperty(obj, key){
        if(!typeof obj[key] === 'array'|| !obj[key]  ){
            return undefined
        }
        return obj[key[0]]
    }

