var loader = document.getElementById("loader");
var back_load = document.getElementById("back-load");

var loading = function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    back_load.style.opacity = "0";
  }, 3000);
  setTimeout(function () {
    loader.style.display = "none";
    back_load.style.display = "none";
  }, 3000);
};

loading();

var i_off = document.getElementById("i_off");
var ars = document.getElementById("ars");
var sider_bar = document.getElementById("sider_bar");
var off = document.getElementById("off");
var restart = document.getElementById("restart");
var suspend = document.getElementById("suspend");

i_off.addEventListener("click", function () {
  ars.classList.toggle("act");
  sider_bar.classList.add("big_sider_bar");
});

off.addEventListener("click", function () {
  loader.style.opacity = "1";
  back_load.style.opacity = "1";
  loader.style.display = "block";
  back_load.style.display = "block";
  ars.classList.toggle("act");
  setTimeout(function () {
    location.href = "suspender_apagar/apagar.html";
  }, 3000);
});

restart.addEventListener("click", function () {
  location.href = location.href;
});

suspend.addEventListener("click", function () {
  loader.style.opacity = "1";
  back_load.style.opacity = "1";
  loader.style.display = "block";
  back_load.style.display = "block";
  ars.classList.remove("act");
  setTimeout(function () {
    location.href = "suspender_apagar/suspender.html";
  }, 1500);
});
