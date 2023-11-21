// javaScript display possibilites //

// innerHTML 
// document.write();
// window.alert();
// console.log(innerHTML);

// js statement //

// let x, y, z 
// it's a javascript statement //
// x = 5;
// y = 5;
// z = 5; 
// it's a javascript statement

// A computer program is a list of "instructions" to be "executed" by a computer.

// In a programming language, these programming instructions are called statements.

// A JavaScript program is a list of programming statements. 




// js string method 
/*


     length,
     slice(),
     substing(),
     substr(),
     replace(),
     replaceAll(),
     topUpperCase()
     toLowerCase(),
     concat(),
     trim(),
     trimStart(),
     trimEnd(),
     padStart(),
     padEnd(),
     charAt(),
     charCodeAt(),
     split()




let txt = "0123456789"
let text2 = "lorem ipsum dolor sit amet"
let spacesTxt = "                hello Bangladesh               "

let length = txt.length;
let slice = txt.slice(-3);
let slice2 = txt.slice(0 , 6);
let slice3 = txt.slice(-2 , -1);

let substing5 = txt.substring(5,8);
let subStr2 = txt.substr(5,8);
let newtxt = txt.replace("9" , "Nine");
let replaceAll = txt.replaceAll(1, "Hello World !");
let upcase = text2.toUpperCase();
let trim = spacesTxt.trim();
// let trimStarte = trimStart.(spacesTxt)
let reap = txt.charCodeAt(5);
console.log(length , slice ,slice2 ,slice3,substing5,subStr2 ,newtxt ,
     replaceAll,upcase , trim , reap);



*/

// sting search methods  //
// indexOf , lastIndexOf, search , match , matchAll , includes , startsWith , endsWith 


let text = "Please locate where are , 'locate' occurs!";
let index = text.indexOf("locate");
let indexe = text.lastIndexOf("locate");
let search = text.search("!");
let match = text.match("are");
let inclu = text.includes("lo");

// console.log(inclu)



// js array methods 

// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()

/*

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myBoys = ["Emil", "Tobias", "Linus"];

let size = fruits.length;
let string = fruits.toString()
let pop = fruits.pop();
let pusher = fruits.push("Coconut");
let shifter = fruits.shift();
let unshifter = fruits.unshift("Guava");
let cutItem = delete fruits[0];
let joinArray = fruits.join("hello");
let concatArray =fruits.concat(myBoys);
let splicer = fruits.splice(2,2, "kiwi" , "jackfruit");
let slicer = fruits.slice(1);
console.log(slicer);

*/

const array1 = ["a", "b", "c", "Orange", "Apple", "Mango"];

// array1.forEach((el)=> {
//     console.log(el + el)
// })

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
// num.map((i) => {
//     console.log(i * 5)
// })

// num.filter((i) => {
//     console.log( i > 5)
// })

// num.reduce((acc, el) => {
//     console.log(acc * el )
// })


// const d = new Date();

// let year = d.getFullYear();
// let month = d.getMonth();
// let day = d.getDate();
// let hour = d.getHours();
// let min = d.getMinutes();
// let sec =d.getSeconds();

// let currentTime = `${sec}:${min}:${hour/12}`
// console.log(currentTime)

/*
// for in loop //

const obj= {
     a: 1 ,
     b: 2 ,
     c: 3 ,
     d: 4 
}

for (const property in obj ) {
     console.log(`${property}: ${obj[property]}`)
}

// for of loop 

let number = [1, 2, 3, 4, 5, 6, 7, 8];

for ( digit of number) {
     console.log(digit % 2 === 0 )
}

// while loop // 

let i = 0;
let txt = '';

while (number[i]) {
     console.log(txt += number[i])
     i++;
}


// for each loop //

number.forEach(function(value){
     console.log(text += value)
})

*/


// classes

// class Car {
//      constructor(name, year) {
//           this.name = name;
//           this.year = year;
//      }
// }

// const car  = new Car("Toyota" , 2030);

