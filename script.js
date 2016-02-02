var testWord = prompt("Enter a word");

function reverse(s){
	return s.split("").reverse().join("");
}

function isPalindrome(word){

	// Returns true if palindrome
	if(reverse(word) == word){
		return true;
	}else{
		// Returns false otherwise
		return false;
	}


if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert(testWord + " is not a palindrome");
}
