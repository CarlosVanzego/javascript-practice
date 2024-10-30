// Solution 
function fasterInOrder(arr) {
// Loop through the array
    for (let i = 0; i < arr.length; i++) {
// Check if the current element is greater than the next element
      if (arr[i] > arr[i + 1]) {
        return false; // If true, array is not in order; return false immediately
      }
    } 
    return true; // If loop completes, all elements are in order, returns true
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(fasterInOrder(arr)); // Expected output: true (sorted)
  
  // const unsortedArr = [1, 6, 3, 8, 2, 4, 5, 7];
  // console.log(fasterInOrder(unsortedArr)); // Expected output: false (not sorted)
