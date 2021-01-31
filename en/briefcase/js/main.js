//=============== modal #1 ===============
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
});

//=============== modal #2 ===============
let cerrar2 = document.querySelectorAll(".close-2")[0];
let abrir2 = document.querySelectorAll(".cta-2")[0];
let modal2 = document.querySelectorAll(".modal-2")[0];
let modalC2 = document.querySelectorAll(".modal-container-2")[0];

abrir2.addEventListener("click", function (e) {
  e.preventDefault();
  modalC2.style.opacity = "1";
  modalC2.style.visibility = "visible";
  modal2.classList.toggle("modal-close");
});

cerrar2.addEventListener("click", function () {
  modal2.classList.toggle("modal-close");

  setTimeout(function () {
    modalC2.style.opacity = "0";
    modalC2.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC2) {
    modal2.classList.toggle("modal-close");

    setTimeout(function () {
      modalC2.style.opacity = "0";
      modalC2.style.visibility = "hidden";
    }, 900);
  }
});

//=============== modal #3 ===============
let cerrar3 = document.querySelectorAll(".close-3")[0];
let abrir3 = document.querySelectorAll(".cta-3")[0];
let modal3 = document.querySelectorAll(".modal-3")[0];
let modalC3 = document.querySelectorAll(".modal-container-3")[0];

abrir3.addEventListener("click", function (e) {
  e.preventDefault();
  modalC3.style.opacity = "1";
  modalC3.style.visibility = "visible";
  modal3.classList.toggle("modal-close");
});

cerrar3.addEventListener("click", function () {
  modal3.classList.toggle("modal-close");

  setTimeout(function () {
    modalC3.style.opacity = "0";
    modalC3.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC3) {
    modal3.classList.toggle("modal-close");

    setTimeout(function () {
      modalC3.style.opacity = "0";
      modalC3.style.visibility = "hidden";
    }, 900);
  }
});

//=============== modal #4 ===============
let cerrar4 = document.querySelectorAll(".close-4")[0];
let abrir4 = document.querySelectorAll(".cta-4")[0];
let modal4 = document.querySelectorAll(".modal-4")[0];
let modalC4 = document.querySelectorAll(".modal-container-4")[0];

abrir4.addEventListener("click", function (e) {
  e.preventDefault();
  modalC4.style.opacity = "1";
  modalC4.style.visibility = "visible";
  modal4.classList.toggle("modal-close");
});

cerrar4.addEventListener("click", function () {
  modal4.classList.toggle("modal-close");

  setTimeout(function () {
    modalC4.style.opacity = "0";
    modalC4.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC4) {
    modal4.classList.toggle("modal-close");

    setTimeout(function () {
      modalC4.style.opacity = "0";
      modalC4.style.visibility = "hidden";
    }, 900);
  }
});

//=============== modal #5 ===============
let cerrar5 = document.querySelectorAll(".close-5")[0];
let abrir5 = document.querySelectorAll(".cta-5")[0];
let modal5 = document.querySelectorAll(".modal-5")[0];
let modalC5 = document.querySelectorAll(".modal-container-5")[0];

abrir5.addEventListener("click", function (e) {
  e.preventDefault();
  modalC5.style.opacity = "1";
  modalC5.style.visibility = "visible";
  modal5.classList.toggle("modal-close");
});

cerrar5.addEventListener("click", function () {
  modal5.classList.toggle("modal-close");

  setTimeout(function () {
    modalC5.style.opacity = "0";
    modalC5.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC5) {
    modal5.classList.toggle("modal-close");

    setTimeout(function () {
      modalC5.style.opacity = "0";
      modalC5.style.visibility = "hidden";
    }, 900);
  }
});

//=============== modal #6 ===============
let cerrar6 = document.querySelectorAll(".close-6")[0];
let abrir6 = document.querySelectorAll(".cta-6")[0];
let modal6 = document.querySelectorAll(".modal-6")[0];
let modalC6 = document.querySelectorAll(".modal-container-6")[0];

abrir6.addEventListener("click", function (e) {
  e.preventDefault();
  modalC6.style.opacity = "1";
  modalC6.style.visibility = "visible";
  modal6.classList.toggle("modal-close");
});

cerrar6.addEventListener("click", function () {
  modal6.classList.toggle("modal-close");

  setTimeout(function () {
    modalC6.style.opacity = "0";
    modalC6.style.visibility = "hidden";
  }, 600);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC6) {
    modal6.classList.toggle("modal-close");

    setTimeout(function () {
      modalC6.style.opacity = "0";
      modalC6.style.visibility = "hidden";
    }, 900);
  }
});

//=============== menu hamburguesa ===============

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    console.log("cerrar");
    menu.classList.toggle("spread");
  }
});
