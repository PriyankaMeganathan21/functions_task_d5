// a. Print the odd numbers in an array using arrow function
var odd = (array) => {
    var result = array.filter(element=>element%2!=0)
        console.log(result)
    }
    odd([65,2,31,45,51,6,7]);
    
    //b. Convert all the strings to title case in a string array
    var output = (input) => {
        input = input.toLowerCase().split(" ");
        for (var i=0; i<input.length; i++){
            input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
            var titlecased = (input.join(" "));
        }
        console.log(titlecased);
    }
    output("thick and thin");
