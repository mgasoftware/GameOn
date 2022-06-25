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
    firstName.style.border = '2px solid red';
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
  if(email.value.trim().match(regex)){
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
  email.parentElement.setAttribute('data-error-visible', 'true');
  return false;
}

// send form
const formSubmit = e => {
  e.preventDefault();
  if (checkFirstName() && checkLastName() && checkEmail()) {
    confirmationModal.style.display = "block";
  }
}

form.addEventListener('submit', formSubmit);