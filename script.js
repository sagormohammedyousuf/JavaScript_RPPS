// for (var i = 0; i < 10 ; i++) {
//     if (i % 2 === 0){
//         console.log(i + "is Even")
//     }
// }


// let a = [10,5,35,100]

// for (var i = 0; i <a.length; i++) {
//     if (a[i] % 2 === 0){
//         console.log(i + "even")
//     }
// }

// a.filter(function ())






// // 


//  totalDay = 31 ;

//  

// totalDay / onebagDuration 


// onebagDuration = 7;

// function countBag (day) {
    
//     return day /  onebagDuration  ;
// }

// let getbag = countBag(30);

// let decimal = getbag - Math.;

// console.log(decimal.toFixed(3));


// let buyprice = 200;
// let foodbill = [30,15,40]




// let totalFoodBill = foodbill.reduce( (acc , curr) => acc + curr );

// let totalTkOfCow = totalFoodBill + buyprice;


// let profit = profitOrLoss(300,totalTkOfCow)

// console.log(profit)



function profitOrLoss (buy , foodbill3 , stayDay , sell) {
    return   ( sell) - ( buy + ( (foodbill3 / 3) * stayDay)) ; 
}

// const buyingPrice = prompt("inter you buying price");
// const foodbillOf3day = prompt("inter your foodbill of 3day");
// const stayD = prompt ("how many day stay your cow");
// const sellPrice = prompt("sellprice")


let foodbill = [10 , 12, 8]
let fb3day = foodbill.reduce((e, c) => e + c);




let pOrL = Math.round(profitOrLoss(200,fb3day,5,100));

if (pOrL > 0) {
    console.log(pOrL + " profit");
}else if (pOrL === 0) {
    console.log(" no los no profit");
}else {
    console.log(Math.abs(pOrL) + " loss");
}


// let b = [10,5,35,100]

// let result = b.filter((num) => num % 2 === 0 )

// console.log (result.toString())

// let forE = b.forEach((e) => console.log(e) )


