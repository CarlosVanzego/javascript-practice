function shuffleIt(arr,...p){
  // Iterate over each pair of indices in the variable-length argument p
    for(i = 0; i < p.length; i++){
  // Get the first index of the current pair   
      let a = p[i][0];
  // Get the second index of the current pair  
      let b = p[i][1];
  // Store the value at index a in a temporary variable  
      let temp = arr[a];
  // Assign the value stored in index b to index a    
      arr[a] = arr[b];
  // Assign the value stored in temp to index b     
      arr[b] = temp;
    }
  // Returns the modified array  
    return arr
  }
  
  console.log(shuffleIt([1, 2, 3, 4], [0, 3], [1, 2]));
  console.log(shuffleIt([10, 20, 30, 40], [0, 2], [1, 3]));
