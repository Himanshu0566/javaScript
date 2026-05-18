console.log(a);

var a = 10;

//! Hoisting in javaScrpt's default behavior where declaration of the variable and function are processed before code execution

//? Var:- Hoisted and initialized with undefined
//? let and const :- Hoisted but not initialized
//? Function:- Fully hoisted
greet();
function greet() {
  console.log("Hello");
}
