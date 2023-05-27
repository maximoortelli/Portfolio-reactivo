/* PRIMERA CARD MOBILE */

const openModalmobile = document.querySelector('.mobile-modal-boton');
const modalMobile = document.querySelector('.mobile-modal');
const closeModalmobile = document.querySelector('.mobile-modal-close');

openModalmobile.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile.classList.add('mobile-modal--show');
});

closeModalmobile.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile.classList.remove('mobile-modal--show');
});

/* SEGUNDA CARD MOBILE */

const openModalmobile1 = document.querySelector('.mobile-modal-boton1');
const modalMobile1 = document.querySelector('.mobile-modal1');
const closeModalmobile1 = document.querySelector('.mobile-modal-close1');

openModalmobile1.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile1.classList.add('mobile-modal--show1');
});

closeModalmobile1.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile1.classList.remove('mobile-modal--show1');
});

/* TERCERA CARD MOBILE */

const openModalmobile2 = document.querySelector('.mobile-modal-boton2');
const modalMobile2 = document.querySelector('.mobile-modal2');
const closeModalmobile2 = document.querySelector('.mobile-modal-close2');

openModalmobile2.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile2.classList.add('mobile-modal--show2');
});

closeModalmobile2.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile2.classList.remove('mobile-modal--show2');
});

/* CUARTA CARD MOBILE */

const openModalmobile3 = document.querySelector('.mobile-modal-boton3');
const modalMobile3 = document.querySelector('.mobile-modal3');
const closeModalmobile3 = document.querySelector('.mobile-modal-close3');

openModalmobile3.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile3.classList.add('mobile-modal--show3');
});

closeModalmobile3.addEventListener('click', (e) => {
  e.preventDefault();
  modalMobile3.classList.remove('mobile-modal--show3');
});