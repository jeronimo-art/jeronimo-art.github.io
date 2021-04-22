var contacto_icon = document.getElementById("contacto_icon");
var contacto_windows = document.getElementById("contacto");
var portafolio_windows = document.getElementById("portafolio");
var close_cont = document.getElementById("close-cont");
var max_cont = document.getElementById("max-cont");
var d_cont = document.getElementById("d-cont");
var cont = document.getElementById("cont");
var mini_cont = document.getElementById("mini-cont");
var d_port = document.getElementById("d-port");
var d_hab = document.getElementById("d-hab");

contacto_windows.addEventListener("click", function () {
  d_cont.style.background = "#ffffff65";
  d_port.style.background = "transparent";
  d_hab.style.background = "transparent";
  contacto_windows.style.zIndex = "15";
  portafolio_windows.style.zIndex = "10";
  contacto_windows.style.transition = "0.2s";
});

max_cont.addEventListener("click", function () {
  contacto_windows.classList.toggle("maxed-cont");
  windows_open.classList.remove("win-open");
  contacto_windows.style.transition = "0.2s";
});

mini_cont.addEventListener("click", function () {
  d_cont.style.background = "transparent";
  contacto_windows.classList.remove("visible_cont");
  windows_open.classList.remove("win-open");
  contacto_windows.style.transition = "0.2s";
});

close_cont.addEventListener("click", function () {
  contacto_windows.classList.remove("visible_cont");
  d_cont.style.display = "none";
  cont.style.display = "none";
  windows_open.classList.remove("win-open");
  contacto_windows.style.transition = "0.2s";
});

contacto_icon.addEventListener("click", function () {
  contacto_windows.classList.add("visible_cont");
  d_port.style.background = "transparent";
  d_hab.style.background = "transparent";
  d_cont.style.display = "block";
  cont.style.display = "block";
  d_cont.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  contacto_windows.style.zIndex = "15";
  portafolio_windows.style.zIndex = "10";
  habilidades_windows.style.zIndex = "10";
  contacto_windows.style.transition = "0.2s";
});

d_cont.addEventListener("click", function () {
  contacto_windows.classList.add("visible_cont");
  d_cont.style.background = "#ffffff65";
  d_port.style.background = "transparent";
  d_hab.style.background = "transparent";
  windows_open.classList.remove("win-open");
  contacto_windows.style.zIndex = "15";
  portafolio_windows.style.zIndex = "10";
  habilidades_windows.style.zIndex = "10";
  contacto_windows.style.transition = "0.2s";
});

// Make the DIV element draggable:
dragElement(document.getElementById("contacto"));

function dragElement(elmnt_cont) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt_cont.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(
      elmnt_cont.id + "header"
    ).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt_cont.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    contacto_windows.style.transition = "0s";
    e.preventDefault();
    if (contacto_windows.classList.contains("maxed-cont")) {
      contacto_windows.classList.remove("maxed-cont");
      document.onmouseup = null;
      document.onmousemove = null;
    }
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt_cont.style.top = elmnt_cont.offsetTop - pos2 + "px";
    elmnt_cont.style.left = elmnt_cont.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
