// console.log("Consol");
// console.log("Run");
// console.log("Display");
// fullname="no internet";
// console.log(fullname);
// isFollow=true;
// let x;
// const student ={
//     fullName:"M.k.Gandhi",
//     age:20,
//     cgpa:8.5,
//     isPass:true,

// };
// console.log(student.fullName);
// let str="happybirthday";
// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("str size=",size);
// let student={
//     name:"eifh",
//     age:23,
//     fjlia:"jfje",
//     fmjojew:true

// };
// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }
// for( let count=0;count<=100;count++){
//     if(count%2===0){
//         console.log("num=",count);

//     }
// }
// let gameNum=20;
// let userNum =prompt("guess the number :");
// // console.log(userNum);
// while(userNum !=gameNum){
//    userNum= prompt("you have entered wrong num,please guess agian");
// }
// console.log("congrates you won ");
// for(let num=0;num<=100;num++){
//    console.log("hhuhiug",num);
//    }
// Strings
//    let str="hector";
//    let str2='hdof';
//    console.log(str2[4]);
// Template Literls
// let sentence=`this s a template literal`;
// console.log(typeof sentence);
// let obj={
//    item:"pen",
//    price:10
// };
// console.log(`cost of ${obj.item} is ${obj.price} rupees`);
// for(let num=0;num<=10;num++){
//    console.log(`naneef ${num}`);

// }

// let str="3875058354";
// let str2="hello"
// // str=str.toUpperCase();
// // console.log(str);
// let str3=str.replace("3875","babe")
// // console.log(str3);
// console.log(str2.concat(str3));
// let username=prompt("enter full name");
// let str=username.length;
// console.log(`@${username}${str}`);
// let marks=[23,35,24,42,42];
// for(let ab=0;ab<=marks.length;ab++){
//    console.log(marks[ab]);

// }
// console.log(marks.length);
// let marks=[43,34,45,33,44,49];
// let sum=0;
// for(let val of marks){
//    sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of all ${avg}`);
// let prices=[250,645,300,900,50];
// for(let i=0;i<prices.length;i++){
//     let off=prices[i]/10;
//    prices[i] -= off;

// }
// console.log(`discount price is ${prices}`);
// let foodItem=["aheio","efhiu","jfejj","uehu","jeij"]
// console.log(foodItem);
// let add=foodItem.push("ssihf","sfdu","fdgsw");
// console.log(add);
// let remove=foodItem.pop();
// console.log(remove);
// let actress=["shradha kapoor","sonam kapoor","karina kapoor"];
// actress.unshift("mohini")
// let real=["hduwi","hjwidh"];
// let newab = actress.concat(real);
// console.log(actress);
// actress.shift();
// console.log(actress);
// let num=[66,83,3,46,67,88];
// console.log(num);
// // console.log(actress.slice(1,3));
// console.log(num.splice(1,2,11,23,34));
// console.log(num);

// let companies=["Bloomberg","Microsoft","uber","google","IBM","Netflix"];
// companies.shift("Bloomberg");
// companies.splice(1,1,"OLA");
// companies.push("Amazon");
// console.log(companies);
// function myFunction(msg){
//    console.log(msg);

//    // console.log("welcome to hell");
//    // console.log("you are fucked");

// }
// myFunction("fuck you");
// myFunction("and again fuck you");
// function sum(x,y){
//    s=x+y;
//    return s;
// }
// let val=sum(5,8);
// console.log(val);

// function countVow(str) {
//    let count=0;
//    for(const char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"
//       ){
//          count++;
//       }
//    }
//    return count;

// }
// let countVow=(str)=>{
//    let count=0;
//    for(let char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"
//       ){
//          count++;
//       }
//    }
//    return count;

// }
// let arr=[1,2,202,4,5];
// let large = arr.reduce((res,val) => {
//    return   res>val?res:val;

//    // if(res>val){
//    //    return res;

//    // }
//    //    else return val;

// })
// console.log(large);
// let arr=[90,98,88,30,96];
// let marks = arr.filter((val) => {
//    return   val>90;

//    // if(res>val){
//    //    return res;

//    // }
//    //    else return val;

// })
// console.log(marks);

// date:-31/03/2025
// let foodItem = ["magggie","chips"];
// foodItem.unshift("wojdj")
// foodItem.push("fjqie","heufg","sheufh");
// console.log(foodItem);
// let marvelhero=["ironman","antman","aquaman","Captain"];
// console.log(marvelhero.slice(0,2));
// let companies=["Bloomberg","Microsoft","Uber","google","IBM","Netflix"];
// // companies.splice(2,1,"Ola");
// companies.push("Amazon");
// console.log(companies);

//Function
//sum of two
// function sum(x,y){
//    s=x+y;
//    console.log(x);
//    return s;
// }
// console.log(sum(3,4));
// function countvowel(str){
//    let count=0
//    for(const char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//    {
// count++;
//    }

// }
// return count;
// }
// const countrVow =(str)=>{
//    let count=0
//    for(const char of str){
//       if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//    {
// count++;
//    }

// }
// return count;
//}

