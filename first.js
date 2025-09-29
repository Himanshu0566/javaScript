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
// document.querySelector("body").prepend(newBtn)
const student={
    fullName:"Himanshu",
    marks:95,
    printMarks(){
        console.log("marks",this.marks)
    },
    // function:printMarks=()=>{
    //     console.log("marks",marks);
    // },
};
const salery={
    num:4000,
};
salery.__proto__=student;
























 