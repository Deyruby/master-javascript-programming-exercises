function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if( !typeof obj[key] === 'array' || obj[key].length === 0  || !obj[key]){
      return [];
    }

    let arr= obj[key];
    let newArray= [];
    for(let i=0; i < arr.length-1; i++){
      newArray.push(i)
      
    }
    
    return newArray
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
