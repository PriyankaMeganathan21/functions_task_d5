// e. Return all the palindromes in an array using arrow function
var palindrome = (arr,N)=>{
	var ans = [];
	for (let i = 0; i < N; i++) {
		if (isPalindrome(arr[i])) {
			ans.push(arr[i]);
		}
	}
	console.log(ans);
}
var isPalindrome = (s) =>{
	let a = s;
	s = s.split('').reverse().join('');
	return s == a;
}
let arr = [ "saippuakivikauppias", "car", "ada", "racecar", "malayalam","english" ];
let N = arr.length;
let s = palindrome(arr, N);