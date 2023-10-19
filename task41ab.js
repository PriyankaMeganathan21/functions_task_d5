// a. Print odd numbers in an array
// anonymus function 

var array = [1,2,3,4,5,6,7];
var odd = function(array){
var result = array.filter(element=>element%2!=0)
    console.log(result)
}
odd(array);

// IIFE function
(function (){
    var result = array.filter(element=>element%2!=0)
    console.log(result)   
})();

// b. Convert all the strings to title caps in a string array
// Anonymus function

var output = function (input){
    input = input.toLowerCase().split(" ");
    for (var i=0; i<input.length; i++){
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
        var titlecased = (input.join(" "));
    }
    console.log(titlecased);
}
output("memories bring back");

// IIFE
var str = "human beings";
(function (){
    str = str.toLowerCase().split(" ");
    for (var i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        var titlecap = (str.join(" "));
    }
    console.log(titlecap);
})();

