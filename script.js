var testWord = prompt("Enter a word");

// this makes adjustments for capital letters
var lowerCaseTestWord = testWord.toLowerCase();

// this removes any punctuation
var noPunctuation = lowerCaseTestWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");

// this removes the spaces or word dividers
var removedSpace = noPunctuation.split(" ").join("");

// this reverses the word
var reversedTestWord = removedSpace.split('').reverse().join('');


function isPalindrome(word){
	if(removedSpace == reversedTestWord) {
// Returns true if palindrome
	 return true
 	} else {
// Returns false otherwise
		return false
	}
}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert(testWord + "is not a palindrome");
}
