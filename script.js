function isPalindrome(word){
	
	if (word.reverse() == word){
		console.log(word + " is a palindrome");
	}
}

testword = ["racecar"]
isPalindrome(testword);
