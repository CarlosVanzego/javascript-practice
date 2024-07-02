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