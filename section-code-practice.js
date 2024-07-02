// 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);



// Objects: Comparison by reference
let a = {};
let b = a;

console.log( a== b );
console.log( a === b );



// Method examples
let user = {
  name: "Carlos",
  age: 27
};

user.sayHi = function() {
  console.log("Hello!");
};

console.log( user.sayHi() );