var portafolio_icon = document.getElementById("portafolio_icon");
var portafolio_windows = document.getElementById("portafolio");
var close_port = document.getElementById("close-port");
var max_port = document.getElementById("max-port");
var d_port = document.getElementById("d-port");
var port = document.getElementById("port");
var mini_port = document.getElementById("mini-port");
var btn_windows = document.getElementById("windows");
var windows_open = document.getElementById("windows-open");

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
  d_port.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
});

d_port.addEventListener("click", function () {
  portafolio_windows.classList.add("visible");
  d_port.style.background = "#ffffff65";
  windows_open.classList.remove("win-open");
});

btn_windows.addEventListener("click", function () {
  windows_open.classList.toggle("win-open");
});

if (windows_open.classList.contains("win-open")) {
  window.addEventListener("click", function (e) {
    if (e.target != windows_open) {
      windows_open.classList.toggle("win-open");
    }
  });
}
