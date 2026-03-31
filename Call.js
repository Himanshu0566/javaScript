const setUsername = function (username) {
  this.username = username;
  console.log("called");
};

const createUser = function (username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
};
const frooti = new createUser("Rahul", "rahul@gamil.com", "rahul123@");

console.log(frooti);