// console.log(car.name + " " + car.year)


// object in js 

// const newObj = {
//      name: "Sagor Mohammed Yusuf",
//      age: 2000,
//      occupation: ["Poet", "Web Developer", "Film Director"]

// }

// let obj = newObj.name;
// console.log(obj);

// for ( let x in newObj){
//      console.log(x);
// }


//     let fullName = () => {
//           return this.name;
//      }

// let called = nam.call(newObj);


// ASYNC AWAIT 

// function res (){
//      return new Promise((resolve)=>{
//           setTimeout(()=> {
//                resolve("its resolved");
//           },2000);
//      });
// }


// async function func(){
//      console.log("calling func");
//      const result = await res(func);
//      console.log(result);
// };

// func();

// async function fetchData () {
//      try {
//           const response = await fetch("https://jsonplaceholder.typicode.com/")
//           const data = await response.json();
//           const str = data.post
//           console.log(data);
//      }catch (err) {
//           console.error(err);
//      }
// }

// fetchData()

// const numA = [1,2,3,4,5,6,7,8,9,100 ,500]


// const found = numA.find((e)=> e > 99)
// console.log(found);

// const reduceA = numA.reduce(
//      (acc , curr) => acc + curr 
// )

// console.log(reduceA + " reduce the array")


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2,4));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));

let test = (animals.slice());






// js tips and tricks //

// console.table(animals);

// console.warn("I don't like to be late");
// console.error("hello world this is custom error");

// console style //

// const style = `
//      padding: 150px ;
//      background:green;
//      color: #fff;
//      font-size: 20px;
// `

// console.log("%c Hello , Everyone!" , style);

// math //

let h;
// h = Math.sqrt(9);
// h = Math.abs(-5);
// h = Math.round(9.6);
// h = Math.ceil(4.2);
// h = Math.floor(4.9);
// h = Math.pow(2,4);
// h = Math.min(12,3,4,2);
// h = Math.max(12,3,4,2);
// h = Math.random();
// h = Math.floor(Math.random() * 90)
// console.log(h);


// capitalize the first letter // 

// const str = "yousuf";

// const capitalizedStr = (str) => str.charAt(0).toUpperCase() +
//                     str.slice(1);
// console.log(capitalizedStr(str));



// use the spread operator to copy marge arrays 

// const oriArray = [1,2,3,4,5]
// const dupArray = [...oriArray]

// console.table(dupArray)

// using it in object //

// const oriObj  = {
//      name : "Sagor Mohammed Yusuf",
//      age : 23,
//      job : "Front End Web Developer"
// }

// const cloneObj = {...oriObj}

// console.table(cloneObj)



// use arrow syntax to write shorter and more elegant function


// traditional function expression //
function add(a , b) {
     return a + b
}

// arrow function is a shorter function //

const add2 = (a, b) => a + b;

// using traditional function expression //

// const num1 = [2,3];
// const num2 = [3,5];

// const sqr = num1.map (function (num){
//      return num * num;
// })


// const squared2 = num2.map((num) => num + num);



//Use Destructuring to Extract Properties from Objects
// const person = {
//      FullName : "Sagor Mohammed Yusuf", 
//      age: 23, 
//      gender: "Male"

// }

// traditional way // 
// const name = person.name;
// const age = person.age;

// with destructuring //

// const {name, age , gender} = person;




// StartsWith() and endsWith() methods 

// const files = [
//      'text.txt',
//      'document.txt',
//      'image.jpg',
//      'script.js',
//      'docs.txt',
//    ];

//    //get text file //

// const textFiles = files.filter((file)=> file.endsWith(".txt"));
// console.table(textFiles)


// using map funcion ///

// const numbers = [1,2,3,4,5,6,7,8,9];

// const  newArry = numbers.map((num)=> num * num);

// console.table(newArry)


//  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//  const oddnum = nums.filter((a)=> a % 2 === 0);
//  console.log(oddnum);


// object with filter //

