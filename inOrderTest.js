// Solution (Selection sort):
function inOrder(arr) {
// Outer loop: iterates over each element of the array  
  for (let i = 0; i < arr.length; i++) {
// Assumes the current element is the smallest (minVal is the index of the smallest element found)    
    let minVal = i;
// Inner loop: iteratees through the unsorted portion of the array to find the smallest element    
    for (let s = i + 1; s < arr.length; s++) {
// if the smaller element is found, updates minVal to that e;ements index      
      if (arr[s] < arr[minVal]) {
        minVal = s;
      }
    }
    
// Swap elements
    let temp = arr[i]; // Temporarily stores the current element
    arr[i] = arr[minVal];  // Replace the current element w/ the smallest found
    arr[minVal] = temp;  // Place the current element where the smallest was
  }
  return arr;
}

const arr = [11, 7, 2, 13, 12, 6, 5, 10, 8, 1, 4, 3, 9];
console.log(inOrder(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// Explanation:
// This code implements the Selection Sort algorithm. It works by iterating through the array to find the smallest element and placing it at the beginning of the list. The outer loop handles each position in the array sequentially, while the inner loop finds the smallest value in the unsorted portion of the array. Once the smallest element is found, it is swapped with the current element, ensuring that the sorted portion of the array grows with each iteration. This continues until the entire array is sorted.

















// Solution #2 (Bubble Sort):
function stillInOrder(arr2) {
// Outer loop: iterates over the entire array  
  for (let i = 0; i < arr.length; i++) {
// Inner loop: iterates through the unsorted portion of the array, gradually shrinking the range    
    for (let b = 0; b < arr.length; b++) {
// if the current element is greater than the next, swap them to bring the larger one closer to the end      
      if (arr[b] > arr[b + 1]) {
// Swap elements
        let temp = arr[b]; // temporarily store the current element 
        arr[b] = arr[b + 1];  // move the smaller element to the current position
        arr[b + 1] = temp;  // move the larger element to the next position
      }
    }
  }
  return arr;
}

const arr2 = [9, 7, 2, 13, 12, 6, 5, 10, 8, 1, 4, 3, 11];
console.log(stillInOrder(arr2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// Explanation:
// This code implements the Bubble Sort algorithm. It works by repeatedly stepping through the array, comparing adjacent elements, and swapping them if they are in the wrong order. The largest element "bubbles" up to the end of the array after each pass, while the inner loop works through the unsorted portion. The outer loop ensures that the process continues until the entire array is sorted.





















// Solution #3 (Insertion Sort):
function AlwaysInOrder(arr) {
// Outer loop: start from the second element, treating the first as already sorted  
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // "key" stores the current element to be inserted into the sorted array 
    let z = i - 1;  // "z" is the index of the last element in the sorted part of the array 

// Inner loop: move element s greater than "key" one position to the right    
    while (z >= 0 && arr[z] > key) {
      arr[z + 1] = arr[z];  // shift larger element to the right
      z--;  // move left in the array to compare the next element
    }

// insert the "key" in its correct sorted position    
    arr[z + 1] = key;  // after shifting, place the "key" in its correct position 
  }

// return the sorted array after all elements have been inserted in the correct order  
  return arr;
}

const arr3 = [9, 7, 1, 3, 10, 6, 5, 12, 8, 2, 4, 13, 11];
console.log(AlwaysInOrder(arr)); // [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
