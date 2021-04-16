var habilidades_icon = document.getElementById("habilidades_icon");
var habilidades_windows = document.getElementById("habilidades");
var portafolio_windows = document.getElementById("portafolio");
var close_hab = document.getElementById("close-hab");
var max_hab = document.getElementById("max-hab");
var d_hab = document.getElementById("d-hab");
var hab = document.getElementById("hab");
var mini_hab = document.getElementById("mini-hab");
var d_port = document.getElementById("d_port");

habilidades_windows.addEventListener("click", function () {
  d_hab.style.background = "#ffffff65";
  d_port.style.background = "transparent";
  habilidades_windows.style.zIndex = "15";
  portafolio_windows.style.zIndex = "10";
  habilidades_windows.style.transition = "0.2s";
});

max_hab.addEventListener("click", function () {
  habilidades_windows.classList.toggle("maxed-hab");
  windows_open.classList.remove("win-open");
  habilidades_windows.style.transition = "0.2s";
});

mini_hab.addEventListener("click", function () {
  d_hab.style.background = "transparent";
  habilidades_windows.classList.remove("visible_hab");
  windows_open.classList.remove("win-open");
  habilidades_windows.style.transition = "0.2s";
});

close_hab.addEventListener("click", function () {
  habilidades_windows.classList.remove("visible_hab");
  d_hab.style.display = "none";
  hab.style.display = "none";
  windows_open.classList.remove("win-open");
  habilidades_windows.style.transition = "0.2s";
});

habilidades_icon.addEventListener("click", function () {
  habilidades_windows.classList.add("visible_hab");
  d_port.style.background = "transparent";
  d_hab.style.display = "block";
  hab.style.display = "block";
  d_hab.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  habilidades_windows.style.zIndex = "15";
  portafolio_windows.style.zIndex = "10";
  habilidades_windows.style.transition = "0.2s";
});

d_hab.addEventListener("click", function () {
  habilidades_windows.classList.add("visible_hab");
  d_hab.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  d_port.style.background = "transparent";
  habilidades_windows.style.zIndex = "15";
  portafolio_windows.style.zIndex = "10";
  habilidades_windows.style.transition = "0.2s";
});

// Make the DIV element draggable:
dragElement(document.getElementById("habilidades"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
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
    habilidades_windows.style.transition = "0s";
    e.preventDefault();
    if (habilidades_windows.classList.contains("maxed-hab")) {
      habilidades_windows.classList.remove("maxed-hab");
      document.onmouseup = null;
      document.onmousemove = null;
    }
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
