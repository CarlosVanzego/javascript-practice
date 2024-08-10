// Code Wars Tutorial #1:

function helloWorld() {
  var str = "Hello World!";
  console.log(str)
};

helloWorld()




// Code Wars Tutorial #2:

// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200, 
    v5 = 2, 
    v6 = 250;

    function equal1() {
      let a = v1,
          b = v1;
      return a + b;
    }

    function equal2() {
      let a = v3,
          b = v1;
      return a - b;
    }

    function equal3() {
      let a = v1,
          b = v5;
      return a * b;
    }

    function equal4() {
      let a = v4,
          b = v5;
      return a / b;
    }

    function equal5() {
      let a = v2,
          b = v3;
      return a % b;
    }


    console.log(equal1(),
    equal2(),
    equal3(),
    equal4(),
    equal5())



// Code Wars Tutorial #3:

// Misson 1: I've created three functions, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).


var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n";


function Dad() {
  let parent = (d1 + a2 + d2);
  return parent;
}


function Bee() {
  let insect = (b1 + e2 + e2);
  return insect;
}


function banana() {
  let fruit = (b2 + a2 + n2 + a2 + n2 + a2);
  return fruit;
}


console.log( Dad(), Bee(), banana() )



// Misson 2: After misson 1 is finished, you should click "Attempt" to see my three questions, and write the answer in function answer1,  answer2, answer3.


function answer1() {
  let answ = "no";
  return answ;
}


function answer2() {
  let answ = "no";
  return answ;
}


function answer3() {
  let answ = "yes";
  return answ;
}

console.log( answer1(), answer2(), answer3() )



// Code Wars Tutorial #4: Basic data types--Array
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

function getLength(arr) {
  return arr.length
}

function getFirst(arr) {
  return arr[0]
}

function getLast(arr) {
  return arr[arr.length-1]
}

function pushElement(arr) {
  var el=1;
  arr.push(el)
  return arr
}

function popElement(arr) {
  arr.pop()
  return arr
}


// Code Wars Training JS #5: Basic data types--Object
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}

// and return a string like this:
// "This white dog has 4 legs."


// Sample test
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
    Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
    Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");
  });
});



// Solution
function animal(obj){
  console.log( obj )
return ( `This ${obj.color} ${obj.name} has ${obj.legs} legs.`)
}



// Training JS #6: Basic data types--Boolean and conditional statements if..else
// Task
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// Sample Test
describe("Tests", () => {
  it("test", () => {
    //test for equations and inequalities
    var a=1,b=2,c=1;
    Test.assertSimilar(trueOrFalse(a>b),"false");
    Test.assertSimilar(trueOrFalse(a===b),"false");
    Test.assertSimilar(trueOrFalse(a<b),"true");
    Test.assertSimilar(trueOrFalse(a!==b),"true");
    Test.assertSimilar(trueOrFalse(b>c),"true");
    Test.assertSimilar(trueOrFalse(b===c),"false");
    Test.assertSimilar(trueOrFalse(b<c),"false");
    Test.assertSimilar(trueOrFalse(b!==c),"true");
    Test.assertSimilar(trueOrFalse(a===c),"true");
    Test.assertSimilar(trueOrFalse(a!==c),"false");
    //test for logical operators and bitwise operators
    var t=true,f=false;
    Test.assertSimilar(trueOrFalse(t&&f),"false");
    Test.assertSimilar(trueOrFalse(f&&f),"false");
    Test.assertSimilar(trueOrFalse(t&&t),"true");
    Test.assertSimilar(trueOrFalse(t||f),"true");
    Test.assertSimilar(trueOrFalse(t||t),"true");
    Test.assertSimilar(trueOrFalse(f||f),"false");
    Test.assertSimilar(trueOrFalse(t&f),"false");
    Test.assertSimilar(trueOrFalse(t&t),"true");
    Test.assertSimilar(trueOrFalse(f&f),"false");
    Test.assertSimilar(trueOrFalse(t|f),"true");
    Test.assertSimilar(trueOrFalse(t|t),"true");
    Test.assertSimilar(trueOrFalse(f|f),"false");
    Test.assertSimilar(trueOrFalse(!t),"false");
    Test.assertSimilar(trueOrFalse(!f),"true");
    Test.assertSimilar(trueOrFalse(t^f),"true");
    Test.assertSimilar(trueOrFalse(t^t),"false");
    Test.assertSimilar(trueOrFalse(f^f),"false");
    //test for implicit conversion 
    Test.assertSimilar(trueOrFalse(true),"true");
    Test.assertSimilar(trueOrFalse(123),"true");
    Test.assertSimilar(trueOrFalse("123"),"true");
    Test.assertSimilar(trueOrFalse(["123"]),"true");
    Test.assertSimilar(trueOrFalse("false"),"true");
    Test.assertSimilar(trueOrFalse(false),"false");
    Test.assertSimilar(trueOrFalse(0),"false");
    Test.assertSimilar(trueOrFalse(""),"false");
    Test.assertSimilar(trueOrFalse(null),"false");
    Test.assertSimilar(trueOrFalse([].length),"false");
    Test.assertSimilar(trueOrFalse(undefined),"false");
  });
});



