// Assignment Code
var generateBtn = document.querySelector("#generate");

//Opens the generate password modal.
const modal = document.querySelector(".modal");
const openModal = document.querySelector("#generate");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

//Closes the modal
closeModal.addEventListener("click", () => {
  modal.close();
});

//Adds a visible value to the passLength slider
let slider = document.getElementById("passLength");
let output = document.getElementById("slider-number");
let passwordLength = slider.value;

slider.addEventListener("input", (event) => {
  output.innerHTML = slider.value;
  passwordLength = slider.value;
});

//Creates a variable for the submit button from the form.
const submitBtn = document.querySelector(".submit-form");

//Grabs the checked value from the checkboxes in the form
let lowerCase = document.querySelector("#lowerCase");
let upperCase = document.querySelector("#upperCase");
let numbers = document.querySelector("#numbers");
let specialCharacters = document.querySelector("#specialCharacters");

//Generates the password
function generatePassword() {
  //Get values from password criteria
  const { lower, upper, numbers, special } = getPasswordCriteria();

  //Create array for criteria and a string for password
  let passwordProps = [];
  let password = "";

  //Create an object for upper, lower, numbers, special characters
  const symbols = {
    lower: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    upper: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      "[",
      "]",
      "{",
      "}",
      "|",
      ";",
      ":",
      ",",
      ".",
      "<",
      ">",
      "/",
      "?",
      "~",
      "`",
    ],
  };

  //Create if statements to determine which password criteria is to be accepted

  if (lower) {
    passwordProps.push("lower");
  }

  if (upper) {
    passwordProps.push("upper");
  }

  if (numbers) {
    passwordProps.push("numbers");
  }

  if (special) {
    passwordProps.push("special");
  }

  //Create for loop to iterate over the arrays for the size of the password length
  for (let i = 0; i < passwordLength; i++) {
    let newSymbol = getRandFromArray(passwordProps);

    password += getRandFromArray(symbols[newSymbol]);
  }

  return password;
}

//Create Object for Password Criteria
function getPasswordCriteria() {
  return {
    lower: lowerCase.checked,
    upper: upperCase.checked,
    numbers: numbers.checked,
    special: specialCharacters.checked,
  };
}

//Adds a click event to the submit button that will submit all the data
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  modal.close();
});

//Gets a random index from an array.
function getRandFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}
