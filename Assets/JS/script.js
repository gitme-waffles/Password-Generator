// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCasedCharacters = ['b', 'c', 'd', 'e', 'a', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Collects user choices then generates random characters until user defined password length
function generatePassword(passwordLength) {
  // prompts user for character type selection
  var resultUPPERCASE = confirm('do you want UPPERCASE?');
  var resultLowercase = confirm('do you want lowercase?');
  var resultNumber = confirm('do you want Number?');
  var resultSymbol = confirm('do you want Symbol?');

  var characterArray = [];
  // Adds character type to the characterArray if selected
  if (resultUPPERCASE) {
    characterArray = characterArray.concat(upperCasedCharacters);
  }  
  if (resultLowercase) {
    characterArray = characterArray.concat(lowerCasedCharacters);
  }  
  if (resultNumber) {
    characterArray = characterArray.concat(numericCharacters);
  }
  if (resultSymbol) {
    characterArray = characterArray.concat(specialCharacters);
  }
  // If no character type is selected, display error meg and end function
  if (characterArray.length == 0) {
    alert("Must have at least one character type!");
    return ''; 
  }
  var password = '';
  // generate random characters from characterArray that has all of the selected types
  for (let i = 0; i < passwordLength; i++) {
    var charIndex = Math.floor(Math.random() * characterArray.length);
    password += characterArray[charIndex];
  }

  return password;
}

function writePassword() {
  var passwordLength = Number(prompt("What is the length of the password? \nMust be between 8 & 128", 8));
  console.log({passwordLength})
  // checks that the character input is a number and not any character
  if (!(Number.isInteger(passwordLength))) {
    alert('Must input a valid NUMBER');
    return;
  }
  // checks for valid password length
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert('Must input a NUMBER between 8 & 128');
    return;
  }
  
  var password = generatePassword(passwordLength);  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
