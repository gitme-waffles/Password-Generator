// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCasedCharacters = ['b', 'c', 'd', 'e', 'a', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Write password to the #password input

// prompt for variables then save variables
// length
// (UPERCASE) (lowercase) (numbers) (symbols)

// function generateRandom()

function generatePassword(passwordLength) {
  console.log('passwordLength', passwordLength)
  var resultUPPERCASE = confirm('do you want UPPERCASE?');
  var resultLowercase = confirm('do you want lowercase?');
  var resultNumber = confirm('do you want Number?');
  var resultSymbol = confirm('do you want Symbol?');
  console.log({generatePassword});
  
  var characterArray = [];
  
  if (resultUPPERCASE) {
    characterArray =  characterArray.concat(upperCasedCharacters)
  }
  
  if (resultLowercase) {
    characterArray =  characterArray.concat(lowerCasedCharacters)
  }
  
  if (resultNumber) {
    characterArray =  characterArray.concat(numericCharacters)
  }
  
  if (resultSymbol) {
    characterArray =  characterArray.concat(specialCharacters)
  }

  console.log({characterArray})
  var password = '';

  for (let i = 0; i < passwordLength; i++) {
    var charIndex = Math.floor(Math.random() * characterArray.length);
        // console.log({charIndex});
        // console.log(characterArray[charIndex]);
        password += characterArray[charIndex];
        // console.log({password});

  } 
  console.log({password});
}

function writePassword() {
  var passwordLength = prompt("What is the length of the password?", 8);
  // if ()
// console.log(passwordLength)
  var password = generatePassword(passwordLength);
  //   var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
