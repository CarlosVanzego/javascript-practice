function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 0;i < arr.length; i++) {
    if (arr[i] < smallest) {
       smallest = arr[i];
    }
  }

  return smallest;
};

const numbers = [6, 19, 8, 3, 11];
console.log(findSmallest(numbers));

