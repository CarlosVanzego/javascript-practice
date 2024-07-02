// The simplest example would be a function that sums two values:
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3



// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
// There may be many occurrences of return in a single function. For instance:
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}



// It is possible to use return without a value. That causes the function to exit immediately.
// For example:
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}
// In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

