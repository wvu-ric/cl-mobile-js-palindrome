var testWord = prompt("Enter word here");

function isPalindrome(word){
	// Returns true if palindrome
	var noSpaces = word.replace(/\s/g, '');
	var cased = noSpaces.toLowerCase();
	var arr = cased.split("")
	var reverse = arr.reverse();
	var rev_word = reverse.join ("");
	return (word == rev_word)

}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert(testWord + " is not a palindrome");
}
