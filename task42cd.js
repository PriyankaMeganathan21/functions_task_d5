// c. Sum of all numbers in an array in arrow function
var sum = (arr) => {
    var total=0;
    for ( let i=0; i<arr.length; i++){
        total=total+arr[i];
    }
    console.log(total)
}
sum([1,2,3,4,5,6,7,8,9,10]);

//d. Return all the prime numbers in an array in arrow function

var checkPrime = (num)=>{
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