//forEach loop
// let arr=["pune","mumbai","ranchi"];
// arr.forEach((val,idx,arr)=>{
//    console.log(val.toUpperCase(),idx,arr);

// })
// let arr=[1,2,3,4,5];
// arr.forEach((num)=>{
//    console.log(num*num);
// })
//or
// let arr=[1,2,3,4,455];
// let calsqr=arr.map((num)=>{
//    return num*num;
// })
// console.log(calsqr);
// let arr=[1,2,3,4,5,44,66,55];
// // let newarr=arr.filter((num)=>{
// //    return num%2===0;
// // })
// // console.log(newarr);
// let arr=[1,2,3,4,5,44,66,55];
// const newarr=arr.reduce((int,cur)=>{
//    return int>cur?int:cur;
// })
// console.log(newarr);
// let marks=[80,87,98,78,99,94];
// const good=marks.filter((val)=>{
//    return val>90;
// })
// console.log(good);
// let n=prompt("enter a number:");
// let arr=[0];
// for(let i=1;i<=n;i++){
//    arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((int,cur)=>{
//    return int+cur;
// });
// console.log("sum = ",sum);
// let fact=arr.reduce((int,cur)=>{
//    return int*cur;
// });
// console.log("fcatorial =",fact);
// let headings = document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);
// let para =document.querySelector("p");
// console.log(para);
// let get=para.setAttribute("class","new clasds");
// console.log(get);
// let but=document.createElement("button");
// but.innerText="click me!";
// console.log(but);
// let div=document.querySelector("div");
// div.append(but);
// let newBut=document.createElement("button");
// newBut.innerText="click me!";
// console.log(newBut);
// let div=document.querySelector("div");
// div.after(newBut);
// let newHed=document.createElement("h1");
// newHed.innerHTML="<i>Himanshu Singh</i>";
// newHed.style.color="blue";
// document.querySelector("body").prepend(newHed);
// let list=document.querySelector("li")

// list.remove();
// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// console.log(newBtn);
// document.querySelector("body").prepend(newBtn);
// const student = {
//   fullName: "Himanshu",
//   marks: 95,
//   printMarks() {
//     console.log("marks", this.marks);
//   },
//   // function:printMarks=()=>{
//   //     console.log("marks",marks);
//   // },
// };
// const salery = {
//   num: 4000,
// };
// salery.__proto__ = student;

// let num = 45;
// let conNum = String(num);

// console.log(conNum);
// console.log(typeof conNum);

//! but there is something diffrent with the Non-primitive data type when the value is used it gives refrence to the data so when the value changes the original value is chnaged because it gives refrence to the value

// let userOne = {
//   email: "himanshusingh@gmail.com",
//   upi: "himanshu@ybl",
// };
// let userTwo = userOne;
// userTwo.email = "tSh@gmail.com";

// console.log(userOne.email);
// console.log(userTwo.email);
//!Number and maths
// let score = 200;
// console.log(score);

// let number = new Number(300);
// console.log(number);

// console.log(number.toString().length);
// console.log(number.toFixed(1));

// console.log(number.toPrecision(4));

//! Date and Time

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

//! Array

// let myArray = [1, 2, 3, 4, 5, 6];
// let myArray2 = [239, 32];
// console.log(myArray.indexOf(1));
// console.log(myArray.includes(9));
// const newArr = myArray.concat(myArray2);

// console.log(newArr.indexOf(3));
// console.log(Arr);

// let myArr = [0, 1, 2, 3, 4, 5];
// console.log("A", myArr);
// //! Range not included
//! There is no change in the original array with the use of slice

// let myArr2 = myArr.slice(1, 3);
// console.log(myArr2);
// console.log("B", myArr);

//! Range include
//! There is chnage in the original Array

// let myArr3 = myArr.splice(1, 3);
// console.log(myArr3);
// console.log("C", myArr);

//! Flat

// const myarr = [1, 2, 3, [4, 5, [45, 67, 88], [35, 2, 145, 4, [3435, 5]]]];

// console.log(myarr.flat(1));

//! Object==============>>>>>>>>>>>>
//? Object Singleton

//? object.create

//? Object Literals

// const mySym = Symbol("kety1");
// const myObj = {
//   name: "hiamnshu",
//   age: 26,
//   email: "tSh@gmail.com",
//   isLoggedIn: true,
//   [mySym]: "Symbol1",
//   date: Date.now().toString(),
// };
// myObj.greetingOne = function () {
//   console.log(`Hello ${this.name}`);
// };
// console.log(myObj);
// console.log(myObj.greetingOne());

//? object Singleton
//! Function

//? function with parameter

// function addNumber(num1, num2) {
//   //   console.log(num1 + num2);
//   return `${num1 + num2} adding two number`;
// }
// console.log(addNumber());

// function printUser(username) {
//   return `${username} just logged in`;
// }
// console.log(printUser());

// function cartPrice(...num) {
//   return num;
// }
// con;
// console.log(cartPrice(1000, 200, 3000));

