function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');
const confirmationModal = document.querySelector('.submit-confirmation-container');
const close = document.getElementsByClassName('close');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const quantityTournament = document.getElementById('quantity');
const checkboxLocation = document.getElementById('allLocation');
const locations = document.querySelectorAll('#allLocation .checkbox-input');
const cguValid = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const closeBtn = document.getElementsByClassName('submit-confirmation__btn');
const inputs = document.querySelectorAll('#first, #last, #email, #birthdate, #quantity');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeForm() {
  modalbg.style.display = "none";
}
close[0].addEventListener('click', closeForm);

// first and last name check
function checkFirstName() {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === '') {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}
firstName.addEventListener('change', checkFirstName);

function checkLastName() {
  if (lastName.value.trim().length < 2 || lastName.value.trim() == '') {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}
lastName.addEventListener('change', checkLastName);

// email check
function checkEmail() {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.trim().match(regex)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  email.parentElement.setAttribute('data-error-visible', 'true');
  return false;
}
email.addEventListener('change', checkEmail);

//birthdate check
function checkBirthDate() {
  currentYear = new Date();
  var year = Number(birthDate.value.trim().slice(0, 4));
  if (birthDate.value.trim().length !== 10 || (year >= currentYear.getFullYear())) {
    birthDate.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  birthDate.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}
birthDate.addEventListener('mouseleave', checkBirthDate);

//tournament quantity check
function checkQuantityTournament() {
  if (quantityTournament.value.trim() == '') {
    quantityTournament.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  quantityTournament.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}
quantityTournament.addEventListener('mouseleave', checkQuantityTournament);

//location check
function checkCheckboxLocation() {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      checkboxLocation.setAttribute('data-error-visible', 'false');
      return true;
    }
    checkboxLocation.setAttribute('data-error-visible', 'true');
  }
  return false;
}
checkboxLocation.addEventListener('mouseleave', checkCheckboxLocation);

//CGU check
function checkCGUValid() {
  if(cguValid.checked){
    cguValid.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  cguValid.parentElement.setAttribute('data-error-visible', 'true');
  return false;
}
cguValid.addEventListener('click', checkCGUValid);

//function who scan the forms entry
function checkAll() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthDate();
  checkQuantityTournament();
  checkCheckboxLocation();
  checkCGUValid();
}

//function who see if the form entry are valid
function formValid() {
  if (checkFirstName() && checkLastName() && checkEmail() && checkBirthDate()
    && checkQuantityTournament() && checkCheckboxLocation() && checkCGUValid()) {
    return true;
  }
  return false;
}

// send form
const formSubmit = e => {
  e.preventDefault();
  if (formValid()) {
    confirmationModal.style.display = "block";
  }
  else checkAll();
}

form.addEventListener('submit', formSubmit);

//close form button when is end and reset it
function resetForm() {
  confirmationModal.style.display = 'none';
  modalbg.style.display = 'none';
  inputs.forEach(input => {
    input.value = '';
    console.log(input);
  });
  for (let i = 0; i < locations.length; i++) {
    locations[i].checked = false;
  }
  cguValid.checked = false;
  checkbox2.checked = false;
}
close[1].addEventListener('click', resetForm);
closeBtn[0].addEventListener('click', resetForm);