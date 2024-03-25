// Write your function here
 
function computeAverageOfNumbers (array){
    let sum = 0;
    for (let element in array){
        sum += element
    }
   let average = sum / array.length
   return average
}

console.log(computeAverageOfNumbers([1,2,3]))