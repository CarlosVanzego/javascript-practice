// Tasks:
// - Filter unique array members
//  > Let arr be an array.
//  > Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique())



//- Filter anagrams
//  > Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back 
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word)
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr))



//- Iterable keys
//  > We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
//  > But that doesn’t work..
//  > Why? How can we fix the code to make keys.push work?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log((keys)); 






