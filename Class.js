// class User {
//   constructor(username) {
//     this.username = username;
//   }
//   logMe() {
//     return console.log(`Here username:${this.username}`);
//   }
// }
// // console.log(User.logMe());

// // logMe();
// // const monu = new User("himanshu");

// // monu.logMe();

// class Teacher extends User {
//   constructor(username, email, password) {
//     super(username);
//     (this.email = email), (this.password = password);
//   }
//   cousrseAdd() {
//     console.log(`New course added ${this.username}`);
//   }
// }
// const chai = new Teacher("Rahul", "rahul@gmail.com", 123);
// console.log(chai.username);

// const subject = new User("Maths");
// // console.log(subject.cousrseAdd());
// subject.logMe();
//! Things with the class
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}@0502`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const rahul = new User("rahul Thakur", "rahul@gamil.com", " 0503");

// console.log(rahul.encryptPassword());
//! Now the things with function

// const User = function (username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// };

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };

// User.prototype.changeUserName = function () {
//   return `${this.username.toUpperCase()}`;
// };

// const lili = new User("Rahul babu", "lili@gamil.com", "liliPut");

// console.log(lili.changeUserName());
// console.log(lili.encryptPassword());

//? In normal function when we use call to call or use the others functions reference then we used to use
//? otherFunctionName.call(this,username)

//! Same thing with the class

// class User {
//   constructor(username) {
//     this.username = username;
//   }
//   logMe() {
//     console.log(`${this.username} Just logged in `);
//   }
// }
// class teacher extends User {
//   constructor(username, password, email) {
//     super(username);
//     this.email = email;
//     this.password = password;
//   }
// }
// const rahul = new User("Rahul");
// const frooti = new teacher("Frooti", "mohiniTheater@gamilcom", "Mohini");

// console.log(rahul.username);
// console.log(frooti.username);
// // console.log(frooti.logMe());

// // console.log(frooti instanceof rahul);
// rahul.logMe();
// frooti.logMe();

// console.log(rahul === frooti);
// console.log(frooti instanceof User);
// console.log(frooti instanceof teacher);

//! Static:- It stops the method from inheritance
//? Whenever other class or object try to reach that method which is instance of that class it stops it use that method from using it

class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username:- ${this.username} and ${this.createId}`);
  }
  createId() {
    return "123";
  }
}

class baluGhat extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const haluman = new baluGhat("rishi", "haluman@gmail.com");

const rishi = new User("Rishi");
haluman.logMe();
