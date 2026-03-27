//✅ default operator
// debugger
// function sum(a,b=1){
//     return a*b;

// }
// console.log(sum(3));

// ✨example 2
// function roleDice(sides = 6){
//     return Math.floor(Math.random() *sides) +1;
// }
// console.log(roleDice());

// ✅destructure
// const colors=['red','blue','green','white','pink','yellow']
// old way
// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]
// const color4 = colors[3]
// const color5 = colors[4]
// const color7 = colors[5]
// console.log(colors);

// 💥new way
// const [color1,color2,color3]=colors
// console.log(color1, color2, color3);

//💥 skeep the element
// const [,,,color5]=colors
// console.log(color5);

// 💥Object style on array
// const {3:color4,5:color6} = colors
// console.log(color4,color6);

// 2. Object Destructuring
// const user = {
//     name: 'meena',
//     age: 23,
//     address:{
//         city:'paonta',
//         state:'hp',
//     },
// }
//💥 normal way
// const name = user.name
// const age = user.age
// console.log(user);
//💥 Destructuring way

// let{name,age,address:{city,state}}=user
// console.log(name,age,city,state);

// Rename variables
// const{name:userName,agr:userAge}=user


