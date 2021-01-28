function mostrarLink() {
  element = document.getElementById("link");
  check = document.getElementById("check");
  if (check.checked) {
      element.style.display='block';
  }
  else {
      element.style.display='none';
  }
}

/*let edad = prompt("Ingresa tu edad");
if (edad >= 18) {
  document.write("<i class='no'>Puedes ingresar!</i>");
  function mostrar() {
    document.getElementById("submit").style.display = "block";
  document.getElementById("boton").style.cursor = "pointer";
  }
} else {
  document.write("<i class='no'>NO puedes ingresar :(</i>");
  document.getElementById("boton").style.opacity = "0.5";
}*/
