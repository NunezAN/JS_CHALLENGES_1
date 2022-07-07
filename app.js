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

// function arrSum(arr){
//     let sum=0;
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(arrSum([100,200,500]));

//-------------------------------------------------------------------------------------------
//Medium Q5

// function progressiveSum(num){
//     let sum=0;
//     for(i=0;i<=num;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }
// console.log(progressiveSum(600));

//-------------------------------------------------------------------------------------------
//Medium Q6

// function calcTime(sec){
//     let seconds = sec % 60;
//     let minute = (sec - seconds)/60;
//     let mmss ="";
    
//     minute > 9 ? mmss+=`${minute}`: mmss+=`0${minute}`;
//     seconds > 9 ? mmss+=`:${seconds}`: mmss+=`:0${seconds}`;
//     return mmss;
// }

// console.log(calcTime(6));

//-------------------------------------------------------------------------------------------
//Medium Q7

// function getMax(arr){
//     let max = arr[0];
//     for(i=1;i<arr.length;i++){
//         if(arr[i] > max){
//             max= arr[i];
//         }
//     }
//     return max;
// }
// console.log(getMax([12,10,-20]));

//-------------------------------------------------------------------------------------------
//Medium Q8

// function reverseString(word){
//     let reverseString = "";
//     for(i=word.length-1; i>=0; i--){
//         reverseString+=word[i];
//     }
//     return reverseString;
// }

// console.log(reverseString("This is cool"));

//-------------------------------------------------------------------------------------------
//Medium Q9

// function convertToZeros(arr){
//     return arr.map((element) => 0)
// }

// console.log(convertToZeros([1,2,3,4,5]));

//-------------------------------------------------------------------------------------------
//Medium Q10

//for loop solution
// function removeApples(arr){
//     let newArr = [];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]!=="Apple")
//         {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }


//solution using arr.filter
// function removeApples(arr){
//     return arr.filter(element => element !=="Apple");
// }
// console.log(removeApples(["Banana","Orange","Apple"]));

//-------------------------------------------------------------------------------------------
//Medium Q11

// function filterOutFalsy(arr){
//     return arr.filter(element => !!element === true);
// }

// function filterOutFalsy(arr){
//     let newArr=[];
//     for(i=0;i<arr.length;i++){
//         if(!!arr[i]=== true){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(filterOutFalsy(["",[],0,null,undefined,"0"]));
// console.log(filterOutFalsy(["tomato","Orange","Banana",false]));
// console.log(filterOutFalsy(["Banana", "Orange", "Apple"]));

//-------------------------------------------------------------------------------------------
//Medium Q12

// function convertToBoolean(arr){
//     return arr.map(elem => {
//         return !!elem;
//     });
// }
// console.log(convertToBoolean([500,0,"David","",[]]));

//-------------------------------------------------------------------------------------------
//Advanced Q1

// function showRating(num){
//     let starString="";
//     let wholeRating = Math.floor(num);
//     for(i=0;i<wholeRating;i++){
//         starString+="*";
//         if(i!=wholeRating-1){
//             starString +=" ";
//         }
//     }
//     if(num%1 > 0){
//         starString +=" .";
//     }
//     return starString;
// }

// console.log(showRating(1));

//-------------------------------------------------------------------------------------------
//Advanced Q2

// function sortLowToHigh(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j])
//             {
//                 console.log(`i=${arr[i]}`);
//                 console.log(`j=${arr[j]}`);
//                 let temp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     return arr;
// }
// function sortLowToHigh(arr){
//     return arr.sort((a,b)=> a-b);
// }

// console.log(sortLowToHigh([5,10,0,-5]));
// console.log(sortLowToHigh([10,10,20,30,40,50]));
// console.log(sortLowToHigh([3,2,1,0]));
// console.log(sortLowToHigh([1,5,0,10,10000]));

//-------------------------------------------------------------------------------------------
//Advanced Q3

// function sortHighToLow(object)
// {
//     return object.sort((a,b) => b.price - a.price);
// }

// console.log(sortHighToLow([
//     {id:1, price: 50},
//     {id: 2, price: 30},
//     {id: 3, price: 60},
//     {id: 4, price: 10}
// ]));

//-------------------------------------------------------------------------------------------
//Advanced Q5

async function postsByUser(userID){
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json();
    
    const posts = result.filter(element => element.userId === userID); 
    
    return posts;
}

console.log(postsByUser(6));

