/*const hamburguer = document.querySelector('.hamburguer')
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
})*/

var menu = document.querySelector('.hamburger');

// metodo
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menu-navegacion" ).classList.toggle("is_active");
  event.preventDefault();
}

// evento
menu.addEventListener('click', toggleMenu, false);





document.getElementById("html").addEventListener("mouseover", function(){
  document.getElementById("p-html").style.display = "block";
});


