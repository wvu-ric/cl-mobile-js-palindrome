var testWord = prompt("Enter a word");

function reverse(s) {
  return s.split('').reverse().join('');
}

function isPalindrome(word){
	// Returns true if palindrome
	// Returns false otherwise
	var noSpaceNew  = testWord.replace(/\s/g, '');
	var lowerCaseNew = noSpaceNew.toLowerCase();
	var reverseWord = reverse(lowerCaseNew);

	var testWordNew = testWord.replace(/\s/g, '');
	var lowerCaseTest = testWordNew.toLowerCase();

	if(lowerCaseTest == reverseWord){
		return true;
	}
	else{
		return false;
	}
}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert(testWord + " is not a palindrome");
}
