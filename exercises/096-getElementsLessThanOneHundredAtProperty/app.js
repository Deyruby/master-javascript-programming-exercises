// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    if( !typeof obj[key]=== 'array' || !obj[key] || obj[key].length == 0){
        return []
    }


    let arr = obj[key]
    let newArr = []

    arr.forEach(e => {
        if(e < 100) {
            newArr.push(e)
        }
    })
    return newArr;

}

