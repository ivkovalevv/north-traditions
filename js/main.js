/* DROPDOWN MENU */

const dropdownButton = document.getElementById("dropdown-button");
const dropdownDescription = document.getElementById("dropdown-description");
const dropdownTriangle = document.getElementById("dropdown-triangle");
const dropdownCircle = document.getElementById("dropdown-circle");

const dropdownMenu = document.getElementById("dropdown-menu");

dropdownButton.addEventListener("click", () => openDropdownMenu());

function openDropdownMenu() {
  dropdownMenu.classList.add("dropdown-menu-disappearance");
  dropdownMenu.classList.toggle("dropdown-menu-active");
  dropdownDescription.classList.toggle("dropdown-description-active");
  dropdownTriangle.classList.toggle("display-none");
  dropdownCircle.classList.toggle("display-flex");
}

/* BURGER MENU */

const burgerButton = document.getElementById("burger-button");
const burgerMenu = document.getElementById("burger-menu");

burgerButton.addEventListener("click", () => openBurgerMenu());

function openBurgerMenu() {
  burgerButton.classList.toggle("burger-button-close");
  burgerMenu.classList.toggle("burger-menu-open");
}

/* MODALS */

const overlay = document.getElementById('overlay');

const eventButton1 = document.getElementById('event-button-1');
const eventButton2 = document.getElementById('event-button-2');
const eventButton3 = document.getElementById('event-button-3');

const modal1 = document.getElementById('modal-1');
const modal2 = document.getElementById('modal-2');
const modal3 = document.getElementById('modal-3');

const modalCloseButton1 = document.getElementById('modal-close-button-1');
const modalCloseButton2 = document.getElementById('modal-close-button-2');
const modalCloseButton3 = document.getElementById('modal-close-button-3');

eventButton1.addEventListener('click', () => openModal(modal1));
eventButton2.addEventListener('click', () => openModal(modal2));
eventButton3.addEventListener('click', () => openModal(modal3));

modalCloseButton1.addEventListener('click', () => closeModal(modal1));
modalCloseButton2.addEventListener('click', () => closeModal(modal2));
modalCloseButton3.addEventListener('click', () => closeModal(modal3));

overlay.addEventListener('click', () => {
  closeModal(modal1);
  closeModal(modal2);
  closeModal(modal3);
})

function openModal(modal){
  overlay.classList.remove('overlay-none');
  modal.classList.add('modal-open');
}

function closeModal(modal){
  overlay.classList.add('overlay-none');
  modal.classList.remove('modal-open');
}