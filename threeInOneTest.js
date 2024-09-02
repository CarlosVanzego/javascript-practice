// function removeOdd(arr){

//   for (let i = arr.length-1; i >= 0; i--)

//     if (arr[i]%2) arr.splice(i,1)

//       return arr;
// }

// console.log(removeOdd([1,2,3,4,5]))
// console.log(removeOdd([1,3,5,7,9]))
// console.log(removeOdd([2,4,6,8,10]))
// console.log(removeOdd([5,4,3,2,1]))


// ----------------------------------------------


function threeInOne(arr){
  
  let newArr = arr.slice();
  let result = [];


  for (let i = 0; i < arr.length; i+=3){
    let sumArr =  newArr[i] + newArr[i + 1] + newArr[i + 2];
    console.log(sumArr)
    
    result.push(sumArr)
  }
    return result;
  
};

console.log(threeInOne( [1,2,3] ) );
console.log(threeInOne( [1,2,3,4,5,6] ) );
console.log(threeInOne( [1,2,3,4,5,6,7,8,9] ) );
console.log(threeInOne( [1,2,3,4,5,6,7,8,9,10,11,12] ) );
