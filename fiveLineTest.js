// function fiveLine(s) {
//   // Remove whitespace from the edges of the string
//     s = s.trim(); 
//   // Initialize an empty string to store the result
//     let result = ''; 
//     for (let i = 1; i <= 5; i++) { 
//       result += s.repeat(i);
//       if (i < 5) {
//   // Add a newline character except after the last line
//         result += '\n'; 
//       }
//     }
//   // Return the result string
//     return result;
//   }
  
  
//   console.log(fiveLine("  a"));
//   console.log(fiveLine("  xy "));

function fiveLine(s) {
  // Remove whitespace from the edges of the string
    s = s.trim(); 
  
    // Initialize an empty string to store the result
    let result = ''; 
  
  // Loop from 1 to 5
    for (let i = 1; i <= 5; i++) { 
  
  // Append the string 's' repeated 'i' times to the result
    for (let p = 0; p < i; p++){
        result += s
     }
      
      if (i < 5) {
  
  // Add a newline character except after the last line
        result += '\n'; 
      }
    }
  // Return the result string
    return result
  }

  console.log(fiveLine("  a"))
