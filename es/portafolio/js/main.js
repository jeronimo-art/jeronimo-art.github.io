let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let abrir2 = document.querySelectorAll(".cta-2")[0];
let abrir3 = document.querySelectorAll(".cta-3")[0];
let abrir4 = document.querySelectorAll(".cta-4")[0];
let abrir5 = document.querySelectorAll(".cta-5")[0];
let abrir6 = document.querySelectorAll(".cta-6")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

abrir2.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

abrir3.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

abrir4.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

abrir5.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});

abrir6.addEventListener("click", function (e) {
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



const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})