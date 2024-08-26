// function shuffleIt(arr,...c){
//   // Iterate over each pair of indices in the variable-length argument c
//     for(i = 0; i < c.length; i++){
//   // Get the first index of the current pair   
//       let a = c[i][0];
//   // Get the second index of the current pair  
//       let b = c[i][1];
//   // Store the value at index a in a temporary variable  
//       let temp = arr[a];
//   // Assign the value stored in index b to index a    
//       arr[a] = arr[b];
//   // Assign the value stored in temp to index b     
//       arr[b] = temp;
//     }
//   // Returns the modified array  
//     return arr
//   }
  
  


  function shuffleIt(arr,...c){
    // Iterate over each pair of indices in c
      for ( i = 0; i < c.length; i++) {
    // Get the first index of the current pair
        let a = c[i][0];
    // Get the second index of the current pair
        let b = c[i][1];
    // Swap the elements at indices a and b in the array     
        [arr[b], arr[a]] = [arr[a], arr[b]];
      }
     return arr;
     
    }
   console.log((shuffleIt([1,2,3,4,5],[1,2])))
   console.log((shuffleIt([1,2,3,4,5],[1,2],[3,4])))
   console.log((shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])))