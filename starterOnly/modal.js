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
const closeBtn = document.getElementsByClassName('submit-confirmation__btn');

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
close[1].addEventListener('click', closeForm);

// first and last name check
function checkFirstName() {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === '') {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}
function checkLastName() {
  if (lastName.value.trim().length < 2 || lastName.value.trim() == '') {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

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

//birthdate check
function checkBirthDate() {
  if (birthDate.value.trim().length !== 10) {
    birthDate.parentElement.setAttribute('data-error-visible', 'true');
    return false
  }
  birthDate.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

//tournament quantity check
function checkQuantityTournament() {
  if (quantityTournament.value.trim() == '') {
    quantityTournament.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
  quantityTournament.parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

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

//CGU check
function checkCGUValid() {
  if(cguValid.checked){
    cguValid.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  cguValid.parentElement.setAttribute('data-error-visible', 'true');
  return false;
}

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

//close form button when is end
closeBtn[0].addEventListener('click', closeForm);