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

let arr = [9, 7, 1, 3, 10, 6, 5, 12, 8, 2, 4, 13, 11];
console.log(AlwaysInOrder(arr)); // [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
