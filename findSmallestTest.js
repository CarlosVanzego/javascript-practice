function findSmallest(arr) {
  let smallest = arr[0]; // smallest is element at index 0

  for (let i = 1;i < arr.length; i++) {
    if (arr[i] < smallest) { 
       smallest = arr[i];
    }
  }

  return smallest;
};

const numbers = [2, 19, 8, 1, 23];
console.log(findSmallest(numbers));

