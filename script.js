// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = null
var isLower = false
var isUpper = false
var lowerletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
 'Y', 'Z'];
 var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
 var specialCharacters = ['"', "\'", "\&", "\\","!", "#", "$", 
 "%", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<",
  "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~", "\[", "\]"];
 
 var criteria = []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  console.log("generating password")
  criteria = []
  do {passwordLength = window.prompt("Length of password: A number between 8 and 128")
} while (passwordLength<8 || passwordLength>128 || isNaN(passwordLength));
  isLower = confirm("Would you like lowercase in your password")
  
  isUpper = confirm("Would you like uppercase in your password")
  
  isNum = confirm("Would you like numbers in your password")
  
  isSpesh = confirm("Would you like special characters in your password")


  if (isLower) {
    criteria.push(...lowerletters)
  }
  if (isUpper) {
    criteria.push(...uppercase)
  }
  if (isNum) {
    criteria.push(...numbers)
  }
  if (isSpesh) {
    criteria.push(...specialCharacters)
  }

  console.log(criteria)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
