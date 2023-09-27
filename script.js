// Assignment Code
var generateBtn = document.querySelector("#generate");



//Opens the generate password modal.
const modal = document.querySelector('.modal');
const openModal = document.querySelector('#generate');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
  modal.showModal();
})

//Closes the modal
closeModal.addEventListener('click', () => {
  modal.close();
})



//Adds a visible value to the passLength slider
let slider = document.getElementById("passLength");
let output = document.getElementById('slider-number');
let passwordLength = slider.value;

slider.addEventListener('input', (event) => {
  output.innerHTML = slider.value
  passwordLength = slider.value;
})


//Creates a variable for the submit button from the form.
const submitBtn = document.querySelector('.submit-form');

//Grabs the checked value from the checkboxes in the form
let lowerCase = document.querySelector('#lowerCase')
let upperCase = document.querySelector('#upperCase')
let numbers = document.querySelector('#numbers')
let specialCharacters = document.querySelector('#specialCharacters')

let passwordCriteria = [];

//Adds a click event to the submit button that will submit all the data
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

//Generates the password
function generatePassword(pass, lower, upper, numbers, special) {
  for (let i = pass; i >= 0; i--) {

  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
