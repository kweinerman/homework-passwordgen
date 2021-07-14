// Assignment Code
var generateBtn = document.querySelector("#generate");

var useUpperCase = []


//Gets a random uppercase, lowercase, number and symbol

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSpecial() {
  const symbols = "!@#$%^&*()_=+,./"
  return symbols[Math.floor(Math.random()*symbols.length)]
}
// makes all rnadom functions into an array
// const randomFunction ,{
//   upper: getRandomUpper,
//   lower: getRandomLower,
//   special: getRandomSpecial,
//   number: getRandomNumber
// }
//for loop to generate password if all = true
function getPassword(useUpperCase, useLowerCase, useSpecial, useNumbers, passwordLength){
var password = ""
  const typesCount = useUpperCase + useLowerCase + useSpecial + useNumbers;
  const typesArr = [{useUpperCase}, {useLowerCase}, {useSpecial}, {useNumbers}].filter(item => Object.values(item)[0]);
  if (typesCount === 0)
  return ""
  for (let i = 0; i < passwordLength; i++) {

    if (Math.random() < 0.2){
    password += getRandomUpper(); 
  } 
    else if (Math.random() <= 0.4){
      password += getRandomLower(); 
  
    }
    else if (Math.random() >= 0.8){
      password += getRandomSpecial(); 
  
    }
    else if (Math.random() <= 0.6){
      password += getRandomNumber(); 
  
    }
  
}
return password
}




function generatePassword() {
  var randomPassword
  // make a generate password
  // create a prompt for password length
  var passwordLength = window.prompt("How many characters would you like in your password?")

  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password must be between 8 and 128 Characters")
  } 
  //confirm for use lower case letters
  //confirm for upper case letters/
  //confirm for special charcters
  //confirm for numbers  
  else {
    var useUpperCase = window.confirm("Do you want to use upper case characters?")
    var useLowerCase = window.confirm("Do you want to use lower case characters?")
    var useSpecial = window.confirm("Do you want to use special characters?")
    var useNumbers = window.confirm("Do you want to use numbers?")
  }
  



  //store the response in a variable /array

  // create an array of lower case, uppcase, number and specail characters
  //randomly generate the included charcaters
  //mix them up into a random string xs
 
  //set password return
  return getPassword(useUpperCase, useLowerCase, useSpecial, useNumbers, passwordLength)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
