function cutIt(arr){

  // Variable shortStr to store the length of the shortest string.
      let shortStr;  
      
  // Variable result set equal to an empty array to store the result.
      let result = []; 
    
  // Iterate through the array to find the shortest string length using a for loop.
      for (let i = 0; i < arr.length; i++){
    
  // If shortStr is undefined or the current string length is shorter, sets that current string length equal to shortStr.
        if (shortStr === undefined || shortStr > arr[i].length) {
              shortStr = arr[i].length;
        }
        console.log(shortStr);  
      }
    
  // Loop through the array again to slice each string to the length of the shortest string.
      for (i = 0; i < arr.length; i++){
        
  // Slice the string and push to the result array.
        result.push(arr[i].slice(0, shortStr));  
      }
      
  // Return the result array
      return result;
    };
  
    console.log(cutIt(["hi", "hey", "hello"]))

