/*==================================Variables==================================*/

/*======================Variables de ventana (Portafolio)======================*/

var portafolio_icon = document.getElementById("portafolio_icon");
var portafolio_windows = document.getElementById("portafolio");
var habilidades_windows = document.getElementById("habilidades");
var d_port = document.getElementById("d-port");
var close_port = document.getElementById("close-port");
var max_port = document.getElementById("max-port");
var mini_port = document.getElementById("mini-port");
var port = document.getElementById("port");

/*======================Variables de ventana (Contacto)======================*/

var contacto_windows = document.getElementById("contacto");

/*======================Variables de ventana (Windows)======================*/

var sider_bar = document.getElementById("sider_bar");

/*======================Variables de iconos de la barra======================*/

var d_hab = document.getElementById("d-hab");
var d_cont = document.getElementById("d_cont");

/*=====================Variables de control de encendido=====================*/

var ars = document.getElementById("ars");

/*=======================Variables para acortar codigo=======================*/

var portafolio_invisible = function () {
  portafolio_windows.classList.add("visible");
};
var d_port_block = function () {
  d_port.style.display = "block";
};
var portafolio_invisible = function () {
  portafolio_windows.classList.add("visible");
};
var portafolio_invisible = function () {
  portafolio_windows.classList.add("visible");
};
var portafolio_invisible = function () {
  portafolio_windows.classList.add("visible");
};
var portafolio_invisible = function () {
  portafolio_windows.classList.add("visible");
};

portafolio_icon.addEventListener("click", function () {
  portafolio_invisible();
  d_port_block();
  port.style.display = "block";
  d_port.style.background = "#ffffff65";
  d_hab.style.background = "transparent";
  d_cont.style.background = "transparent";
  windows_open.classList.remove("win-open");
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
  contacto_windows.style.zIndex = "10";
  portafolio_windows.style.transition = "0.2s";
  ars.classList.remove("act");
  sider_bar.classList.remove("big_sider_bar_imp");
});

portafolio_windows.addEventListener("click", function () {
  d_port.style.background = "#ffffff65";
  d_hab.style.background = "transparent";
  d_cont.style.background = "transparent";
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
  contacto_windows.style.zIndex = "10";
  portafolio_windows.style.transition = "0.2s";
  ars.classList.remove("act");
  sider_bar.classList.remove("big_sider_bar_imp");
});

max_port.addEventListener("click", function () {
  portafolio_windows.classList.toggle("maxed-port");
  windows_open.classList.remove("win-open");
  portafolio_windows.style.transition = "0.2s";
  ars.classList.remove("act");
  sider_bar.classList.remove("big_sider_bar_imp");
});

mini_port.addEventListener("click", function () {
  d_port.style.background = "transparent";
  portafolio_windows.classList.remove("visible");
  windows_open.classList.remove("win-open");
  portafolio_windows.style.transition = "0.2s";
  ars.classList.remove("act");
  sider_bar.classList.remove("big_sider_bar_imp");
});

close_port.addEventListener("click", function () {
  portafolio_windows.classList.remove("visible");
  portafolio_windows.classList.add("close");
  d_port.style.display = "none";
  port.style.display = "none";
  windows_open.classList.remove("win-open");
  portafolio_windows.style.transition = "0.2s";
  ars.classList.remove("act");
  sider_bar.classList.remove("big_sider_bar_imp");
});

d_port.addEventListener("click", function () {
  portafolio_invisible();
  d_port.style.background = "#ffffff65";
  d_hab.style.background = "transparent";
  d_cont.style.background = "transparent";
  windows_open.classList.remove("win-open");
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
  contacto_windows.style.zIndex = "10";
  portafolio_windows.style.transition = "0.2s";
  ars.classList.remove("act");
  sider_bar.classList.remove("big_sider_bar_imp");
});

// Make the DIV element draggable:
dragElement(document.getElementById("portafolio"));

function dragElement(elmnt_port) {
  var pos1_p = 0,
    pos2_p = 0,
    pos3_p = 0,
    pos4_p = 0;
  if (document.getElementById(elmnt_port.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt_port.id + "header").onmousedown =
      dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt_port.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3_p = e.clientX;
    pos4_p = e.clientY;
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
    pos1_p = pos3_p - e.clientX;
    pos2_p = pos4_p - e.clientY;
    pos3_p = e.clientX;
    pos4_p = e.clientY;
    // set the element's new position:
    elmnt_port.style.top = elmnt_port.offsetTop - pos2_p + "px";
    elmnt_port.style.left = elmnt_port.offsetLeft - pos1_p + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
