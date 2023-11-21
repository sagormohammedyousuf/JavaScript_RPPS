/*
 //1 Print all even numbers from 0 – 10

for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
}

 //2 Print a table containing multiplication tables


for (let i = 1; i < 11; i++) {
    let row = "7 * " + i + " = " + 7 * i;
    console.log(row)
}




//3 kilo mitre to miles //
const kilometers = prompt("enter km :")

const fact = 0.621371;

const miles = kilometers * fact;

console.log(`${kilometers} km is equal ${miles} miles`)



//4 Calculate the sum of numbers within an array

const myNums = [1, 2, 3, 4, 5, 6];

let sum = 0;

myNums.forEach(num => {
    sum += num;
});

console.log(sum)

//5 another way to calculate

let anotherWay = myNums.reduce(function (num, item) {
    return num += item
})

console.log(anotherWay)



//6 reverse the array //


var newAarry = [1, 2, 3, 4, 5, 6, 7, 8]

var rev = newAarry.reverse()

console.log(rev.toString())

//7 sort an array lowest to highest //

var sortedAry = [98, 3, 5, 2, 7]
var sorted = sortedAry.sort()
console.log(sorted.toString())


var number = [1, 2, -3, 4, -5];

let negNumber = number.filter(function (x) {
    return x > -1
})

console.log(negNumber.toString())


//8 Remove the spaces found in a string

var str = "    hello   ";
var trim = str.trim();
console.log(trim)


//9 Return a Boolean if a number is divisible by 10

const booleanNum = (num) => {
    return num % 10 === 0 ? true : false;
}

console.log(booleanNum(20))


//10 find out how many Vowels are in the string //

function getCount(str) {
    vowelsCount = 0;
    var Vowels = ["a", "e", "i", "o", "u"]

    for (let char of str) {
        if (Vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

let line = "abal lorem Ips stre"

console.log(getCount(line))




// 11. return sum of two numbers //

function math (a , b) {
    return a * b
}

console.log(math(4,6))


// 12. convert Minutes into seconds //

function convertMin (minute) {
    return minute * 60 ;
}

let second = convertMin(2);

console.log(second +" " + "sec");

// 13. return the next number from the integer passed //
function nextNumber (num) {
    return num + 1
}

let returnValue = nextNumber(2);

console.log(returnValue)


// 14. area of  a triangle //

function area (a,b , c) {
    var tri = (a + b + c) /2
    return Math.sqrt(tri * ((tri -a) + (tri -b) + (tri - c)));
}

let areaOfTriangle = area(5,6,7);

console.log(areaOfTriangle + " is triangle area")


// 15. convert age to Days //

function convertAge (age) {
    return  age * 365 
}

let returnDays = convertAge(23)

console.log(returnDays + " is my age")


// 16. Buggy code //

// int cube (int a) {
//     return  a * a * a;
// }


// 17. Return the First Element in an Array //

function  getItem (arr) {
return arr[0];
}

let getFirstElement = getItem([1,2,3,4,5]);

console.log(getFirstElement);

// 18. power calculation //

function powerCalculate (a , b) {
    return a * b;
}

let circutPower = powerCalculate(230 , 10);
console.log(circutPower);


// 19. convert to hour into seconds //

function convertHour (hour) {
    return (hour * 60 ) * 60;
}

let seconds = convertHour(10)
console.log(seconds + "  second");

// 20 maximum edge of a triangle //

function max (a, b) {
    return (a + b) - 1;
}

let thirdEdge = max(8, 10) 
console.log(thirdEdge);



//21. retun the remainder from two numbers // 


function findRemainder (a,b) {
    return (a % b ) ;
}

let getRemainder = findRemainder (5,8);
console.log(getRemainder);


// 22. find the perimeter of rectangle //

function findPerimeter (length , width) {
    return  (length + width) * 2;
}

let getPerimeter = findPerimeter (10 ,20);
console.log(getPerimeter);


//23. sum of polygon angels //

function  sumAngle(n) { 
    return (n - 2) * 180 ;
 }

 let getPolygonAngleSum = sumAngle(3);
 console.log(getPolygonAngleSum);

 //24 BasketBall Point //

 function getBasketBallPoint (a ,b) {
    return (a * 2) + (b * 3) ;
 }

let points = getBasketBallPoint(7,5);

console.log(points);


// 25. less then 100 //

function lessThen100 (a ,b ) {
    return (a + b) < 100 ;
}

let checkNumber = lessThen100(83,34);
console.log(checkNumber);


//26 the farm problem -  count animal leg// 

function countLeg (chickens , cows , pigs) {
    return (chickens * 2) + (cows * 4) + (pigs * 4) ;
}

let totalLeg = countLeg (2,3,5);
console.log(totalLeg);



// 27. using the logical && operator //

function andOperator (a, b) {
    return (a && b);
}

let resultAnd = andOperator (true , true);
console.log(resultAnd);

// 28. crate a function the return "something" //

function someThing (txt) {
    return "something " + txt; 
}

let someThingResult = someThing("Bob Jane");
console.log(someThingResult);


// 29. check are the numbers equal to each other //

function equalCheck(a, b){
    return a === b ;
}

let findEqual = equalCheck(3, "3");
console.log(findEqual)


// 30. football points //

function getPoints (wins , draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
}

let footBallpoints = getPoints(3,4,2);
console.log(footBallpoints);


//31/ two makes 10  // 

function makesTen(a, b) {
	return (a + b === 10) || (a || b === 10);
}

let isTen = makesTen(1,9)
console.log(isTen);

//32. Multiple of 100 //

function multipleOf100 (a) {
    return a % 100 === 0;
}

let devisible = multipleOf100(1);
console.log(devisible);

// 33. add up numbers from a single number //

function addUpp (number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
 return sum;
}
 
let add = addUpp(600);

console.log(add);


// 34. sorting array in object //
function sortArray (drinks) {
    drinks.sort((a,b) => a.price - b.price);
    return drinks;
}


drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

  let sortedDrinks = sortArray(drinks);

  console.log(sortedDrinks);


  // 35. number of squeres in N * N grid //

  function sqr (n) {
    if (n === 0) {
        return 0;
    }else {
        return n * n + sqr (n - 1);
    }
    
  }

  console.log(sqr(5));

  // 36 . hexadecimal number to binary number //

  function hexToBinary (n) {
    return (parseInt (n, 16).toString(2)).padStart(8, '0');

  }

  console.log(hexToBinary("0xff"));

  */

  // 37 .how much true ? // 

