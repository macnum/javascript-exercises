const palindromes = function (word) {
	const pattern = /\w/gi;
	const arr = word
		.toLowerCase()
		.split('')
		.filter((char) => char.match(pattern));
	const palindrome = arr.join('');
	const reversePalindrome = arr.reverse().join('');
	return palindrome == reversePalindrome;
};
// Do not edit below this line
module.exports = palindromes;
