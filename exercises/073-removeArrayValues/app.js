function removeArrayValues(obj) {
    // your code here
    for (let key in obj){
        if(typeof obj[key] === 'arr'){
            delete obj[key]
        }
        return obj
    }
    
}