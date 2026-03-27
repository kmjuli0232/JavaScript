//✅ map methode
debugger
// let sum = [1,3,2,4];
// const result = sum.map(function(num){
//     return num+3;
// });
// console.log(result)

// ✨2nd emp:=

// const months = ['jansuary','february','march','april']
// const capitalMonths = months.map((month,index,array)=>{
//     return console.log(index);
    // console.log(array);
    // return month.toUpperCase()
// });
// console.log(capitalMonths);


// ✅filter method
// const number = [1,2,3,4,5];
// const result =number.filter(function(num){
//     return num>3;
// });
// console.log(result);

//  ✨2nd emp:=
// const months = ["jansuary", "february", "march", "april",'may','my','june',];
// const filterValue =months.filter((month,index,array)=>{
//     // console.log(month.toLocaleLowerCase().includes('m'));
//     return month.toLocaleLowerCase().includes('m')
    
// })
// console.log(filterValue);

// ✨3rd exm
// const  student =[
//     {name:'Juli',
//         age:22,
//     },
//     {name:'Tingu',
//         age:19,
//     },
//     {name:'Renu',
//         age:18,
//     },
//     {name:'Farheen',
//         age:17,
//     },
//     {name:'Harsh',
//         age:18,
//     },
//     {name:'Mahesh',
//         age:16,
//     },

// ]
// const adultStudents = student.filter((student)=>{
//     return student.age>=18
// }).map((student)=>{
//     return student.name
// }).filter((student)=>{
//     return student.includes('a')
// })
// console.log(adultStudents);


// const add = function () {
// const a =arguments[0] 
// const b = arguments[1]
// const c = arguments[2]
// const d = arguments[3]
// const e = arguments[4]
// return a + b + c + d + e

// }
// console.log(add(1, 2, 3, 4, 5));

//✅ rest operator

// const add2 = (...nums)=>{
//     let sum =0;
//     for(let i=0; i<nums.length;i++){
//         sum +=nums[i]
//     }
//    return sum
// }
// console.log(add2(1,2,3,4,5));

// ✅reduce method
// ✨add values
// const number=[1,2,3,4];
// const sum =number.reduce((acc,curr)=>{
//     return acc+curr;
// });
// console.log(sum);

// ✨array of object

// const add =(...nums)=>{
//     let sum =0;
//     for(let i=0; i < nums.length;i++){
//  sum += nums[i];
//     }
//    return sum

// }
// console.log(add(1,2,3,4));

// ✅default operator
// function multiply(a,b=1){
//     return a*b
// }
// console.log(multiply(5));

// ✅dice value
// function roleDice(sides=6){
//     return Math.floor(Math.random()*sides)+1
// }
// console.log(roleDice);









