var btn_windows = document.getElementById("windows");
var windows_open = document.getElementById("windows-open");


btn_windows.addEventListener("click", function () {
  windows_open.classList.toggle("win-open");
});