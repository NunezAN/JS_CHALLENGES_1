//Q1

// function addition(num1, num2) {
//     return num1 + num2;
// }
// console.log(`addition(3,2) -> ${addition(3,2)}`);
// console.log(`addition(-3,-6) -> ${addition(-3,-6)}`);
// console.log(`addition(7,3) -> ${addition(7,3)}`);

//-------------------------------------------------------------------------------------------
//Q2

// function convertHourToSeconds(hours){
//     return hours*3600;
// }

// console.log(convertHourToSeconds(24));

//-------------------------------------------------------------------------------------------
//Q3

// function calculatePerimeter(length, width){
//     return (length *2) + (width * 2)
// }

// console.log(calculatePerimeter(2,9));

//-------------------------------------------------------------------------------------------
//Q4

// function calculateAreaTriangle(base,height){
//     return .5*base*height;
// }

// console.log(calculateAreaTriangle(20,20));

//-------------------------------------------------------------------------------------------
//Q5

// function appendFrontend(word){
//     return word+="Frontend";
// }

// console.log(appendFrontend("Orange"));

//-------------------------------------------------------------------------------------------
//Q6

// function sumGreaterThan100(num1, num2){
//     let sum = num1+num2;
//     return (sum>100);
// }

// console.log(sumGreaterThan100(50,51))

//-------------------------------------------------------------------------------------------
//Q7

// function lessThanOrEqualToZero(num){
//     return num <=0;
// }
// console.log(lessThanOrEqualToZero(0));

//-------------------------------------------------------------------------------------------
//Q8

// function oppositeBolean(bool){
//     return !bool;
// }

// console.log(oppositeBolean(false));

//-------------------------------------------------------------------------------------------
//Q9

// function isNotZero(num){
//     return !(num === 0);
// }

// console.log(isNotZero(0));

//-------------------------------------------------------------------------------------------
//Q10

// function calcRemainder(num1,num2){
//     return num1%num2;
// }
// console.log(calcRemainder(9,8));

//-------------------------------------------------------------------------------------------
//Q11

// function isOdd(num){
//     return (num%2)>0;
// }

// console.log(isOdd(3));

//-------------------------------------------------------------------------------------------
//Q12

// function booleanInteger(num){
//     return num%2===0 ? 1 : -1;
// }

// console.log(booleanInteger(5));

//-------------------------------------------------------------------------------------------
//Q13

// function isLoggedInAndSubscribed(string1,string2){
//     return (string1 === "LOGGED_IN" && string2 === "SUBSCRIBED")
// }
// console.log(isLoggedInAndSubscribed("LOGGED_IN","SUBSCRIBED"));


//-------------------------------------------------------------------------------------------
//Q14

// function isLoggedInAndSubscribed(string1,string2){
//     return (string1 === "LOGGED_IN" || string2 === "SUBSCRIBED")
// }
// console.log(isLoggedInAndSubscribed("LOGGED_OUT","UNSUBSCRIBED"));

//-------------------------------------------------------------------------------------------
//Medium Q1

// function filterOutFalsy(obj1, obj2)
// {
//     return obj1 == false ? obj1 : obj2;
// }
// console.log(filterOutFalsy(true,"dog"))

//-------------------------------------------------------------------------------------------
//Medium Q2

// function arrLength(arr){
//     return arr.length;
// }

// console.log(arrLength([5,0,-4,1]));

//-------------------------------------------------------------------------------------------
//Medium Q3

// function lastElem(arr){
//     return arr[arr.length - 1];
// }

// console.log(lastElem([null,5,false]));

//-------------------------------------------------------------------------------------------
//Medium Q4

function arrSum(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(arrSum([100,200,500]));