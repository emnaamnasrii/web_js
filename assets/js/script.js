'use strict';

/**
 * Ajouter un gestionnaire d'événement sur plusieurs éléments
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * Affiche un message d'erreur sous le champ spécifié
 */
function displayErrorMessage(field, message) {
  var errorMessageElement = document.createElement("div");
  errorMessageElement.textContent = message;
  errorMessageElement.style.color = "red";
  errorMessageElement.classList.add("error-message");

  var existingErrorMessage = field.parentElement.querySelector(".error-message");
  if (existingErrorMessage) {
    field.parentElement.removeChild(existingErrorMessage);
  }

  field.parentElement.appendChild(errorMessageElement);
}

/**
 * Efface le message d'erreur sous le champ spécifié
 */
function clearErrorMessage(field) {
  var existingErrorMessage = field.parentElement.querySelector(".error-message");
  if (existingErrorMessage) {
    field.parentElement.removeChild(existingErrorMessage);
  }
}

/**
 * PRELOADER
 */
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * MOBILE NAV TOGGLE
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);

/**
 * HEADER
 * Active le header lorsque la fenêtre est défilée à 50px
 */
const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

/**
 * Validation du formulaire
 */
function validateForm() {
  var nom = document.getElementById("name");
  var email = document.getElementById("email");
  var sujet = document.getElementById("subject");
  var message = document.getElementById("message");

  var lettersOnlyRegex = /^[a-zA-Z]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!lettersOnlyRegex.test(nom.value) || nom.value.length < 3) {
    displayErrorMessage(nom, "Nom doit contenir que des lettres et avoir au moins 3 caractères.");
    return;
  } else {
    clearErrorMessage(nom);
  }

  if (!emailRegex.test(email.value)) {
    displayErrorMessage(email, "Adresse email invalide.");
    return;
  } else {
    clearErrorMessage(email);
  }

  if (sujet.value.trim() === "") {
    displayErrorMessage(sujet, "Le champ sujet ne peut pas être vide.");
    return;
  } else {
    clearErrorMessage(sujet);
  }

  if (message.value.trim() === "") {
    displayErrorMessage(message, "Le champ message ne peut pas être vide.");
    return;
  } else {
    clearErrorMessage(message);
  }

  alert("Formulaire soumis avec succès!");
  // document.getElementById("form").submit(); // Décommentez cette ligne si vous souhaitez soumettre le formulaire réellement
}

// Ajouter un gestionnaire d'événements pour la validation du formulaire
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
});
