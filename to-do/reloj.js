var h1dia = document.getElementById("dia");
var h1date = document.getElementById("date");
let dateInstance = new Date();

function generateTime() {
  let timeNow = new Date();
  let hours =
    timeNow.getHours().toString().length < 2
      ? "0" + timeNow.getHours()
      : timeNow.getHours();
  let minutes =
    timeNow.getMinutes().toString().length < 2
      ? "0" + timeNow.getMinutes()
      : timeNow.getMinutes();
  let seconds =
    timeNow.getSeconds().toString().length < 2
      ? "0" + timeNow.getSeconds()
      : timeNow.getSeconds();
  let mainTime = `${hours}<span class="puntos-reloj">:</span>${minutes}`;
  document.getElementById("time").innerHTML = mainTime;
  let day = ["Domingo", "Lunes", "martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  h1dia.innerHTML = day[dateInstance.getDay() ];
  var date = dateInstance.getDate();
  h1date.innerHTML = date;
}

setInterval(() => {
  generateTime();
}, 1000);