//  const products = [
//      { id: 1, name: 'Laptop', price: 1000 },
//      { id: 2, name: 'Phone', price: 500 },
//      { id: 3, name: 'Tablet', price: 300 },
//      { id: 4, name: 'Headphones', price: 100 },
//    ];

//    const cheapProducts = products.filter((product)=> product.price < 500);

//    console.log(cheapProducts)







// Use the forEach() Method to Loop Through Arrays // 


// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// number.forEach((num) =>{
//       console.log(num % 2 === 0 );
//       console.log(num)
// })


// async await function // 

// function fetchData1 () {
//      fetch('https://jsonplaceholder.typicode.com/users')
//      .then((res) => res.json())
//      .then((data) => console.log(data))
//      .catch((error)=> console.error("hello this is error" + error)); 
// }

// async function fetchData3() {
//      try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users');
//        const data = await response.json();
//        console.log(data);
//      } catch (error) {
//        console.error(`There was an error: ${error}`);
//      }
//    }

// console.log('hello');

// const fetchData4 = async () => {
//      try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/users');
//           const data = await response.json();
//           console.log(data);
//      } catch (error) {
//           console.error(`There was an error: ${error}`);
//      }
// }




// Js tips and trick   start here// 




/// both Set and Map do not allow duplicate value  so you can use them for remove duplicate value 

// const arrayDup = [1,2,3,4,4,5,6,4,3,1,2]
// const uniqueArray = [...new Set (arrayDup)];

// console.table(uniqueArray)



//  Use the padStart() and padEnd() Methods to Pad a string with a Character //

// const originalstr = "hello";

// const padedstr = originalstr.padStart(6 , "*");
// console.log(padedstr);

// const oristr2 = "world";
// const padedEnd = oristr2.padEnd(100 ,"200")
// console.log(padedEnd.length);



// NaN checking a safer alternative //

// const notANumber = 5 ;
// console.log(Number.isNaN(notANumber));

// regex revival mastering patterns // 

// const tx = "Hello , world!";
// const pattern = /Hello/g;
// console.log(tx.match(pattern));


// using string replace function to replace all the values //

// var string = "login login";

// console.log(string.replace("in" , "out"));


// 4 . convert to floating number without killing performance 


// ~~ (math.random * 100)




//5  merging arrays without causing sever load //


// traditional way  //

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

// console.log(arr1.concat(arr2));

// best way 

// console.log(arr1.push.apply(arr1, arr2));
// console.table(arr1)


// cache the variable // 

// var cached = document.getElementById("btn");
// cached.addClass("cached-element");


// console.log(Boolean(null))


// get a random item from an array 

// var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];

// var randomItem = items[Math.floor(Math.random() * items.length)];

// console.log(randomItem);



// get a random number  in a specific range //

// var x = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(x)


//shuffle an array of numbers //

// var numbers = [5 , 458 , 120 , -225, 223, 500 , 23323, -744]

//  numbers.sort(function() {
//      return Math.random() - 0.5;
//  })
//  console.log(numbers)

// remove negative number in array

//  let removeNeg = numbers.filter(function (x) {
//      return x > -1
//  })

//  console.table(removeNeg)



// Get the max or the min in an array of numbers /

// var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];

// let maxInNumber =  Math.max.apply(Math, numbers);
// let minInNumbers = Math.min.apply(Math , numbers);

// console.log(maxInNumber , minInNumbers);

// empty an array //

// console.log(numbers.length = 0);




// use logical AND/OR for condition //

// foo == 10 && doSomething();
// foo == 5 || doSomething();


// let xr = 8 ;
// let yr = 98;

// console.log(xr < 10 && yr > 10 )


// const a = 3;
// const b = 2;

// console.log(a > 0 && b > 0);
// console.log(a > 44 || b > 1);

// Rounding the number to N decimal place // 

// var numu = 2.3435424234 ;

// numu = numu.toFixed(4);

// console.log(numu);


// set time out or interval // 

