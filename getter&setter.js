class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    return (this._email = value);
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value;
  }
}

const abhishek = new User("bhola@gmail.com", "123bhola");
// console.log(abhishek.password);
// console.log(abhishek.email);

//! There will be always return in the getter because if anyone trying to get that element from outside so there must be return in it.
//? bro Code

class Fullname {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(properFirstName) {
    if (typeof properFirstName === "string" && properFirstName.length > 0) {
      this._firstName = properFirstName;
    } else {
      console.error("First name must be a string and in words");
    }
  }
  set lastName(properLastName) {
    if (typeof properLastName === "string" && properLastName.length > 0) {
      this._lastName = properLastName;
    } else {
      console.error("Last name must be a string and in words");
    }
  }
  set age(properAge) {
    if (typeof properAge === "number" && properAge > 0) {
      this._age = properAge;
    } else {
      console.error("Age must be greater then zero");
    }
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
}

const user1 = new Fullname("Rahul", "thakur", 24);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);
