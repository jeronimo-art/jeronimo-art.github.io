var portafolio_icon = document.getElementById("portafolio_icon");
var portafolio_windows = document.getElementById("portafolio");
var habilidades_windows = document.getElementById("habilidades");
var close_port = document.getElementById("close-port");
var max_port = document.getElementById("max-port");
var d_port = document.getElementById("d-port");
var port = document.getElementById("port");
var mini_port = document.getElementById("mini-port");
var d_hab = document.getElementById("d-hab");


portafolio_windows.addEventListener("click", function(){
  d_port.style.background = "#ffffff65";
  d_hab.style.background = "transparent";
})

max_port.addEventListener("click", function () {
  portafolio_windows.classList.toggle("maxed-port");
  windows_open.classList.remove("win-open");
});

mini_port.addEventListener("click", function () {
  d_port.style.background = "transparent";
  portafolio_windows.classList.remove("visible");
  windows_open.classList.remove("win-open");
});

close_port.addEventListener("click", function () {
  portafolio_windows.classList.remove("visible");
  d_port.style.display = "none";
  port.style.display = "none";
  windows_open.classList.remove("win-open");
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
});

d_port.addEventListener("click", function () {
  portafolio_windows.classList.add("visible");
  d_port.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  d_hab.style.background = "transparent";
  portafolio_windows.style.zIndex = "15";
  habilidades_windows.style.zIndex = "10";
});
