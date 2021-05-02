var video = document.getElementById("video");
var play = document.getElementById("play");
var bar = document.getElementById("bar");

video.addEventListener("mouseover", function () {
  bar.classList.remove("display");
  bar.addEventListener("mouseover", function () {
    bar.classList.remove("display");
  });
});

video.addEventListener("mouseleave", function () {
  bar.classList.add("display");
  bar.addEventListener("mouseleave", function () {
    bar.classList.add("display");
  });
});
