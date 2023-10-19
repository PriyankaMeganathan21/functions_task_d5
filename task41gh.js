// g. Remove duplicates from an array
//Anonymus function

var arr = ["apple","mango","orange","apple","pomegranate","orange","apple"];
var result = function(arr){
    console.log([...new Set(arr)]);    //create collections of unique values.
}
result(arr);

//IIFE

(function(days){
console.log([...new Set(days)]);
})
(["Monday","Tuesday","Wednesday","Monday","Thursday","Tuesday"]);

// h. Rotate an array by k times
//Anonymus function
var arr = [5,8,9,1,4,3];
var k=2; 
var rotateArray = function(arr,k){
   let tmp = 0;
    for (let i=0; i<k; i++){
       tmp = arr.pop();
       arr.unshift(tmp);
    }
    return arr; 
}
rotateArray(arr,k);
console.log(arr);

//IIFE
var arr = [5,8,9,1,4,3];
var k=4; 
var rotateArray = (function(arr,k){
   let tmp = 0;
    for (let i=0; i<k; i++){
       tmp = arr.pop();
       arr.unshift(tmp);
    }
    return arr; 
}) (arr,k);
console.log(arr);