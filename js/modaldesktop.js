/* PRIMERA CARD */

const openModal = document.querySelector('.hero_cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
});

/* SEGUNDA CARD */

const openModal1 = document.querySelector('.hero_cta1');
const modal1 = document.querySelector('.modal1');
const closeModal1 = document.querySelector('.modal-close1');

openModal1.addEventListener('click', (e) => {
  e.preventDefault();
  modal1.classList.add('modal--show1');
});

closeModal1.addEventListener('click', (e) => {
  e.preventDefault();
  modal1.classList.remove('modal--show1');
});

/* TERCERA CARD */

const openModal2 = document.querySelector('.hero_cta2');
const modal2 = document.querySelector('.modal2');
const closeModal2 = document.querySelector('.modal-close2');

openModal2.addEventListener('click', (e) => {
  e.preventDefault();
  modal2.classList.add('modal--show2');
});

closeModal2.addEventListener('click', (e) => {
  e.preventDefault();
  modal2.classList.remove('modal--show2');
});

/* CUARTA CARD */

const openModal3 = document.querySelector('.hero_cta3');
const modal3 = document.querySelector('.modal3');
const closeModal3 = document.querySelector('.modal-close3');

openModal3.addEventListener('click', (e) => {
  e.preventDefault();
  modal3.classList.add('modal--show3');
});

closeModal3.addEventListener('click', (e) => {
  e.preventDefault();
  modal3.classList.remove('modal--show3');
});