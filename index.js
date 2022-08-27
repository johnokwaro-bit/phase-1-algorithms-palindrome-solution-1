function reverseString(word){
  // create an array from the input string
  const wordArray = word.split("");
   // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("")
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here

   // reverse the input string
  let wordInReverse = reverseString(word)
  // compare the reversed string to the input
  return word === wordInReverse;


}

/* 
  Add your pseudocode here
*/
//write a funcetion to reverse the string
//compare the reversed string to the input string

/*
  Add written explanation of your solution here
*/
//reverse the input string
//if the reversed string is the same as the input string
//return true
//else
//return false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
