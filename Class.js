class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    return console.log(`Here username:${this.username}`);
  }
}
// console.log(User.logMe());

// logMe();
// const monu = new User("himanshu");

// monu.logMe();

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    (this.email = email), (this.password = password);
  }
  cousrseAdd() {
    console.log(`New course added ${this.username}`);
  }
}
const chai = new Teacher("Rahul", "rahul@gmail.com", 123);
console.log(chai.username);

const subject = new User("Maths");
// console.log(subject.cousrseAdd());
subject.logMe();
