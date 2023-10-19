// c. Sum of all numbers in a an array
// Anonymus
var array = [1,2,3,4,5];
var add = function(array){
    var result = array.reduce((acc,cv)=>acc+cv)
    console.log(result)
}
add(array);
//IIFE

(function(arr){
    var total=0;
    for ( let i=0; i<arr.length; i++){
        total=total+arr[i]
    }
    console.log(total)
})
([1,2,3,4,5,6,7,8,9,10]);

// d. Return all the prime numbers in an array
// Anonymus

var checkPrime = function (num){
    if (num <= 1){
       return false;
    } else{
       for (let i=2; i<num/2; i++){
          if (num % i == 0){
             return false;
          }
       }
       return true;
    }
 }
 let arr = [3, 12, 55, 27, 13, 19]
 let primeNos = [];
 arr.forEach(function(element){
    const isPrime = checkPrime(element);
    if (isPrime){
       primeNos.push(element);
    }
 });
 console.log(primeNos);


//IIFE

var pNos = (function (nos){
    if (nos <= 1){
       return false;
    } else{
       for (let i=2; i<nos/2; i++){
          if (nos % i == 0){
             return false;
          }
       }
       return true;
    }
 })
 let arrs = [93, 29, 55, 27, 71, 109];
 let primeNum = [];
 arrs.forEach(function(element){
    const isPrime = pNos(element);
    if (isPrime){
       primeNum.push(element);
    }
 });
 console.log(primeNum);