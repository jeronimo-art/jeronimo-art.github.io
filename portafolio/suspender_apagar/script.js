var h = new Date().getHours();
var m = new Date().getMinutes();
var d = new Date().getDay();
var mo = new Date().getMonth();
var f = new Date().getDate();

let day = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
let month = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];
if (m < 10) {
  m = "0" + m;
}
document.getElementById("time").innerHTML = h + ":" + m;
document.getElementById("date").innerHTML = d =
  day[d] + "," + " " + month[mo] + " " + f;

document.getElementById("all").addEventListener("click", function () {
  document.getElementById("all").style.transform = "translateY(-100%)";
  setTimeout(function () {
    location.href = "../index.html";
  }, 200);
});
