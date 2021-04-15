var habilidades_icon = document.getElementById("habilidades_icon");
var habilidades_windows = document.getElementById("habilidades");
var close_hab = document.getElementById("close-hab");
var max_hab = document.getElementById("max-hab");
var d_hab = document.getElementById("d-hab");
var hab = document.getElementById("hab");
var mini_hab = document.getElementById("mini-hab");
var d_port = document.getElementById("d_port");


max_hab.addEventListener("click", function () {
  habilidades_windows.classList.toggle("maxed-hab");
  windows_open.classList.remove("win-open");
});

mini_hab.addEventListener("click", function () {
  d_hab.style.background = "transparent";
  habilidades_windows.classList.remove("visible_hab");
  windows_open.classList.remove("win-open");
});

close_hab.addEventListener("click", function () {
  habilidades_windows.classList.remove("visible_hab");
  d_hab.style.display = "none";
  hab.style.display = "none";
  windows_open.classList.remove("win-open");
});

habilidades_icon.addEventListener("click", function () {
  habilidades_windows.classList.add("visible_hab");
  d_port.style.background = "transparent";
  d_hab.style.display = "block";
  hab.style.display = "block";
  d_hab.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
});

d_hab.addEventListener("click", function () {
  habilidades_windows.classList.add("visible_hab");
  d_hab.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
  d_port.style.background = "transparent";
});
