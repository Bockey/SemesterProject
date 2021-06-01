const menuIcon = document.querySelector("nav label");
const menu = document.querySelector("#menu-list");
const closeMenu = document.querySelector("#close");

menuIcon.addEventListener("click", function () {
  menu.style.display = "flex";
});

closeMenu.addEventListener("click", function () {
  menu.style.display = "none";
});

/*contact form*/

/*open and close*/

const contactOpen = document.querySelector("#contact-label");
const contactForm = document.querySelector("form");
const arrow = document.querySelector(".arrow-down");

contactOpen.addEventListener("click", function () {
  contactForm.classList.toggle("visibility");
  arrow.classList.toggle("rotate");
});

/*form validation*/

const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");
const formSuccess = document.querySelector(".form-success");

function validateInput(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function submitForm(event) {
  if (!validateEmail(emailInput.value)) {
    emailError.classList.remove("visibility");
    event.preventDefault();
  } else {
    emailError.classList.add("visibility");
  }
  if (!validateInput(nameInput.value, 3)) {
    nameError.classList.remove("visibility");
    event.preventDefault();
  } else {
    nameError.classList.add("visibility");
  }
  if (!validateInput(messageInput.value, 1)) {
    messageError.classList.remove("visibility");
    event.preventDefault();
  } else {
    messageError.classList.add("visibility");
  }
  if (
    validateEmail(emailInput.value) &
    validateInput(nameInput.value, 3) &
    validateInput(messageInput.value, 1)
  ) {
    formSuccess.classList.remove("visibility");
  } else {
    formSuccess.classList.add("visibility");
  }
}

contactForm.addEventListener("submit", submitForm);
