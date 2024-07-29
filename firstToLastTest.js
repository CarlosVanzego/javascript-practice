function firstToLast(str, c) {

  // Find the first occurrence index of the character c in the string str
    let firstIndex = str.indexOf(c);
  
  // Find the last occurrence index of the character c in the string str
    let lastIndex = str.lastIndexOf(c);
  
  // If the character c is not found in the string (firstIndex is -1), return -1
    if (firstIndex === -1) {
      return -1;
    }
  
  // If the character c is found, calculate and return the difference between lastIndex and firstIndex
    return lastIndex - firstIndex;
  };
  
  console.log(firstToLast("abca", "a"))