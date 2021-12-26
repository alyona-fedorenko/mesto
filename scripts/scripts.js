let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close');
let overlay = document.querySelector('.overlay');
let overlayShowClass = 'overlay_showed';
let userName = document.querySelector('.profile__user-name');
let userStatus = document.querySelector('.profile__user-status');
let form = document.querySelector('.form');
let inputName = document.querySelector('.form__name-input');
let inputStatus = document.querySelector('.form__status-input');

inputName.value = userName.textContent;
inputStatus.value = userStatus.textContent;

function overlayShow() {
  overlay.classList.add(overlayShowClass);
  document.body.style.overflow = 'hidden';
}

function overlayHide() {
  overlay.classList.remove(overlayShowClass);
  document.body.style.overflow = '';
}

function formSubmit(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userStatus.textContent = inputStatus.value;
  overlayHide();
}

editButton.addEventListener('click', overlayShow);

closeButton.addEventListener('click', overlayHide);

form.addEventListener('submit', formSubmit);
