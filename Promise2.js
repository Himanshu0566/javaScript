//! Promise
//? A Promise Object represents eventual complition(or failuar) of the asynchronous operation and its resulting value.

// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Setting up new things");
//     res();
//   });
// }).then(() => {
//   console.log("Have some Patience");
// });
// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Promise TWo");
//     res({ userName: "Himanshu", skill: "Never Mind" });
//   }, 2000);
// }).then((user) => {
//   console.log(user);
// });
//? .then,.catch,.finally
// new Promise((res, rej) => {
//   let error = false;
//   if (!error) {
//     res({ username: "Himanshu", skills: "MERN" });
//   } else {
//     rej("Something went wrong");
//   }
// })
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise have been consumed");
//   });
//? Async and Await
// const promiseFive = new Promise((res, rej) => {
//   let error = false;
//   if (!error) {
//     res({ username: "Himanshu", skills: "MERN" });
//   } else {
//     rej("Something went wrong");
//   }
// });

// async function handlePromise() {
//   try {
//     const resolve = await promiseFive;
//     console.log(resolve);
//   } catch (error) {
//     console.log(error);
//   }
// }
// handlePromise();

// async function handleUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// handleUser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
