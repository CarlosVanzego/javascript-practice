function fiveLine(s) {
  // Remove whitespace from the edges of the string
    s = s.trim(); 
  // Initialize an empty string to store the result
    let result = ''; 
    for (let i = 1; i <= 5; i++) { 
      result += s.repeat(i);
      if (i < 5) {
  // Add a newline character except after the last line
        result += '\n'; 
      }
    }
  // Return the result string
    return result;
  }
  
  
  console.log(fiveLine("  a"));
  console.log(fiveLine("  xy "));