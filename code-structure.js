// Statements are syntax constructs and commands that perform actions.
// We’ve already seen a statement, alert('Hello, world!'), which shows the message “Hello, world!”.
// We can have as many statements in our code as we want. Statements can be separated with a semicolon.
// For example, here we split “Hello World” into two alerts:
alert('Hello'); alert('World')


// Usually, statements are written on separate lines to make the code more readable:
alert('Hello');
alert('World');

// SEMICOLONS
// A semicolon may be omitted in most cases when a line break exists.


// But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.
// Errors which occur in such cases are quite hard to find and fix.

// An example of an error
// If you’re curious to see a concrete example of such an error, check this code out:
alert("Hello");
[1, 2].forEach(alert);

// Now let’s remove the semicolon after the alert:
alert("Hello")

[1, 2].forEach(alert); 
// Shows "Hello" but does not show 1 and 2

// The difference compared to the code above is only one character: the semicolon at the end of the first line is gone.
// If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more.
// That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.
// Here’s how the engine sees it:
alert("Hello")[1, 2].forEach(alert);




// COMMENTS
// As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.
// Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.
// One-line comments start with two forward slash characters //.
// The rest of the line is a comment. It may occupy a full line of its own or follow a statement.
// Like here:
alert('Hello');

alert('World'); // This statement follows the statement 

// Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.
// Like this:
/*An example with two messages.
This is the multiline comment.
*/
alert('Hello');
alert('World');



// The content of comments is ignored, so if we put code inside /* … */, it won’t execute.
// Sometimes it can be handy to temporarily disable a part of code:
/* Commenting out the code
alert('Hello');
*/
alert('World');