//   function countTrue (arr) {
//     countTrueValue = arr.filter((value)=> value === true );
//     return countTrueValue.length;
//   } 

//   let booleanArray = [true, false , false, false , true, false, false];
//   let count = countTrue(booleanArray);
//   console.log(count);


  // 38 a Redundant Function ||  who return a function //
  
//   function countRedundant (str) {
//     return function () {
//         return str
//     };
//   }

// let  getFunc = countRedundant("hello world");

// console.log(getFunc());

// console.log(typeof(getFunc))


// 39. Find Number of digit in number //

// function countDigit (num) { 
//     let str = num.toString();
//     return str.length;
//  }

// let numberOfDigit = countDigit(123456789);

// console.log(numberOfDigit);


// 40 . derivative of function // 

// function derivate (b , m) {
    
//     return dervativeResult = b * Math.pow(m , (b - 1))
//   }

//   let getDer= derivate(3, -2)
//   console.log(getDer);


  


//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


//   function likes(names) {
//     if (names.length === 0){
//       return "no one likes this"
//     }else if (names.length === 1) {
//       return `${names[0]} likes this`
//     }
//    else if (names.length === 2) {
//       return `${names[0]} and ${names[1]} like this`
//     }else if (names.length === 3) {
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }else  {
//       return `${names[0]}, ${names[1]} and ${names.length-2} others  like this`
//     }
//  }
 
//  console.log(likes([]));                                
//  console.log(likes(["Peter"]));                        
//  console.log(likes(["Jacob", "Alex"]));                 
//  console.log(likes(["Max", "John", "Mark"]));           
//  console.log(likes(["Alex", "Jacob", "Mark", "Mad" , "Max"])); 


// 
// Create a function that will return an integer number corresponding to the amount of digits in the given integer num


// function num_of_digits(num) {
// 	return num.toString().length;
// }

// console.log(num_of_digits(1305981031) );

/*
// problem : which generation are you ?

function findGeneration (num , gen) {
    

    if (num === -3 &&  gen === m ) {
        console.log(`great grandfather`);
    }
    else if (num === -3 &&  gen === f) {
        console.log("great grandmother");

    }
    else if (num === -2 &&  gen === m) {
        console.log("grandfather");
    }
    else if (num === -2 &&  gen === f) {
        console.log("grandmother");
    }
    else if (num === -1 &&  gen === m) {
        console.log("father");
    }
    else if (num === -1 &&  gen === m) {
        console.log("mother");
    }
    else if (num === 0 &&  gen === m) {
        console.log("me");
    }
}

let m = "m"
let f = "f"

findGeneration(-2, m );

*/

// another way //

 function  genration(x ,y ) {
    const relattionships = {
        0: {m : "me!", f: "me!"},
        1: {m : "son", f: "daughter"},
        2: {m : "grandson" , f: "granddaughter"},
        3: {m : "great grandson", f: "great granddaughter"},

        '-1': {m : "father" , f : "mother"},
        '-2': {m : "grand  father" , f : "grand mother"},
        '-3': {m : "great grand father" , f : "great grand mother"}
    };

    const genderIndex = (y === "m" ) ? "m" : "f";
    return relattionships[Math.abs(x)][genderIndex]
   }

   console.log(genration(2, "f"))