// setInterval(function () {
//      console.log("hello World")
// }, 3000)



// iterating over an array // 

// const letters = [1,2,3,4,5];

// for (const x of letters) {
//      console.log(x * x)
// }


/// অবজেক্ট  OBJECT //

// let person = {
//      firstName : "Sagor Mohammed" ,
//      lastName : "Yusuf",
//      age : 23 ,
//      eyeColor : "blue",
//      job : "Front End Web Dev"
// }

// destructured  obj  //

// const {firstName , lastName , age  , eyeColor , job} = person ;

// console.log(`${firstName} ${lastName} is ${age} years old 
// . He is a ${job} তার চোখের রং ${eyeColor}`);


// for (let x in person) {
//      console.log(txt += person[x])
// }


// person.name = function () {
//      console.log(this.firstName + " " + this.lastName)
// }

// person.name()


// console.log(person)


// for (let x in person ) {
//      console.log(person[x])
// }

// console.log(JSON.stringify(person))


// object constructors //

// function Man (first ,last , age ,eye) {
//      this.firstName = first;
//      this.Lastname = last;
//      this.age = age; 
//      this.eyeColor = eye;
// }

// const writer = new Man ("Syed" , "Mustoba Ali" , 55 , "blue");
// writer.nationality = "British Indian , Pakistani , Indian , Bangladeshi"
// console.log(writer)



// tips and tricks // 

// convert any value to boolean  with double not (!) sign //

// console.log(!! "Yusuf"); // true 
// console.log(!!1) // true 
// console.log(!!undefined) // false // 

// resizing any array with length //
// var animal = ["Tiger" , "Lion" , "Dog" , "Cat" , "Rat" , "Hippo" , "Elephant"];

// animal.length = 4;

// console.log(animal);


// array flat // 

// let unflatArray = [ 1,[2[3,4]],7,8,9];

// console.log(unflatArray.flat(Infinity)) // not working properly //


/// replace all occurrences of a sting  //

// const quote = "React is js framework , is this framework most popular now "

// console.log(quote.replaceAll("framework" , "library"))


// count run time // 

// const startTime = performance.now()

// for(let i = 0; i <=50000; i++) {
//      console.log(i % 2 === 0 )
// }

// const endTime = performance.now()

// console.log(`loop took ${startTime - endTime} to finish`)


// simple way to array value swap //

// let array = [1,2,3,4,5];

// [array[0], array[4]] = [array[4], array[0]];

// console.log(array)


// how to copy to clip board //

// function copyToClipBoard () {
//      const element = document.createElement("text");
//      element.value = str;
//      element.select();
//      document.execCommand("copy");
//      document.body.removeChild(element)
// }

// function handleClick () {
//      let text = document.querySelector("#text");
//      copyToClipBoard(text.innerText);
// }



// destructuring aliases //

// const lang = {
//      name: "JavaScript",
//      founded:1995,
//      founder: "Brendan Eich"
// }

// const {name , founder} = lang ;
// aliases way //

// const {name : programLang , founder :  founderName} = lang;

// console.log(programLang , founderName)




// memoization - a powerful technique for js 

// function  add (x) {
//      return 10 + x ;
// }

// const memo = (func) => {
//      let cache = {};
//      return function (x) {

//           if (cache[x]) {
//                console.log("result from cache")
//           } else {
//                console.log("calculating result")
//                const result = func (x);
//                cache[x] = result;
//                return result;
//           }

//      }
// }


// const calculate = memo(add);

// console.log(calculate(10));
// console.log(calculate(10));





/// tricky interview question in js  // 
// delay 
//-- closure, async , await and scope //

function delay (i) {
     return new Promise ((resolve) => {
          setTimeout (()=> {
               resolve(i);
          }, i * 1000)
     })
}

async function timer(n) {
     console.log("start timer");

     for (let i = 0; i <= n; i ++ ) {
          const result = await delay(i);
          console.log(result);
     }

     consol.log("end timer")
}

timer (6)