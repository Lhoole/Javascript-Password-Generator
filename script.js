// Assignment Code
var generateBtn = document.querySelector("#generate");
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
var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var num = document.getElementById("num");
var spesh = document.getElementById("spesh");
var randomLower = Math.floor(Math.random() * lowerletters.length);
    console.log(lowerletters[randomLower]);
var randomUpper = Math.floor(Math.random() * uppercase.length);
    console.log(uppercase[randomUpper]);
var randomNum = Math.floor(Math.random() * numbers.length);
    console.log(numbers[randomNum]);
var randomSpesh = Math.floor(Math.random() * specialCharacters.length);
    console.log(specialCharacters[randomSpesh]);


var lowerupper = lowerletters.concat(uppercase);
var lowernum = lowerletters.concat(numbers);
var lowerspesh = lowerletters.concat(specialCharacters)
var uppernum = uppercase.concat(numbers)
var upperspesh = uppercase.concat(specialCharacters)
var numspesh = numbers.concat(specialCharacters)
var loweruppernum = lowerupper.concat(numbers)
var uppernumspesh = uppernum.concat(specialCharacters)
var lowernumspesh = lowernum.concat(specialCharacters)
var lowerupperspesh =lowerupper.concat(specialCharacters)
var allVar = lowerspesh.concat(uppernum)
//  function generatePassword(){
//   if 
//  }
var isChecked=document.getElementById("lower").checked;
console.log(isChecked);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
if (isChecked == true);
console.log(isChecked);
}
console.log(specialCharacters)