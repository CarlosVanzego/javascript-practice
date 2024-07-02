// A variable (examples)
let anotherMessage;
let lastMessage;


// Now, we can put some data into it by using the assignment operator =:
let differentMessage;

differentMessage = 'Hello'; // store the string 'Hello' in the variable named message


// The string is now saved into the memory area associated with the variable. We can access it using the variable name:
let practiceMessage;
practiceMessage = 'Hello';

alert(practiceMessage); // shows the variable content



// To be concise, we can combine the variable declaration and assignment into a single line:
let randomMessage = 'Hello'; // define the variable and assign the value

alert(randomMessage); // Hello!


// We can also declare multiple variables in one line:
let user = 'Carlos', age = 27, carlosMessage = 'Hola!';


// That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

// The multiline variant is a bit longer, but easier to read:
let user = 'Carlos';
let age = 27
let carlosMessage = 'Hola!';



// Some people also define multiple variables in this multiline style:
let user = 'Carlos';
  age =  27
  carlosMessage = 'Hola!';


  // …Or even in the “comma-first” style:
let user = 'Carlos';
  , age = 27
  , carlosMessage = 'Hola!';



// A real-life analogy
// We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it
// For instance, the variable message can be imagined as a box labelled "message" with the value "Hello!" in it.
// We can put any value in the box.
// We can also change it as many times as we want:
let message;

message = 'Hello!'

message = 'World!' // value changed 

alert(message);


// When the value is changed, the old data is removed from the variable..
// We can also declare two variables and copy data from one into the other.
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); //  Hello world!

// Variable Naming

// There are two limitations on variable names in JavaScript: 
// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.

// Examples of valid names:
let userName;
let test123;



// Constants
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '14.6.1996';

// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const myBirthdayDate = '14.6.1996';

myBirthdayDate = '06.14.1996'; // error, cant reassign the constant 