// const user = {
//   username: "Himanshu",
//   price: 1999,
// };
// const user2 = {
//   username: "tSh",
//   price: 5769,
// };
// function data(username) {
//   return `Name is ${username.username} and the price is ${username.price}`;
// }
// console.log(data(user2));

// const arrr = [100, 200, 300];
// function playing(num) {
//   return `Number at index two ${num}`;
// }
// console.log(playing(arrr[1]));

//! Hoisting
//? Normal way function
//? In this type ogf function the ecution can be anywhere before or after the declaration
// tSh();
// function tSh() {
//   console.log(" Great");
// }
//? After holding inside the varial it must be executed after the function declaration
// const him = function () {
//   console.log("Hahaha");
// };
// him();
//! This ==> Current context or current value
// const user = {
//   username: "himanshu",
//   price: 9999,
//   greeting: function () {
//     console.log(`${this.username} welcome`);
//     console.log(this);
//   },
// };

// user.greeting();
// user.username = "tSh";
// user.greeting();

// console.log(this);

//! Arrow function
//?1
// let chai = () => {
//   console.log("garam chai");
// };
//?2
// let chai = () => console.log("garam Doctor");
//?3
// let chai = () => {
//   return console.log("chai");
// };

// chai();
//! IIFE Imediatly invoced function expression

// (function chai(name) {
//   console.log(`${name} Debuge`);
// })("Himanshu");
// //! Named iffe
// ((name) => {
//   console.log(`${name} Debuge`);
// })("Kunal");

//!Global exicution context and functional exicution context
//? Eval Exicution context
//? 1 Memory Phase
//? 2 Execution Phase

//! Truthy and Falsy Value
//! Falsy Value
//? False,0,-0,"",bigInt 0n,null,undefined,NaN
//!Truthy Value
//? True,1," ",[],function(){}
// for (let i = 1; i <= 10; i++) {
//   console.log("Table of " + i);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }
//! For of loop

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num * 2);
// }
// const greet = "hello tSh";
// for (const greeting of greet) {
//   if (greeting == " ") {
//     break;
//   }
//   console.log(`each char of ${greeting}`);
// }

//!Map
//? No unique value and order are same

// const map = new Map();
// map.set("In", "India");
// map.set("USA", "America");
// map.set("Od", "Odisa");
// map.set("Od", "Odisa");
// console.log(map);

// const myObj = {
//   name: "Anything",
//   name2: "Anything2",
// };
// for (const [key, value] of myObj) {
//   console.log(key, value);
// }
//? For of can't print the key value pair of the object
//! For in loop can be used here
// for (const key in myObj) {
//   console.log(`${key}:-${myObj[key]}`);
// }
// for (const name in myObj) {
//   console.log(name + ":-" + myObj[name]);
// }
//? For the key write what is decleared and the for the value it must be written like myObj[name]
//! ForEach loop
const arr = ["js", "ruby", "cpp", "java", "python"];
//? 1))============With arrow function
// arr.forEach((val) => {
//   console.log(val);
// });
//?2))=============With the normal function
// arr.forEach(function (name) {
//   console.log(name);
// });
//?3))=============With the refrence
// function printME(val) {
//   console.log(val);
// }
// arr.forEach(printME);
//? In forEach() loop each element of the array will be taken as the parameter in the in the call back function.
//? and the call back function do not have the name in it.
//? Now forEach loop have the access of the three things of the array item,index,and array itself.
//! To print any particular Element of the arr
// arr.forEach((val, index, arr) => {
//   if (index == 2) {
//     console.log(val, index, arr);
//   }
// });

const background = [
  {
    name: "Navneet",
    skill: "Sql",
    price: 888,
  },
  {
    name: "Rahul",
    skill: "Upse",
    price: 999,
  },
  {
    name: "Vineet",
    skill: "DP",
    price: 878,
  },
  {
    name: "Himanshu",
    skill: "MERN",
    price: 809,
  },
];

background.forEach((val) => {
  // console.log(val.name);
});
const pandey = background.filter((val) => {
  // if (val.name === "Vineet") {
  //   console.log(val);
  // }
  return val.skill === "MERN";
});
// console.log(pandey);

// const num = [1, 23, 4, 3, 6, 7, 88, 9];

// const newNum = num.filter((val) => {
//   return val > 5;
// });
// console.log(newNum);
// const number = [];
// const newNum = num.forEach((val) => {
// if (val > 4) {
//   console.log(val);
// }
// return val > 4;
//   if (val > 4) {
//     number.push(val);
//   }
// });
// console.log(number);
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNum = num
//   .map((val) => {
//     return val * 10;
//   })
//   .map((val2) => val2 + 5)
//   .filter((val3) => val3 > 44);
// console.log(newNum);

// const newNum = num.reduce((acc, curr) => {
//   console.log(`acc value:- ${acc} and curr value:-${curr} `);
//   return acc + curr;
// }, 0);
// console.log(newNum);

// const newNum = function abc(acc, curr) {
//   return abc(acc + curr);
// };
// console.log(newNum(num));
// const total = background.reduce((initial, price) => {
//   return initial + price.price;
// }, 0);
// console.log(total);
