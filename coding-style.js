// Curly Braces
// In most JavaScript projects curly braces are written in “Egyptian” style with the opening brace on the same line as the corresponding keyword – not on a new line. There should also be a space before the opening bracket, like this:

if (condition) {
  // do this
  // ...and that
  // ...and that
}



// If statement Ex.:
if (n < 0) {
  alert(`Power ${n} is not supported`);
}


// Line Length Ex.:
// backtick quotes ` allow to split the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

// And, for if statements:
if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}



// Indents:
// Horizontal...

show(parameters,
  aligned, // 5 spaces padding at the left
  one,
  after,
  another
); {
// ...
}

// Vertical...

function pow(x, n) {
  let result = 1;
  //              <--
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  //              <--
  return result;
}

// Nesting Levels:
// For example, instead of adding a nested if conditional like this:

for (let i = 0; i < 10; i++) {
  if (cond) {
     // <- one more nesting level
  }
}

// We can write:

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
    // <- no extra nesting level
}

// A similar thing can be done with if/else and return.
// For example, two constructs below are identical.
// Option 1:
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

// Option 2:
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}



// Function Placement 
// If you are writing several “helper” functions and the code that uses them, there are three ways to organize the functions.
// 1. Declare the functions above the code that uses them:
// function declarations
function createElement() {

}

function setHandler(elem) {

}

function walkAround() {
  
}

// the code which uses them
var elem = createElement();
setHandler(elem);
walkAround();



// 2. Code first, then functions
// the code which uses the functions
let elem = createElement();
setHandler(elem);
walkAround();

// --- helper functions ---
function createElement() {

}

function setHandler(elem) {

}

function walkAround() {

}





// Example of an .eslintrc file:
// {
//   "extends": "eslint:recommended",
//   "env": {
//     "browser": true,
//     "node": true,
//     "es6": true
//   },
//   "rules": {
//     "no-console": 0,
//     "indent": 2
//   }
// }



