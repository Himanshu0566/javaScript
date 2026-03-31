//? JavaScript and classes
//? OOPs is a programming paradime
//! Object
//? Collection of properties and methods
//? toLowerCase
//! Parts of object
//? Object Literals

//?---> Cunstructor function(this gives new instance, new copy of space to hold the new value so that the old value do not overwrite :------------> use new keyword )
//?---> Prototypes
//?---> Classes
//?---> Instances(new, this)

//! Four pillars of the OOPs
//? Abstraction
//? Encapsulation
//? Inheritance
//? Polymorphism

// const user = {
//   username: "Himanshu",
//   skills: "MERN",
//   age: 26,

//   printUsername: function () {
//     // console.log(`UserName: ${this.username}`);
//     console.log(this);
//   },
// };
// console.log(this);

// console.log(user.printUsername());

//! Do javaScript really have classes?

//? Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015 specification (often referre as ES6). However, it's important to note that JavaScript is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words, it provides a more familier syntax for developers coming from class-based languages such as Java or C++, but under hood it works somewhat differently.

function user(username, skills, age) {
  this.username = username;
  this.skills = skills;
  this.age = age;
  //here this.variable is variable and the next holds the value
  //   return this;
  this.gretting = function () {
    console.log(`Welcome ${this.gretting}`);
  };
}
//? Use the {new} keyword for creating new instance it gives copy of the instance so the value do not make the copy
//? 1) Creates new object
//? 2) Because of new keyWord a new cunstructor function is called
//? 3) this keyword everything is injected inside it
//? 4) we get it
const getUSer = new user("HImanshu", "MERN", 26);
const getUSer2 = new user("Rahul", "UPSE", 23);

console.log(getUSer.constructor);
