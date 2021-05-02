var btn_windows = document.getElementById("windows");
var windows_open = document.getElementById("windows-open");
var sider_bar = document.getElementById("sider_bar");
var i_bars = document.getElementById("i_bars");
var i_user = document.getElementById("i_user");
var i_cog = document.getElementById("i_cog");
var i_off = document.getElementById("i_off");
var portafolio_icon_short = document.getElementById("portafolio_icon_short");
var ars = document.getElementById("ars");

btn_windows.addEventListener("click", function () {
  windows_open.classList.toggle("win-open");
  ars.classList.remove("act");
  sider_bar.addEventListener("mouseover", function () {
    sider_bar.classList.add("big_sider_bar");
    i_bars.classList.add("padd");
    i_user.classList.add("padd");
    i_cog.classList.add("padd");
    i_off.classList.add("padd");
  });
  sider_bar.addEventListener("mouseleave", function () {
    sider_bar.classList.remove("big_sider_bar");
    i_bars.classList.remove("padd");
    i_user.classList.remove("padd");
    i_cog.classList.remove("padd");
    i_off.classList.remove("padd");
  });
  portafolio_icon_short.addEventListener("click", function () {
    portafolio_windows.classList.add("visible");
    d_port.style.display = "block";
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
  });
});
