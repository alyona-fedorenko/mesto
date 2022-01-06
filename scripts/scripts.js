let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let overlay = document.querySelector('.overlay');
let overlayShowClass = 'overlay_showed';
let userName = document.querySelector('.profile__user-name');
let userStatus = document.querySelector('.profile__user-status');
let form = document.querySelector('.form');
let inputName = document.querySelector('.form__input_type_name');
let inputStatus = document.querySelector('.form__input_type_status');

function showOverlay() {
  overlay.classList.add(overlayShowClass);
  inputName.value = userName.textContent;
  inputStatus.value = userStatus.textContent;
}

function hideOverlay() {
  overlay.classList.remove(overlayShowClass);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userStatus.textContent = inputStatus.value;
  hideOverlay();
}

editButton.addEventListener('click', showOverlay);

closeButton.addEventListener('click', hideOverlay);

form.addEventListener('submit', handleFormSubmit);
