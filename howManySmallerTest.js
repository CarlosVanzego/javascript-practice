function howManySmaller(arr, n) {

  // Initialize a counter to count how many numbers are smaller than n
    let counter = 0;  
  
  // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
  
  // Convert the current element to a string with 2 decimal places, then back to a number, and compare it with n
      if (Number(arr[i].toFixed(2)) < n) {
  
  // Increment the counter if the condition is true
        counter = counter + 1;  
      }
    }
  
  // Return the total count of numbers smaller than n
    return counter;  
  };

  console.log(howManySmaller([1.234,1.235,1.228],1.24), 2)