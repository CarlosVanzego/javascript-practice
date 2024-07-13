// Question:
// Create a function called "count" that given a number n, it counts to n, and returns a number equal to "n" (count).



// Notes:
// What is "it"?
// A variable that starts from 0 and counts to n(it would be a good idea to log the variable as the count increases)

// What is "n"?
// "n" is the parameter of the function that I will input.
// the final result should be equal to "n" but not return "n".
// So, the result should be equal to "n", but return the count (the count is the final result)



// My Solution:
// 1. Write the function "count" taking the parameter "n".
// 2. Create a variable called countUp that starts from 0.
// 3. Increment by 1 until I get to "n".




// 3 ways to write (variable) countUp++:
// 1. countUp++
// 2. countUp += 1
// 3. countUp = countUp + 1



function count(n){
  let countUp = 0;

  for (let i = 0; i < n; i++){
     countUp = countUp + 1
  }

  return countUp
};
console.log(count(100))


