function infiniteLoop(arr,d,n){
  
  for (let i = 0; i < n; i++){
    
    if (d === 'left') {
      
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
      
  } else if (d === 'right') {
    
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}

console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'left', 1));
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'right', 1));
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'left', 2));
console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'right', 2));

