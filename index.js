function isPalindrome(word) {

  let revarr = word.split("");
  
  let revword = revarr.reverse();

  let joinword = revword.join('');

  if (word === joinword) {

    return true

  } else {

    return false

  }

}



/* 
//   Add your pseudocode here
// take word and compare it to the reverse of the same word 

// compare the entered string to the reverse of the entered string

// return true if strings match 
// return false is strings do not match

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
