// let score= "33";
// // console.log(typeof score);

// //conversion in js

// let valueinNum= Number(score);
// // console.log(typeof valueinNum);

// let valuein= String(score);
// // console.log(typeof valuein);


// const name= 'Himanshu';

// console.log(name.toUpperCase());
// console.log(name[0]);
// console.log(typeof name);

// const newName = new String("Himanshu");
// console.log(newName.charAt(6));
// console.log(newName.indexOf('h'));


// console.log(newName[6]);
// const anotherName=newName.slice(-7,5)

// console.log(anotherName);

//number and maths 

// const score =400;

// const number= new Number(100)
// console.log(number.toString().length);
// console.log(number.toFixed(2));

// console.log(typeof number);

// const myArr=[0,1,2,3,4,5];

// console.log("A", myArr);

// const myN1= myArr.slice(1,3)

// console.log(myN1);
// console.log("b",myArr);
// const myN2= myArr.splice(1,3)
// console.log(myN2);
// console.log(typeof myN2 
    
// );

// const marHero =['Ironman','Captain','Hulk'];
// const dcHero =['Flash','batman','Superman'];

// const allHero= marHero.concat(dcHero);

// console.log(allHero);

// const number=[1,2,3,4,[5,5,6,[7,90,[8,5,4]],4,7,8]]

// const allNum=number.flat(Infinity);
// console.log(allNum)
// const muSym= Symbol("key1")
// const jsUser={
//     name:"Himanshu",
//     roll:123,
//     sec:"D",
//     [muSym]:"key2",
//     isLoggedIn:false,
//     lastLogIn:["Monday","Tuesday"]
// }

// console.log(jsUser.name);
// console.log(jsUser["isLoggedIn"]);

// console.log( jsUser[muSym]);
// console.log(jsUser);

// const tinderUser= new Object();

// tinderUser.id="123abc";
// tinderUser.name="Himanshu";
// tinderUser.isLogIn=false;
// console.log(tinderUser);

// const obj1={1:"a",2:'b'};
// const obj2={3:'a',4:'b'};
// const obj3={5:'a',6:'b'};
// // const obj3= Object.assign({},obj1,obj2)

// const target ={...obj1,...obj2,...obj3}
// console.log(target);

// console.log(Object.keys(target));
// console.log(Object.values(target));
// console.log(Object.entries(target));//PERFECT******


// const course ={
//     courseName:"javaScript",
//     price:"999",
//     courseInstructor:"Himanshu"
// }

// const {courseInstructor:Teacher} =course;
// console.log(Teacher);

// function myName(nums,name) {
//     console.log(nums+name);    
// }

// myName(4,"himanshu")
// for(let i=1;i<100;i++){
//     console.log("Natwa Lili");
    
// }
// function userlogginMsg(username) {
//     if(!username){
//         console.log("Plese enter username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(userlogginMsg());

// const myArr=[100,300,400,900]

// function getSecondVal(anyArr) {
//     return anyArr[1]
// }
// console.log(getSecondVal([100,200,300]));

//########### Two function ############
// addOne(5)
// function addOne(num1) {
//     return num1+1
// }
// addOne(5)
// //###here it can be decleard before or after the function ####
// //++++++++++++++Or++++++++++++
// // #######here it can be declear only after the function ####
// const addTwo=function(num2){
//     return num2 +2
// }
// addTwo(5)

// const user={
//     username:"Himanshu",
//     Price:"999",
//     welcomemsg :function () {

        
//     }
// }
// for(let i=1;i<=10;i++){
//     console.log(`value of outer loop${i}`)
//     for(let j=1;j<=10;j++){
//         console.log(`value of inner loop is ${j} if outer loop is ${i}`)
//     }
// }

// const arr=["uysfyg","eufhuh","shshifh"]
// for(let i=0;i<arr.length;i++){
//     const ele=arr[i]
//     console.log(ele);
    
// }
// let myArr=["baueh","baeiuf","jiuefj"]
// let arr=0
// while(arr<myArr.length){
//     console.log(`Hero is ${myArr[arr]}`);
//     arr=arr+1
// }


//  const greeting ="Hello World!"
//  for(const greet of greeting){
//      console.log(`each cahr of ${greet}`);
     
//  }

// const map=new Map()
// map.set('In','India')
// map.set('Cn','Chaina')
// map.set('Sr','SriLanka')

// console.log(map);

// for(const [code,country] of map){
//     console.log(code,':-', country);
// }

// const myObj={
//     Game1:'NFS',
//     Game2:'CS2'
// }

// for (const [game,name] of myObj){
//     console.log(game,name);
    
// }
// //## It will not give the value of object we need for in for that###

// const myObj={
//     In:'india',
//     Cn:"chaina",
//     Sr:"Srilanka"
// }
// for(const code in myObj){
//     console.log(`${code} is code  for the country ${myObj(code)}`);
    
// }

// const coding=["JAVA",'Ruby','JS','Python','Cpp']

// coding.forEach(function(item){
//     //console.log(item);
    
// })
// coding.forEach((item)=>{
//    // console.log(item);
    
// })
// coding.forEach((item,hira,mandi)=>{
//     console.log(item,hira,mandi);
    
// })
// function printME(item){
//    // console.log(item)
// }
// coding.forEach(printME)

// const myobj=[
//     {
//         name:'Hima',
//         age:25
//     },
//     {
//         name:'rahul',
//         age:23
//     },
//     {
//         name:'Mnoa',
//         age:23
//     }
// ]
// myobj.forEach((item)=>{
//     console.log(item.age);
// })

//const nums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=nums.filter((num)=>{
//     return num>4
// })

// const newNums=[]
// nums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })



// console.log(newNums);

// const newNums=nums.map((num)=>num*10)
//                   .map((num)=>num+1)
//                   .filter((num)=>num>=40)

// console.log(newNums);

//reduce

const nums=[1,2,3,]

// const myTotal=nums.reduce(function(acc,curr){
//     console.log(`acc value ${acc} and curr value ${curr}`);
//     return acc+curr

// } ,0)
const myTotal=nums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);














