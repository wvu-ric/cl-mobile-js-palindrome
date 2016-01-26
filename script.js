var testWord = prompt("Enter a word");

function isPalindrome(word){
    word.split(' ').join('');
    word = word.toLowerCase();
	rev_word = word.split('').reverse().join('');
	return (word == rev_word)
}

if(isPalindrome(testWord)){
	alert("OH COOL A PALINDROME");
}else{
	alert("'"+testWord+"' is not a palindrome");
}