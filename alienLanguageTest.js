function alienLanguage(str){
 // Splits the input string into an array of words
    let words = str.split(" ");
  
// Initializes an array to hold the transformed words
    let alienWords = [];
  
// Iterates over each word in the array
    for (let i = 0; i < words.length; i++){
  
// Gets the current word
      let word = words[i];
      let alienWord;

// If statement that checks if word length is less than 2 characters; if so, makes it uppercase
      if (word.length < 2){
           alienWord = word.toUpperCase()

      } else {

// Converts all characters to uppercase except the last character
         alienWord = word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase();
  
    };

// Pushes the transformed word to the transformedWords array
    alienWords.push(alienWord)

  }
// Joins the transformed words back into a single string with spaces in between
    return alienWords.join(" ")

};

console.log(alienLanguage("hello world this is a test"));
