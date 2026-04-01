// var a = 2;
// console.log(a);
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1===id2);
// alert("this is my first page")
// prompt("is this is corect")
// confirm("yest thisis corect")

// var firstName ="kumari"
// let lastName ="juli"
// firstName = "only me"

// let username = `hi this is `+ firstName + `` + lastName + `` ;
// console.log(username);

// const message = "Hi, i am here";
// const lenghtmsg = message.length
// console.log(lenghtmsg);

// const username = prompt("Enter your name");
// const userAge = prompt("Enter your age");

// console.log(`name - ${username}`);
// console.log(`userAge - ${userAge}`);

// if (userAge >=0 && userAge<4) {
// console.log(`${username} is kid`);
// console.log(`he/she is playing with toy`);
// }
// if(username >= 5 && userAge<18){
//     console.log(`${userAge} is a school stdent` );
//     console.log(`and he/she is learning science and maths`);
// }

// const day = parseInt(prompt("enter dayNumber:- "));

// switch (day) {
//   case 0:
//     dayNumber = "sunday"
//     break;
//   case 1:
//     dayNumber = "monday"
//     break;
//   case 2:
//     dayNumber = "tuesday"
//     break;
//   case 3:
//     dayNumber = "wednesday"
//     break;
//   case 4:
//     dayNumber = "thursday"
//     break;
//   case 5:
//     dayNumber = "friday"
//     break;
//   case 6:
//     dayNumber = "saturday"
//     break;
//   default:
//       dayNumber = "not valid value"
// }
// console.log(dayNumber);

// search addres variable
// const myName ="juli"
// const empty=""
// const gender="F"
// const myAge= 24
// const contect= 8279897142

// ✨objects

// const user={
//     name:'juli',
//     age: 23,
//     contect: 7876207503,
//     address:{
//         city: 'kerela',
//         state: 'karnataka',
//         pincode: 173025,
//         moreDetails:{
//             population:7654323456,
//             area:'787 sq km',
//             moreDetails:{
//                 population:87675798978,
//                 area:'782sq kj',
//             }
//         }

//     }
// }
// // object creation
//  const user2={
//     name:'juli',
//     age: 23,
//     contect: 7876207503,
//     address:{
//         city: 'kerela',
//         state: 'karnataka',
//         pincode: 173025,
//         moreDetails:{
//             population:7654323456,
//             area:'787 sq km',
//             moreDetails:{
//                 population:87675798978,
//                 area:'782sq kj',
//             }
//         }

//     }
// }

// user2.pataa ='kishanpura'
// console.log(user2);

//✅ object opreaction

//  ✅create a object
// const user={
//     name: "juli",
//     age: 23,
//     add:"kishanpura"

// };
// user.account= 67655566,
// console.log(user );

//  ✅access the proparty
//  dont notation
// console.log(user.name);

// bracket notation
// console.log(user["age"])

//  when the key in variable

// let key = "add";
// console.log(user[key]);

// // propary add

// user.city='delhi';
// user["country"]='India';

// // update the proparty

// user.age=32;

// delete the proparty

// delete user.name;

// object loop (for in loop)
// for(let key in user){
//     console.log(key,user[key]);
// }

// lock Object.
// Object.freeze(user); //kuch change nhi hoga
// Object.seal(user); // value change ho skti ,add/delete nhi

// nested Objectaccess

// ✨array
// const fruits=['apple', 'banana','orange','mango','grapes']
// push to add Elementin last
// fruits.push('papaya')

// pop remove the element in last
// fruits.pop("papaya")

// unshift add elem in start
// fruits.unshift('gobhi')

//  shift remove the elem in start
// fruits.shift('gobhi')

// concat

// const evenNumbers=[0,1,2,3,34,54,22,54]
// const animal=['Dog','Cat','Rat','Lion',]
// const oddNumber=[2,23,13,17]
// const addedArray1 = evenNumbers.concat(animal)
// evenNumbers.indexOf(5)

// for loop

// for( let i=1; i<=3; i++){
//     for( let j=1; j<=3; j++){
//         console.log(i,j);

//     }
// }

// compound operators
// let a = 13;
// let b = 6;
// console.log(a+=b) // add
// console.log(a%=b);// modual

// object copy method

// const user ={ name:"juli",age: 23}
// const copyUser={...user}

// copyUser.name="priya"

// console.log(user.age)
// console.log(copyUser.name);

// const user = {
//   name: "Juli",
//   address: { city: "Diara" }
// }

// const copyUser = { ...user }

// copyUser.address.city = "Patna"

// console.log(user.address.city) // Patna ❌

// const user = { name: "Juli", age: 23 }

// const copyUser = Object.assign({}, user)

// copyUser.name = "Riya"

// console.log(user.name)     // Juli
// console.log(copyUser.name) // Riya

// ✨functions
// function greet() {
//   console.log("Hello!");
// }

// greet(); // function call

// // parameters
// function para(name) {
//   console.log("hello" + name);
// }
// para("juli");

// // return value
// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 6);
// console.log(result);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));

// const firstName ="juli";

// const myAge = 23;
// console.log(firstName)

// debugger

// const username = 'juli'
// const userAge= 23
// sayHi()

// function sayHi(){
//   const a= 14
//   const b= 12
//   add(7,8)
// }
// function add(x,y){
//   kuchbhi()
//   return x,y
// }

// function kuchbhi(){
//   console.log("kuchh bhii");

// }

