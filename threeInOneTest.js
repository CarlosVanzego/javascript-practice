function removeOdd(arr){

  for (let i=arr.length;i>=0; i--)
    if (arr[i]%2) arr.splice(i,1)
      return arr;
}

console.log(removeOdd([1,2,3,4,5]))
console.log(removeOdd([1,3,5,7,9]))
console.log(removeOdd([2,4,6,8,10]))
console.log(removeOdd([5,4,3,2,1]))



function threeInOne(arr){

}