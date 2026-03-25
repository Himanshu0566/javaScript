// const user = {
//   username: "abcd",
//   loginTime: 8,
//   islogedIn: true,
//   getUser: function () {
//     // console.log(`Username:${this.username}`);
//     console.log(this);
//   },
// };
// console.log(user.username);
// console.log(user.getUser());

// function User(username, usercount, userlogedIn) {
//   this.username = username;
//   this.usercount = usercount;
//   this.userlogedIn = userlogedIn;
//   return this;
// }
// const userOne = new User("himanshu", 5, true);
// const userTwo = new User("Mohini", 8, false);
// console.log(userTwo);
// console.log(userOne);

function productInfo(product, price) {
  this.product = product;
  this.price = price;
}
productInfo.prototype.increment = function () {
  return this.price++;
};
productInfo.prototype.printme = function () {
  console.log(`Price:${this.price}`);
};
const chai = new productInfo("chai", 10);
chai.printme();
const tea = new productInfo("tea", 200);
tea.printme();
tea.increment();