// Solution
function trueOrFalse(val) {
  console.log(val)
  if (val) { 
    return "true";             
  } else {
    return "false";
  }
};

console.log( trueOrFalse() )



// Training JS #7: if..else and Ternary operator
// Task: Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs. You can use if..else or ternary operator to complete it.

// Sample tests
const { assert } = require('chai');

describe("Tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(saleHotdogs(  1),  100);
    assert.strictEqual(saleHotdogs(  4),  400);
    assert.strictEqual(saleHotdogs(  5),  475);
    assert.strictEqual(saleHotdogs(  9),  855);
    assert.strictEqual(saleHotdogs( 10),  900);
    assert.strictEqual(saleHotdogs(100), 9000);
  });
});



// Solution
function saleHotdogs(n) {
  if (n < 5) return 100 * n
  else if (n >= 5 && n < 10) return 95 * n
  else if (n >= 10) return 90 * n
}



// Training JS #8: Conditional statement--switch
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// Sample tests
describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(howManydays(1),31);
    Test.assertSimilar(howManydays(2),28);
    Test.assertSimilar(howManydays(3),31);
    Test.assertSimilar(howManydays(4),30);
    Test.assertSimilar(howManydays(12),31);
  });
});



// Solution
function howManydays(month){
  var days,x;
  switch (month) {

      case 2:
      return 28;
      break;
      
      case 4:
      case 6:
      case 9:
      case 11:
      return 30;
      break;
      
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
      return 31;
  }
  return days;
}



// Training JS #10: loop statement --for
// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

function pickIt(arr){
  var odd=[],even=[];
    
 for (let i = 0; i < arr.length; i++)
      
  if (arr[i] % 2 !== 0) {
     odd.push(arr[i]);
   } else {
     even.push(arr[i]);
  }
  
  console.log(arr[i]);
  
  
  return [odd,even];
}



// Training JS #11: loop statement --break,continue
// Task
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
// Return the bag after for loop finished.
// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.
// Solution:

function grabDoll(dolls) {
  var bag = [];  // Initialize an empty array called "bag" to store selected dolls.

  // Traverse the dolls array using a for loop.
  for (let i = 0; i < dolls.length; i++) {
    
    // Check if the current doll is "Hello Kitty" or "Barbie doll".
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);  // If it is, add the doll to the bag
    } else {
      continue;  // If it's not, skip the rest of the loop and move to the next iteration.
    }
    
    // Check if the bag has reached its capacity of 3 dolls.
    if (bag.length === 3) {
      break;  // If it has, exit the loop early
    }
  }

  return bag;  // Return the bag containing the selected dolls
}

// Explanation:
// My "grabDoll" function iterates over an array of dolls, it adds "Hello Kitty" and "Barbie doll" to the bag array; then I used a for loop to check each doll (traverse) and used "continue" to skip non-matching dolls. When the bag reaches three dolls, I used a "break" statement to exit the loop early. Then I return the bag containing up to three selected dolls per the instructions.




// Training JS #12: loop statement --for..in and for..of
// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.
// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

// Solution Attempt (Passes tests but not inal Attempt): 

function giveMeFive(obj){
  let arr = []; 
  
  
  for (var key in Object.keys(obj)){
    console.log(Object.keys(obj)[key])
    if (Object.keys(obj)[key].length === 5){
          arr.push(Object.keys(obj)[key]);

    } else continue;
  }; 
    
    
  for (var value in Object.values(obj)){
    if (Object.values(obj)[value].length === 5){
          arr.push(Object.values(obj)[value]);
    }
  };
    
    
    return arr;

};

