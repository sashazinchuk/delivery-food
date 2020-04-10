const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

/* первый вариант открытия и закрытия модального окна

cartButton.addEventListener('click', function (event) {
  modal.classList.add("is-open");
});

close.addEventListener('click', function (event) {
  modal.classList.remove("is-open");
});

*/

/* второй вариант открытия и закрытия модального окна */
cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
};

new WOW().init();