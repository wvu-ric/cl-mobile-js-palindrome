// Josh Matheny "Palindrome" Assignment

function isPalindrome(testword1){
	// Returns yes if palindrome
	// Returns no otherwise

//var testWord = prompt("Enter a word");
// I did this outside of the function so I didn't have to deal with out puttiing two local variables
var testword1;
// Variable created to store the test word after it is reversed
var reverse =[];
// Varible created to store the test word with spaces removed
var nospace =[];
// Varible used to to store the length of the test word
var slength = testword1.length;
// Variable created to store the answer to the question if the phrase is a palindrome or not
var answer;

// Loop created to remove all spaces from the test word
for (i=0; i<=slength; i++) {
	place1 = i;
	letter1 = testword1.slice(place1,place1+1)

	if (" " != letter1){
		nospace = nospace + letter1;
	}
}
nospace = nospace.toLowerCase();

// Loop created to reverse the test word or phrase and remove any space from it
for (i=0; i<=slength; i++) {

	place2 = slength-i;
	letter2 = testword1.slice(place2-1,place2);

	if (" " != letter2){
		reverse = reverse + letter2;
	}
}
reverse = reverse.toLowerCase();

//If statement that compares the lower case version of the phrase and the reversed lower case version of the test phrase to see if it is a palindrome
if (reverse == nospace){
	 answer = "yes";
} else {
	answer = "no";
}
// Made the answer a global variable
 return answer
}

// Prompt and if statement that calls that defines the phrase and calls the function to put the plan into action
var testword1 = prompt ("What phrase would you like to check?");

if(isPalindrome(testword1) == "yes"){
	alert("OH COOL A PALINDROME");
}else{
	alert(testword1 + " is not a palindrome");
}
