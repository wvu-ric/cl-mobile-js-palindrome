var testWord = prompt("Enter a word");

function isPalindrome(word){
	lettersOnly = word.toLowerCase().replace(/[\W]+/g , '');
	if(reverse(lettersOnly) == lettersOnly) return true;
	else return false;
}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert(testWord + "is not a palindrome");
}


function reverse(word) {
	return word.split("").reverse().join("");
}
