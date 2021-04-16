var portafolio_icon = document.getElementById("portafolio_icon");
var portafolio_windows = document.getElementById("portafolio");
var habilidades_windows = document.getElementById("habilidades");
var close_port = document.getElementById("close-port");
var max_port = document.getElementById("max-port");
var d_port = document.getElementById("d-port");
var port = document.getElementById("port");
var mini_port = document.getElementById("mini-port");
var d_hab = document.getElementById("d-hab");

portafolio_windows.addEventListener("click", function () {
  d_port.style.background = "#ffffff65";
  d_hab.style.background = "transparent";
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
  portafolio_windows.style.transition = "0.2s";
});

max_port.addEventListener("click", function () {
  portafolio_windows.classList.toggle("maxed-port");
  windows_open.classList.remove("win-open");
  portafolio_windows.style.transition = "0.2s";
});

mini_port.addEventListener("click", function () {
  d_port.style.background = "transparent";
  portafolio_windows.classList.remove("visible");
  windows_open.classList.remove("win-open");
  portafolio_windows.style.transition = "0.2s";
});

close_port.addEventListener("click", function () {
  portafolio_windows.classList.remove("visible");
  d_port.style.display = "none";
  port.style.display = "none";
  windows_open.classList.remove("win-open");
  portafolio_windows.style.transition = "0.2s";
});

portafolio_icon.addEventListener("click", function () {
  portafolio_windows.classList.add("visible");
  d_port.style.display = "block";
  port.style.display = "block";
  d_hab.style.background = "transparent";
  d_port.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
  portafolio_windows.style.transition = "0.2s";
});

d_port.addEventListener("click", function () {
  portafolio_windows.classList.add("visible");
  d_port.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  d_hab.style.background = "transparent";
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
  portafolio_windows.style.transition = "0.2s";
});

// Make the DIV element draggable:
dragElement(document.getElementById("portafolio"));

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
    portafolio_windows.style.transition = "0s";
    e.preventDefault();
    if (portafolio_windows.classList.contains("maxed-port")) {
      portafolio_windows.classList.remove("maxed-port");
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
