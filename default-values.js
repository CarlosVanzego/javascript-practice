// function showMessage(from, text) can be called with a single argument:
showMessage("Ann");
// That’s^ not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.



// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given



// Now if the text parameter is not passed, it will get the value "no text given".
// The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
showMessage("Ann", undefined);



// Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of the text
}
