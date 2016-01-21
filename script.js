var testWord = prompt("Enter a word");

function reverseword(word) {
	return word.split("").reverse().join("");
}

function isPalindrome(word){
	// Returns true if palindrome
	thebird =  testWord.toString().replace(/\s+/g , '').toLowerCase();
	theword = reverseword(thebird);
	if (thebird == theword) {
		return true;
	}
	// Returns false otherwise
	else { return false;}
}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME. The bird is in fact the word.");
}else{
	alert(testWord + " is not a palindrome. The bird is less than but not equal to the word.");
}
