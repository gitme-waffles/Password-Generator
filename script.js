// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['b', 'c', 'd', 'e', 'a', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Write password to the #password input

// prompt for variables then save variables
// length
// (UPERCASE) (lowercase) (numbers) (symbols)

// function generateRandom()

function generatePassword(passwordLength) {
  console.log('passwordLength', passwordLength)
  for (let i = 0; i < passwordLength; i++) {
    // text += cars[i] + "<br>";
    console.log('index', i)
  } 
  // var symbols = ;
  var resultUPPERCASE = confirm('do you want UPPERCASE?');
  console.log({resultUPPERCASE});
  var resultLowercase = confirm('do you want lowercase?');
  console.log({resultLowercase});
  var resultNumber = confirm('do you want Number?');
  console.log({resultNumber});
  var resultSymbol = confirm('do you want Symbol?');
  console.log({resultSymbol});
  console.log({specialCharacters});
  // console.log('generatePassword');
}

function writePassword() {
  var passwordLength = prompt("What is the length of the password?");
  // if ()
// console.log(passwordLength)
  var password = generatePassword(passwordLength);
  //   var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