// console.log('program ended')

//  const fruits = ['apple', 'banana', 'date']

// const myFruits = fruits   // same array ko point karega
// myFruits.push('aam')

// console.log(fruits)
// console.log(myFruits)


// function add() {
//     debugger
//     const username ='akshat'
//     const x = 5
//     const y = 7
//     console.log(x + y)
//    console.log(username)

// }
// function subtract(){
//     const x = 2
//     const y = 3
//     console.log(x-y)
//     console.log(subtract)

// }

// add()
// subtract()
//  ✨call stack example

// function third() {
//   console.log("third function");
// }

// function second() {
//   third();
// }

// function first() {
//   second();
// }

// first();

//✨ lexical scope

// function subtract()
// {
//   const x =
// }
// debugger
// function calculateTotal(price, quantity) {
//   let total = price * quantity;
//   return total;
// }

// function printBill() {
//   let productName = "Laptop";
//   let price = 50000;
//   let quantity = 2;

//   let totalAmount = calculateTotal(price, quantity);

//   console.log("Product:", productName);
//   console.log("Price:", price);
//   console.log("Quantity:", quantity);
//   console.log("Total Amount:", totalAmount);

//   console.log("Discount:", discount); // error: discount defined nahi hai
// }

// printBill();

//✨ operators
// let a = 5;
// let b = 4;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.33
// console.log(a % b); // 1
// console.log(a ** b); // 1000

//✨ assignment operator
// let x = 18;

// x -= 3;

// console.log(x); // 15

// let a = 10;
// let b = "10";

// console.log(a == b);
// console.log(a === b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);

// 9 mrch
//✨ pure function 
// debugger

// function add(a,b){
//     return a+b 
// }
// console.log(add(3,7));


// function meet(x, z) {
//   return x - z;
// }
// console.log(meet(7, 3));

//impure function
// let total = 0;

// function sum(num){
//     total = total+num;
//     return total;
// }
// console.log(sum(4));
// console.log(sum(4));
// console.log(sum(4));
// console.log(sum(4));

// let count = 0;
// function increase(){
//     count++;

//     return count; 

// }
// for(let i=0; i<5;i++){

// console.log(increase());
// }
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());


// ✨event loop and callback queue
// console.log("Start");

// setTimeout(() => {
//   console.log("Timer Done");
// }, 2000);

// console.log("End");

// console.log("start")
//  setTimeout(()=>{
//     console.log("timer done");
//  },3000);
//  console.log("end");








// console.log("Start");
// setTimeout(() => {
//   console.log("Timeout Callback");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise Callback");
// });
// console.log("End");


// console.log("Hi-1");
// function hello() {
//   console.log("Hello World!");
// }
// for (let i = 1; i <= 4; i++) {
//   console.log(i);
// }
// hello();
// setTimeout(hello, 0);
// console.log("Hi-2");

// ✨add one arr in another arr
// const fruits =["apple", "banana","mango"]
// const fruits2=[]
// Object.assign(fruits2,fruits)
// fruits2.push("me")
// console.log(fruits);
// console.log(fruits2);

// 10 march
// clouser
// debugger
// function add() {
//   const a = 4;
//   const b = 6;

//   function inner() {
//     const c = 10;
//     const d = 20;

//     console.log(a + b);
//     function innerMost() {
//       console.log(c + d);
//       console.log(a * b);
//     }

//     innerMost();
//   }
//   inner();
// }

// const x = add()

// console.dir(add());


//   function mul(){
//    const a=7;
//    const b=6;

//    function andar(){
//       const c=4;
//       const d =7;
//       console.log(a+b);
//       function andarIn(){
//          console.log(c+d);
//          console.log(a*b);
//       }
//       andarIn();
//    }
//       andar();
//   }
//  console.log(mul());

// 🔆13 march pactice
// 👀closure
// debugger
// function outer(){
//     let name ="juli";


// function inner(){
//     console.log(name);
    
// }
// return inner;
// }
// const myFunc = outer();
// myFunc();

// 2nd example

// function count(){
//     let student="juli";

// function numb(){
//     console.log(student);
    
// }
// return numb;
// }
// const myTotal = count();
// myTotal();

// 👀arrow function
// const add =(a,b)=>{
//     return a+b;
// }
// console.log(add(4,7));

// 👀forEach function

// const fruits=["apple","banana","mango","papaya"];
// fruits.forEach(function(fruit){
//     console.log(fruit);
    
// });
//👀  map function
// const number =[1,2,3];
// const result = number.map(function(num){
//     return num*2;
// });
// console.log(result);

// 2nd example arrow function 
// const number = [1, 2, 3];
// const result= number.map(num=>num*2);
// console.log(result);


// 👀real exg
//  const fruits = ["apple", "banana", "mango", "papaya"];
//  const upper = fruits.map(fruit=>fruit.toUpperCase());
//  console.log(upper);
 
//👀 pure function
// function add(a,b){
//     return a+b

// }
// console.log(add(4,6));

//👀 impure function
// let total=0;
// function addNumbers(num){
//    total = total+num;
//    return total;
// }
// console.log(addNumbers(7));
// console.log(addNumbers(7));
// console.log(addNumbers(7));
// console.log(addNumbers(7));
// console.log(addNumbers(7));


// Map method
// const number =[1,2,3,4];
// const result = number.map(function(num){
//     return num*2;
// });
// console.log(result);

// // filter method
// const users =[2,3,4,5]












