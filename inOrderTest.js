// function inOrder(arr){
//   let min = arr[0];

//   for (let i = 0; i < arr.length - 1; i++){
//     let min
//   }
// }


// Solution (Selection sort):
function inOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let s = i + 1; s < arr.length; s++) {
      if (arr[s] < arr[minVal]) {
        minVal = s;
      }
    }
    
    // Swap elements
    let temp = arr[i];
    arr[i] = arr[minVal];
    arr[minVal] = temp;
  }
  return arr;
}

const arr = [11, 7, 2, 13, 12, 6, 5, 10, 8, 1, 4, 3, 9];
console.log(inOrder(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// Explanation:
// This code implements the Selection Sort algorithm. It works by iterating through the array to find the smallest element and placing it at the beginning of the list. The outer loop handles each position in the array sequentially, while the inner loop finds the smallest value in the unsorted portion of the array. Once the smallest element is found, it is swapped with the current element, ensuring that the sorted portion of the array grows with each iteration. This continues until the entire array is sorted.



// Solution #2 (Bubble Sort):
function stillInOrder(arr2) {
  for (let i = 0; i < arr.length; i++) {
    for (let b = 0; b < arr.length; b++) {
      if (arr[b] > arr[b + 1]) {
        // Swap elements
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
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
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let z = i - 1;
    while (z >= 0 && arr[z] > key) {
      arr[z + 1] = arr[z];
      z--;
    }
    arr[z + 1] = key;
  }
  return arr;
}

const arr3 = [9, 7, 1, 3, 10, 6, 5, 12, 8, 2, 4, 13, 11];
console.log(AlwaysInOrder(arr)); // [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
