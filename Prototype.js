//! Prototype
//? Every object is javascript has a built-in property, which is called its prototype and the prototype is object in itself, thats why it has its own prototype making what's called prototype chain.
//! Making prototype to the function
// const myObj = {
//   city: " New Delhi",
//   greet: function () {
//     console.log(`Welcome to ${this.city}`);
//   },
// };
// console.log(myObj.toString());

// const getUser = function (usernsme, score) {
//   this.usernsme = usernsme;
//   this.score = score;
// };

// getUser.prototype.increment = function () {
//   this.score++;
// };
// getUser.prototype.printMe = function () {
//   console.log(`price of ${this.score}`);
// };

// const chai = new getUser("Chai", 25);
// chai.printMe();

// const weatherForcast = function (tem, weather) {
//   this.temperature = tem;
//   this.weat = weather;
// };

// weatherForcast.prototype.increment = function () {
//   console.log(`Tempereture increased ${this.temperature}`);
// };
// weatherForcast.prototype.printWet = function () {
//   console.log(`Todays weather is ${this.weat}`);
// };

// const delhi = new weatherForcast(34, "Windy");
// const bhubneshwar = new weatherForcast(35, "sunny");

// delhi.increment();
// bhubneshwar.printWet();

// const userDeatail = function (username, skill, age) {
//   this.user = username;
//   this.detail = skill;
//   this.age = age;
// };

// userDeatail.prototype.greeting = function () {
//   console.log(`Welcome ${this.user}`);
// };
// userDeatail.prototype.work = function () {
//   console.log(`You are here for ${this.detail}`);
// };
// userDeatail.prototype.getAge = function () {
//   console.log(`Your age is ${this.age}`);
// };

// const rahul = new userDeatail("Rahul", "IAS", 23);

// rahul.greeting();
// rahul.work();
// rahul.getAge();
//! Making prototype to the object directly
//! take Object here as the parent component and Array, function and the String as the child component
//? Array,function and string after all is a protype of object in javaScript so making protype of the object directly gives the power to all the array,function and string
// let hero = ["thor", "spider"];
let spider = "net     ";
// const heroPower = {
//   thor: "hammer",
//   spider: "spidySence",
//   spiderPower: function () {
//     console.log(`Power of spider is ${this.spider}`);
//   },
// };
// Object.prototype.himanshu = function () {
//   console.log(`Hi there`);
// };
// heroPower.himanshu();
// hero.himanshu();
// spider.himanshu();

// let hb = heroPower("thor".toUpperCase());
// console.log(hb);

//! Inheritance
const user = {
  name: "Frooti",
  email: "sankiDaro@gmail.com",
};
const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvalable: true,
};
const taSupport = {
  makeAssigement: true,
  fullTime: true,
  __proto__: teachingSupport,
};
teacher.__proto__ = user;

// console.log(teacher.name);
// console.log(taSupport.isAvalable);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true lencth is ${this.trim().length}`);
};
spider.trueLength();
"Himanshu   ".trueLength();
"TanuShri".trueLength();