// Solution:
function giveMeFive(obj){
  let result = []
  for (let i in obj){
    if(i.length == 5) {
      result.push(i)
  }
  
  if(obj[i].length == 5) {
    result.push(obj[i])
  }
}
return result
};

// Solution #2:
function giveMeFive(obj){
  let arr = []; // Initializes an array called "arr" to store the results.
  
  // Iterates over the keys of the object.
  for (var i in obj) {
  // Checks if the key length is 5 and push it to the array if true.
    if (i.length === 5){
          arr.push(i);
  }
  // Checks if the value length is 5 and push it to the array if true.
    if (obj[i].length === 5){
          arr.push(obj[i]);
    }
  }
    
  return arr; // Return the result array

};

// Explanation: 
// My "giveMeFive" function initializes an empty array called "arr" to store results. It iterates over the keys of the object "obj", checking each key and its corresponding value. If the key's length is 5, it is added to arr. I then iterate through the values of obj, if a value's length is 5, it is also added to arr. Then I return the arr array containing all keys and values with a length of 5.




// Training JS #13: Number object and its properties
// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number. To judge the number n. If n is one of the above five constants, return one of these string:

// Solution Attempt:
function whatNumberIsIt(n){
  if (n === Number.MAX_VALUE || 
      n === Number.MIN_VALUE || 
      n === Number.NaN || 
      n === Number.NEGATIVE_INFINITY || 
      n === Number.POSITIVE_INFINITY)

    return  "Input number is Number.MAX_VALUE",
            "Input number is Number.MIN_VALUE",
            "Input number is Number.NaN",
            "Input number is Number.NEGATIVE_INFINITY",
            "Input number is Number.POSITIVE_INFINITY" 

    } else {

  return "Input number is xxx"
};


// Solution:
function whatNumberIsIt(n){
  
  // Switch statement to check the specified conditions of the number n.
    switch (true) {

  // Checks if n is the maximum representable number in JavaScript (1.7976931348623157e+308).
      case n == Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE" // Returns the corresponding string.
      
  // Checks if n is the minimum positive representable number in JavaScript (the positive number closest to zero without actually being zero).
      case n == Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE" // Returns the corresponding string.
    
  // Check if n is NaN (Not-a-Number).
      case isNaN(n):
      return "Input number is Number.NaN" // Returns the corresponding string.

  // Check if n is negative infinity.
      case n == Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY" // Returns the corresponding string.
      
  // Check if n is positive infinity.
      case n == Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY" // Returns the corresponding string.
      
  // Any other number, returns it as part of the string.
      default:
      return `Input number is ${n}` // Template literal to include the number in the string.
      }
  };

  console.log()

  // Explanation:
  // My whatNumberIsIt function determines the identity of a given number n by checking it against specific constants; I did this using a switch statement that returns a corresponding string for each constant. If n doesn't match any of these constants, the function returns the number itself in a string.



// Training JS #14: Number object and its properties
// Task
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

// the color code should starting with "#". and then use 2 characters per color.
// for example:
// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"


// Solution: 

function colorOf(r, g, b) {
  // Convert the red value to a hexadecimal string
  let red = r.toString(16);
  
  // Convert the green value to a hexadecimal string
  let green = g.toString(16);
  
  // Convert the blue value to a hexadecimal string
  let blue = b.toString(16);
  
  // If the red string has a length of 1, pad it with a leading zero
  if (red.length == 1) {
    red = "0" + red;
  }
  
  // If the green string has a length of 1, pad it with a leading zero
  if (green.length == 1) {
    green = "0" + green;
  }
  
  // If the blue string has a length of 1, pad it with a leading zero
  if (blue.length == 1) {
    blue = "0" + blue;
  }
  
  // Debugging line to check the intermediate values
  console.log(red, green, blue);
  
  // Combine the padded hexadecimal values and return the final color string
  return "#" + red + green + blue;
}
console.log()




// Explanation:
// The colorOf function converts the color values to a hexadecimal color code. It takes three parameters: r, g, and b, representing red, green, and blue. I converted each component to a hexadecimal string using the toString(16) function. Then I used an if statement to test if any of these strings were only one character long, if they were, I padded them with a zero in front to ensure they are two characters long. At the end I concatenated the hexadecimal strings with a "#" prefix and returned the function.




// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// Task
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.

// for example:
// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2


// My Solution: 
function howManySmaller(arr, n) {

  // Initialize a counter to count how many numbers are smaller than n
    let counter = 0;  
  
  // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
  
  // Convert the current element to a string with 2 decimal places, then back to a number, and compare it with n
      if (Number(arr[i].toFixed(2)) < n) {
  
  // Increment the counter if the condition is true
        counter = counter + 1;  
      }
    }
  
  // Return the total count of numbers smaller than n
    return counter;  
  };



  // Explanation:
  // My howManySmaller function counts how many numbers in an array are smaller than a given number "n", and after rounding them to two decimal places. I initialize a counter in the beginning and then iterate over each element in the array, rounding each element to two decimal places using toFixed(2). If the rounded number is smaller than "n", the counter is incremented. Lastly, the function returns the total count. 


// Solution #2:




// Training JS #16: Methods of String object--slice(), substring() and substr()
// Task
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() to do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

// Solution w/ comments:

function cutIt(arr){

// Variable shortStr to store the length of the shortest string.
    let shortStr;  
    
// Variable result set equal to an empty array to store the result.
    let result = []; 
  
// Iterate through the array to find the shortest string length using a for loop.
    for (let i = 0; i < arr.length; i++){
  
// If shortStr is undefined or the current string length is shorter, sets that current string length equal to shortStr.
      if (shortStr === undefined || shortStr > arr[i].length) {
            shortStr = arr[i].length;
      }
      console.log(shortStr);  
    }
  
// Loop through the array again to slice each string to the length of the shortest string.
    for (i = 0; i < arr.length; i++){
      
// Slice the string and push to the result array.
      result.push(arr[i].slice(0, shortStr));  
    }
    
// Return the result array
    return result;
  };

  console.log(cutIt(["hi", "hey", "hello"]))


// Explanation:
// My cutIt function takes an array of strings and returns a new array with only the shortest string from the original array. I first determined the length of the shortest string by iterating through the array using a for loop. Then, I iterate through the array again, slicing each string to the shortest length and storing the result in a new array. Finally, it returns the new array.




// Training JS #17: Methods of String object--slice(), substring() and substr()
// Task
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// // firstToLast("ababc","d") should return -1


// Solution w/ comments:
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

// Explanation
// The firstToLast function determines the distance between the first andlast occurence of a character 'c' in a string 'str'. It starts by finding the first and last indices of the character using 'str.indexOf(c)' and 'str.lastIndexOf(c)'. If the character 'c' is not found in the string, indicated by 'firstIndex' being -1, the function retruns '-1'. If the character is found, the function calculates teh difference between the 'lastIndex' and 'firstIndex', which represents the distance between the first and last occurences of the character 'c'. This directly checks for the presence of the character 'c', and then computes the required difference if 'c' is found.




// Training JS #18: Methods of String object--concat() split() and its good friend join()
// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

// Solution:
function splitAndMerge(string, separator) {
// Split the input string into an array of words
  let words = string.split(' ');
// Initialize an array to hold the transformed words
  let mergedWords = [];

// Iterate over each word in the array
  for (let i = 0; i < words.length; i++) {
 // Split each word into characters and join them with the separator
    let mergedWord = words[i].split('').join(separator);
 // Push the transformed word to the mergedWords array
    mergedWords.push(mergedWord);
  }

// Join the transformed words back into a single string with spaces in between
  return mergedWords.join(' ');
}


console.log(splitAndMerge("this is a test", "*"));


// Explanation:
// The splitAndMerge function splits a given string into individual words, then splits each word into characters and joins them back together with a specified separator. The transformed words are then joined back into a single string with spaces. This solution uses a for loop to iterate over the words and achieve the transformation




// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// A small hint: The first conversion of the entire string will make the code easier

// Solution:
function alienLanguage(str){
// Splits the input string into an array of words
  let words = str.split(" ");

// Initializes an array to hold the transformed words
  let alienWords = [];

// Iterates over each word in the array
  for (let i = 0; i < words.length; i++){

// Gets the current word
    let word = words[i];

// Converts all characters to uppercase except the last character
    let alienWord = word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase();

// Pushes the transformed word to the transformedWords array
    alienWords.push(alienWord)

  }
// Joins the transformed words back into a single string with spaces in between
  return alienWords.join(" ")
}

