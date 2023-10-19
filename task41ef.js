// e. Return all the palindromes in an array
//Anonymous
var palindrome = function(arr,N){
	var ans = [];
	for (let i = 0; i < N; i++) {
		if (isPalindrome(arr[i])) {
			ans.push(arr[i]);
		}
	}
	console.log(ans);
}
var isPalindrome = function (s){
	let a = s;
	s = s.split('').reverse().join('');
	return s == a;
}
var arr = [ "saippuakivikauppias", "car", "ada", "racecar", "malayalam","english" ];
var N = arr.length;
var s = palindrome(arr, N);


//IIFE
var palindrome = (function (arr1,t){
	var ans = [];
	for (let i = 0; i < t; i++) {
		if (isPalindrome(arr1[i])) {
			ans.push(arr1[i]);
		}
	}
	console.log(ans);
})
var isPalindrome= (function (s){
	let a = s;
	s = s.split('').reverse().join('');
	return s == a;
})
var arr1= [ "saippuakivikauppias", "car", "ada", "racecar", "malayalam","sas" ];
var t = arr1.length;
var s = palindrome(arr1, t);









//  f.return median of two sorted array of same size
//Anonymus

var medianOfSortedArray = function(nums1, nums2){
    let compare=(i,j) => {
        return i-j;   
    }
    let arr=nums1.concat(nums2).sort(compare);
    if(arr.length % 2 == 0){
        var medidanEven = (arr[arr.length/2 - 1]+ arr[arr.length/2])/2;
        console.log(medidanEven);
    }else{
    var medianOdd = arr[Math.floor(arr.length/2)];
    console.log(medianOdd);
    }      
}
medianOfSortedArray([1,2,3,4], [6,7,8,9]);

//IIFE

(function(arrs1, arrs2){
    let compare=(i,j) => {
        return i-j;   
    }
    let arr=arrs1.concat(arrs2).sort(compare);
    if(arr.length % 2 == 0){
        var medidanEven = (arr[arr.length/2 - 1]+ arr[arr.length/2])/2;
        console.log(medidanEven);
    }else{
    var medianOdd = arr[Math.floor(arr.length/2)];
    console.log(medianOdd);
    }      
})
([1,2,3,4,5], [6,7,8,9,10]);

