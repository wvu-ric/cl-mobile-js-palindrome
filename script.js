var testWord = prompt("Enter a word");

function reverse(s){
    return s.split("").reverse().join("");
}

function isPalindrome(word){

	if(reverse(word)==word) {
		return true;
	} else {
		return false;
	}
	// Returns true if palindrome
	// Returns false otherwise
}



if(isPalindrome (testWord)){
	 alert("OH COOL A PALINDROME");
}else{
	alert(testWord + " is not a palindrome");
}
