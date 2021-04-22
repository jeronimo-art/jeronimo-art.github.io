var btn_windows = document.getElementById("windows");
var windows_open = document.getElementById("windows-open");
var sider_bar = document.getElementById("sider_bar");
var i_bars = document.getElementById("i_bars");
var i_user = document.getElementById("i_user");
var i_cog = document.getElementById("i_cog");
var i_off = document.getElementById("i_off");

btn_windows.addEventListener("click", function () {
  windows_open.classList.toggle("win-open");
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
});