console.log(alienLanguage("hello world this is a test"));


// Explanation:
// The alienLanguage function converts a string so that each word has all characters in uppercase except the last one, which is in lowercase. It first splits the input string into an array of words. Using a for loop, it iterates through each word, transforming it by slicing off the last character, converting the rest to uppercase, and the last character to lowercase. The transformed words are stored in the alienWords array, which is then joined back into a single string with spaces between words.



// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//Task
//Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.

// Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test. Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift;

// For example:

// character "A" after decryption should be "X" instead of ">"
// character "B" after decryption should be "Y" instead of "?"
// character "C" after decryption should be "Z" instead of "@"
// character "a" after decryption should be "x" instead of "^"
// character "b" after decryption should be "y" instead of "_"
// character "c" after decryption should be "z" instead of "`"

// Solution:
function topSecret(str) {

// Initialize an empty string to store the decrypted message
  let decryptedMessage = ''; 
// Iterate over each character in the encrypted string
  for (let i = 0; i < str.length; i++){
// Get the current character
    let char = str[i];
// Get the ASCII code of the current character
    let charCode = str.charCodeAt(i);
// Check if the character is an uppercase letter
    if(charCode >= 'A' && char <= 'Z'){
// Shift the character 3 positions left in the alphabet
      charCode = charCode - 3;
// If the character code goes below 'A', wrap around to 'Z'
      if(charCode < 65) charCode += 26;
    }
// Check if the character is a lowercase letter
      else if(char >= 'a' && char <= 'z'){
// Shift the character 3 positions left in the alphabet
        charCode = charCode - 3;
// If the character code goes below 'a', wrap around to 'z'
        if(charCode < 97) charCode += 26;
      }
// Convert back to character
      char = string.fromCharCode(charCode);
// Append the decrypted character to the message
      decryptedMessage += char;
  }
// Return the decrypted message
  return decryptedMessage; 
}

// Explanation:
// The topSecret function decrypts an encrypted string by shifting each character left by 3 positions in the alphabet. It initializes an empty string decryptedMessage to store the result. For each character in the input string str, it checks if the character is an uppercase or lowercase letter. If the character is between 'A' and 'Z', it subtracts 3 from its ASCII code, and if the resulting code is less than 'A' (65), it wraps around by adding 26 to the ASCII code. Similarly, for lowercase letters, if the character is between 'a' and 'z', it subtracts 3 from its ASCII code, and if the resulting code is less than 'a' (97), it wraps around by adding 26 to the ASCII code. Non-letter characters remain unchanged and are directly appended to decryptedMessage. The transformed characters are appended to decryptedMessage, which is returned at the end.

// Notes - 
// if (charCode < 65) charCode += 26;: This line checks if the character code (after shifting left by 3) is less than the ASCII value for 'A' (which is 65). If it is, the code wraps around by adding 26 (the number of letters in the alphabet) to the character code, bringing it back into the range of uppercase letters.

// if (charCode < 97) charCode += 26;: Similarly, this line checks if the character code (after shifting left by 3) is less than the ASCII value for 'a' (which is 97). If it is, the code wraps around by adding 26 to bring it back into the range of lowercase letters.





// Training JS #21: Methods of String object--trim() and the string template
// Task
// Coding in function fiveLine, function accept 1 parameter:s. s is a string.

// Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

// Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

// Note2: Using a string template can make your job easier.

// Example:

// fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
// a
// aa
// aaa
// aaaa
// aaaaa       <---The effect when you console.log it
// fiveLine("  xy ") 
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it


// Solution:
function fiveLine(s) {
// Remove whitespace from the edges of the string
  s = s.trim(); 

  // Initialize an empty string to store the result
  let result = ''; 

// Loop from 1 to 5
  for (let i = 1; i <= 5; i++) { 

// Append the string 's' repeated 'i' times to the result
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

// Explanation: 
// The fiveLine function takes a string s as input and returns a formatted string consisting of 5 lines. Each line contains the trimmed input string repeated a certain number of times, starting from 1 repetition on the first line and increasing to 5 repetitions on the fifth line.