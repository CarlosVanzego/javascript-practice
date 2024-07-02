// A function can access an outer variable as well, for example:
let usersName = 'John';

function showMessage() {
  let message = 'Hello,' + userName;
  alert(message);
}

showMessage();



// The function has full access to the outer variable. It can modify it as well. For example:
let nameUser = 'John';

function showMessage() {
  userName = 'Bob'; // (1) changed the outer variable 

  let message = 'Hello,' + userName;
  alert(message);
}

alert( userName ); // John before the function call 

showMessage();

alert( userName ); // Bob, the value was modified by the function




// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable 


