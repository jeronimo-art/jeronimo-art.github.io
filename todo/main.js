const btnSwitch0 = document.getElementById("switch0");
const btnSwitch1 = document.getElementById("switch1");
const btnSwitch2 = document.getElementById("switch2");
const btnSwitch3 = document.getElementById("switch3");
const btnSwitch4 = document.getElementById("switch4");
const btnSwitch5 = document.getElementById("switch5");
const btnSwitch6 = document.getElementById("switch6");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tre = document.getElementById("dos");
const cuatro = document.getElementById("dos");
const cinco = document.getElementById("dos");
const seis = document.getElementById("dos");
const ciete = document.getElementById("dos");
const ocho = document.getElementById("dos");
const act11 = document.getElementById("act-1-1");
const act12 = document.getElementById("act-1-2");
const act13 = document.getElementById("act-1-3");
const act14 = document.getElementById("act-1-4");
const act15 = document.getElementById("act-1-5");
const act16 = document.getElementById("act-1-6");
const act17 = document.getElementById("act-1-7");
const act21 = document.getElementById("act-2-1");
const act22 = document.getElementById("act-2-2");
const act23 = document.getElementById("act-2-3");
const act24 = document.getElementById("act-2-4");
const act25 = document.getElementById("act-2-5");
const act26 = document.getElementById("act-2-6");
const act27 = document.getElementById("act-2-7");
const act31 = document.getElementById("act-3-1");
const act32 = document.getElementById("act-3-2");
const act33 = document.getElementById("act-3-3");
const act34 = document.getElementById("act-3-4");
const act35 = document.getElementById("act-3-5");
const act36 = document.getElementById("act-3-6");
const act37 = document.getElementById("act-3-7");
const act41 = document.getElementById("act-4-1");
const act42 = document.getElementById("act-4-2");
const act43 = document.getElementById("act-4-3");
const act44 = document.getElementById("act-4-4");
const act45 = document.getElementById("act-4-5");
const act46 = document.getElementById("act-4-6");
const act47 = document.getElementById("act-4-7");
const act51 = document.getElementById("act-5-1");
const act52 = document.getElementById("act-5-2");
const act53 = document.getElementById("act-5-3");
const act54 = document.getElementById("act-5-4");
const act55 = document.getElementById("act-5-5");
const act56 = document.getElementById("act-5-6");
const act57 = document.getElementById("act-5-7");
const act61 = document.getElementById("act-6-1");
const act62 = document.getElementById("act-6-2");
const act63 = document.getElementById("act-6-3");
const act64 = document.getElementById("act-6-4");
const act65 = document.getElementById("act-6-5");
const act66 = document.getElementById("act-6-6");
const act67 = document.getElementById("act-6-7");
const act71 = document.getElementById("act-7-1");
const act72 = document.getElementById("act-7-2");
const act73 = document.getElementById("act-7-3");
const act74 = document.getElementById("act-7-4");
const act75 = document.getElementById("act-7-5");
const act76 = document.getElementById("act-7-6");
const act77 = document.getElementById("act-7-7");
const act81 = document.getElementById("act-8-1");
const act82 = document.getElementById("act-8-2");
const act83 = document.getElementById("act-8-3");
const act84 = document.getElementById("act-8-4");
const act85 = document.getElementById("act-8-5");
const act86 = document.getElementById("act-8-6");
const act87 = document.getElementById("act-8-7");
const input = document.querySelector("input");
let date = new Date();
var lunes = document.getElementById("lun");
var martes = document.getElementById("mar");
var miercoles = document.getElementById("mie");
var jueves = document.getElementById("jue");
var viernes = document.getElementById("vie");
var sabado = document.getElementById("sab");
var domingo = document.getElementById("dom");

//===================================PRIMERO=======================================
btnSwitch0.addEventListener("click", function () {
  uno.classList.toggle("act1");
  btnSwitch0.classList.toggle("active");
  act11.classList.toggle("line");
  act21.classList.toggle("line");
  act31.classList.toggle("line");
  act41.classList.toggle("line");
  act51.classList.toggle("line");
  act61.classList.toggle("line");
  act71.classList.toggle("line");
  act81.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (uno.classList.contains("act1")) {
    localStorage.setItem("a1", "true");
  } else {
    localStorage.setItem("a1", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a1") === "true") {
  uno.classList.add("act1");
  btnSwitch0.classList.add("active");
  act11.classList.add("line");
  act21.classList.add("line");
  act31.classList.add("line");
  act41.classList.add("line");
  act51.classList.add("line");
  act61.classList.add("line");
  act71.classList.add("line");
  act81.classList.add("line");
} else {
  uno.classList.remove("act1");
  btnSwitch0.classList.remove("active");
  act11.classList.remove("line");
  act21.classList.remove("line");
  act31.classList.remove("line");
  act41.classList.remove("line");
  act51.classList.remove("line");
  act61.classList.remove("line");
  act71.classList.remove("line");
  act81.classList.remove("line");
}

//===================================SEGUNDO=======================================

btnSwitch1.addEventListener("click", function () {
  dos.classList.toggle("act2");
  btnSwitch1.classList.toggle("active");
  act12.classList.toggle("line");
  act22.classList.toggle("line");
  act32.classList.toggle("line");
  act42.classList.toggle("line");
  act52.classList.toggle("line");
  act62.classList.toggle("line");
  act72.classList.toggle("line");
  act82.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (dos.classList.contains("act2")) {
    localStorage.setItem("a2", "true");
  } else {
    localStorage.setItem("a2", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a2") === "true") {
  dos.classList.add("act2");
  btnSwitch1.classList.add("active");
  act12.classList.add("line");
  act22.classList.add("line");
  act32.classList.add("line");
  act42.classList.add("line");
  act52.classList.add("line");
  act62.classList.add("line");
  act72.classList.add("line");
  act82.classList.add("line");
} else {
  dos.classList.remove("act2");
  btnSwitch1.classList.remove("active");
  act12.classList.remove("line");
  act22.classList.remove("line");
  act32.classList.remove("line");
  act42.classList.remove("line");
  act52.classList.remove("line");
  act52.classList.remove("line");
  act62.classList.remove("line");
  act72.classList.remove("line");
  act82.classList.remove("line");
}

//===================================TERCERO=======================================

btnSwitch2.addEventListener("click", function () {
  tres.classList.toggle("act3");
  btnSwitch2.classList.toggle("active");
  act13.classList.toggle("line");
  act23.classList.toggle("line");
  act33.classList.toggle("line");
  act43.classList.toggle("line");
  act53.classList.toggle("line");
  act63.classList.toggle("line");
  act73.classList.toggle("line");
  act83.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (tres.classList.contains("act3")) {
    localStorage.setItem("a3", "true");
  } else {
    localStorage.setItem("a3", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a3") === "true") {
  tres.classList.add("act3");
  btnSwitch2.classList.add("active");
  act13.classList.add("line");
  act23.classList.add("line");
  act33.classList.add("line");
  act43.classList.add("line");
  act53.classList.add("line");
  act63.classList.add("line");
  act73.classList.add("line");
  act83.classList.add("line");
} else {
  tres.classList.remove("act3");
  btnSwitch2.classList.remove("active");
  act13.classList.remove("line");
  act23.classList.remove("line");
  act33.classList.remove("line");
  act43.classList.remove("line");
  act53.classList.remove("line");
  act63.classList.remove("line");
  act73.classList.remove("line");
  act83.classList.remove("line");
}

//===================================CUARTO=======================================

btnSwitch3.addEventListener("click", function () {
  cuatro.classList.toggle("act4");
  btnSwitch3.classList.toggle("active");
  act14.classList.toggle("line");
  act24.classList.toggle("line");
  act34.classList.toggle("line");
  act44.classList.toggle("line");
  act54.classList.toggle("line");
  act64.classList.toggle("line");
  act74.classList.toggle("line");
  act84.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (cuatro.classList.contains("act4")) {
    localStorage.setItem("a4", "true");
  } else {
    localStorage.setItem("a4", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a4") === "true") {
  cuatro.classList.add("act4");
  btnSwitch3.classList.add("active");
  act14.classList.add("line");
  act24.classList.add("line");
  act34.classList.add("line");
  act44.classList.add("line");
  act54.classList.add("line");
  act64.classList.add("line");
  act74.classList.add("line");
  act84.classList.add("line");
} else {
  cuatro.classList.remove("act4");
  btnSwitch3.classList.remove("active");
  act14.classList.remove("line");
  act24.classList.remove("line");
  act34.classList.remove("line");
  act44.classList.remove("line");
  act54.classList.remove("line");
  act64.classList.remove("line");
  act74.classList.remove("line");
  act84.classList.remove("line");
}

//===================================QUINTO=======================================

btnSwitch4.addEventListener("click", function () {
  cuatro.classList.toggle("act5");
  btnSwitch4.classList.toggle("active");
  act15.classList.toggle("line");
  act25.classList.toggle("line");
  act35.classList.toggle("line");
  act45.classList.toggle("line");
  act55.classList.toggle("line");
  act65.classList.toggle("line");
  act75.classList.toggle("line");
  act85.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (cuatro.classList.contains("act5")) {
    localStorage.setItem("a5", "true");
  } else {
    localStorage.setItem("a5", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a5") === "true") {
  cuatro.classList.add("act5");
  btnSwitch4.classList.add("active");
  act15.classList.add("line");
  act25.classList.add("line");
  act35.classList.add("line");
  act45.classList.add("line");
  act55.classList.add("line");
  act65.classList.add("line");
  act75.classList.add("line");
  act85.classList.add("line");
} else {
  cuatro.classList.remove("act5");
  btnSwitch4.classList.remove("active");
  act15.classList.remove("line");
  act25.classList.remove("line");
  act35.classList.remove("line");
  act45.classList.remove("line");
  act55.classList.remove("line");
  act65.classList.remove("line");
  act75.classList.remove("line");
  act85.classList.remove("line");
}

//===================================SEIS=======================================

btnSwitch5.addEventListener("click", function () {
  cuatro.classList.toggle("act6");
  btnSwitch5.classList.toggle("active");
  act16.classList.toggle("line");
  act26.classList.toggle("line");
  act36.classList.toggle("line");
  act46.classList.toggle("line");
  act56.classList.toggle("line");
  act66.classList.toggle("line");
  act76.classList.toggle("line");
  act86.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (cuatro.classList.contains("act6")) {
    localStorage.setItem("a6", "true");
  } else {
    localStorage.setItem("a6", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a6") === "true") {
  cuatro.classList.add("act6");
  btnSwitch5.classList.add("active");
  act16.classList.add("line");
  act26.classList.add("line");
  act36.classList.add("line");
  act46.classList.add("line");
  act56.classList.add("line");
  act66.classList.add("line");
  act76.classList.add("line");
  act86.classList.add("line");
} else {
  cuatro.classList.remove("act6");
  btnSwitch5.classList.remove("active");
  act16.classList.remove("line");
  act26.classList.remove("line");
  act36.classList.remove("line");
  act46.classList.remove("line");
  act56.classList.remove("line");
  act66.classList.remove("line");
  act76.classList.remove("line");
  act86.classList.remove("line");
}

//===================================SEPTIMO=======================================

btnSwitch6.addEventListener("click", function () {
  cuatro.classList.toggle("act7");
  btnSwitch6.classList.toggle("active");
  act17.classList.toggle("line");
  act27.classList.toggle("line");
  act37.classList.toggle("line");
  act47.classList.toggle("line");
  act57.classList.toggle("line");
  act67.classList.toggle("line");
  act77.classList.toggle("line");
  act87.classList.toggle("line");

  // Guardamos el modo en localstorage.
  if (cuatro.classList.contains("act7")) {
    localStorage.setItem("a7", "true");
  } else {
    localStorage.setItem("a7", "false");
  }
});

// Obtenemos el modo actual.
if (localStorage.getItem("a7") === "true") {
  cuatro.classList.add("act7");
  btnSwitch6.classList.add("active");
  act17.classList.add("line");
  act27.classList.add("line");
  act37.classList.add("line");
  act47.classList.add("line");
  act57.classList.add("line");
  act67.classList.add("line");
  act77.classList.add("line");
  act87.classList.add("line");
} else {
  cuatro.classList.remove("act7");
  btnSwitch6.classList.remove("active");
  act17.classList.remove("line");
  act27.classList.remove("line");
  act37.classList.remove("line");
  act47.classList.remove("line");
  act57.classList.remove("line");
  act67.classList.remove("line");
  act77.classList.remove("line");
  act87.classList.remove("line");
}

//===================================REINICIAR========================================

const reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function () {
  if (btnSwitch0.disabled == true && btnSwitch0.classList.contains("active")) {
    btnSwitch0.classList.add("active");
    act11.classList.add("line");
    act21.classList.add("line");
    act31.classList.add("line");
    act41.classList.add("line");
    act51.classList.add("line");
    act61.classList.add("line");
    act71.classList.add("line");
    act81.classList.add("line");
  } else {
    btnSwitch0.classList.remove("active");
    act11.classList.remove("line");
    act21.classList.remove("line");
    act31.classList.remove("line");
    act41.classList.remove("line");
    act51.classList.remove("line");
    act61.classList.remove("line");
    act71.classList.remove("line");
    act81.classList.remove("line");
  }
  if (btnSwitch1.disabled == true && btnSwitch1.classList.contains("active")) {
    btnSwitch1.classList.add("active");
    act12.classList.add("line");
    act22.classList.add("line");
    act32.classList.add("line");
    act42.classList.add("line");
    act52.classList.add("line");
    act62.classList.add("line");
    act72.classList.add("line");
    act82.classList.add("line");
  } else {
    btnSwitch1.classList.remove("active");
    act12.classList.remove("line");
    act22.classList.remove("line");
    act32.classList.remove("line");
    act42.classList.remove("line");
    act52.classList.remove("line");
    act62.classList.remove("line");
    act72.classList.remove("line");
    act82.classList.remove("line");
  }
  if (btnSwitch2.disabled == true && btnSwitch2.classList.contains("active")) {
    btnSwitch2.classList.add("active");
    act13.classList.add("line");
    act23.classList.add("line");
    act33.classList.add("line");
    act43.classList.add("line");
    act53.classList.add("line");
    act63.classList.add("line");
    act73.classList.add("line");
    act83.classList.add("line");
  } else {
    btnSwitch2.classList.remove("active");
    act13.classList.remove("line");
    act23.classList.remove("line");
    act33.classList.remove("line");
    act43.classList.remove("line");
    act53.classList.remove("line");
    act63.classList.remove("line");
    act73.classList.remove("line");
    act83.classList.remove("line");
  }
  if (btnSwitch3.disabled == true && btnSwitch3.classList.contains("active")) {
    btnSwitch3.classList.add("active");
    act14.classList.add("line");
    act24.classList.add("line");
    act34.classList.add("line");
    act44.classList.add("line");
    act54.classList.add("line");
    act64.classList.add("line");
    act74.classList.add("line");
    act84.classList.add("line");
  } else {
    btnSwitch3.classList.remove("active");
    act14.classList.remove("line");
    act24.classList.remove("line");
    act34.classList.remove("line");
    act44.classList.remove("line");
    act54.classList.remove("line");
    act64.classList.remove("line");
    act74.classList.remove("line");
    act84.classList.remove("line");
  }
  if (btnSwitch4.disabled == true && btnSwitch4.classList.contains("active")) {
    btnSwitch4.classList.add("active");
    act15.classList.add("line");
    act25.classList.add("line");
    act35.classList.add("line");
    act45.classList.add("line");
    act55.classList.add("line");
    act65.classList.add("line");
    act75.classList.add("line");
    act85.classList.add("line");
  } else {
    btnSwitch4.classList.remove("active");
    act15.classList.remove("line");
    act25.classList.remove("line");
    act35.classList.remove("line");
    act45.classList.remove("line");
    act55.classList.remove("line");
    act65.classList.remove("line");
    act75.classList.remove("line");
    act85.classList.remove("line");
  }
  if (btnSwitch5.disabled == true && btnSwitch5.classList.contains("active")) {
    btnSwitch5.classList.add("active");
    act16.classList.add("line");
    act26.classList.add("line");
    act36.classList.add("line");
    act46.classList.add("line");
    act56.classList.add("line");
    act66.classList.add("line");
    act76.classList.add("line");
    act86.classList.add("line");
  } else {
    btnSwitch5.classList.remove("active");
    act16.classList.remove("line");
    act26.classList.remove("line");
    act36.classList.remove("line");
    act46.classList.remove("line");
    act56.classList.remove("line");
    act66.classList.remove("line");
    act76.classList.remove("line");
    act86.classList.remove("line");
  }
  if (btnSwitch6.disabled == true && btnSwitch6.classList.contains("active")) {
    btnSwitch6.classList.add("active");
    act17.classList.add("line");
    act27.classList.add("line");
    act37.classList.add("line");
    act47.classList.add("line");
    act57.classList.add("line");
    act67.classList.add("line");
    act77.classList.add("line");
    act87.classList.add("line");
  } else {
    btnSwitch6.classList.remove("active");
    act17.classList.remove("line");
    act27.classList.remove("line");
    act37.classList.remove("line");
    act47.classList.remove("line");
    act57.classList.remove("line");
    act67.classList.remove("line");
    act77.classList.remove("line");
    act87.classList.remove("line");
  }
  if (btnSwitch0.classList.contains("active")) {
    localStorage.setItem("a1", "true");
  } else {
    localStorage.setItem("a1", "false");
  }
  if (btnSwitch1.classList.contains("active")) {
    localStorage.setItem("a2", "true");
  } else {
    localStorage.setItem("a2", "false");
  }
  if (btnSwitch2.classList.contains("active")) {
    localStorage.setItem("a3", "true");
  } else {
    localStorage.setItem("a3", "false");
  }
  if (btnSwitch3.classList.contains("active")) {
    localStorage.setItem("a4", "true");
  } else {
    localStorage.setItem("a4", "false");
  }
  if (btnSwitch4.classList.contains("active")) {
    localStorage.setItem("a5", "true");
  } else {
    localStorage.setItem("a5", "false");
  }
  if (btnSwitch5.classList.contains("active")) {
    localStorage.setItem("a6", "true");
  } else {
    localStorage.setItem("a6", "false");
  }
  if (btnSwitch6.classList.contains("active")) {
    localStorage.setItem("a7", "true");
  } else {
    localStorage.setItem("a7", "false");
  }
});

if (date.getDay() == 1) {
  btnSwitch0.disabled = true;
}

if (date.getDay() == 2) {
  btnSwitch0.disabled = true;
  btnSwitch1.disabled = true;
}

if (date.getDay() == 3) {
  btnSwitch0.disabled = true;
  btnSwitch1.disabled = true;
  btnSwitch2.disabled = true;
}
if (date.getDay() == 4) {
  btnSwitch0.disabled = true;
  btnSwitch1.disabled = true;
  btnSwitch2.disabled = true;
  btnSwitch3.disabled = true;
}

if (date.getDay() == 5) {
  btnSwitch0.disabled = true;
  btnSwitch1.disabled = true;
  btnSwitch2.disabled = true;
  btnSwitch3.disabled = true;
  btnSwitch4.disabled = true;
}

if (new Date().getDay() == 6) {
  btnSwitch0.disabled = true;
  btnSwitch1.disabled = true;
  btnSwitch2.disabled = true;
  btnSwitch3.disabled = true;
  btnSwitch4.disabled = true;
  btnSwitch5.disabled = true;
}

if (date.getDay() == 7) {
  btnSwitch0.disabled = true;
  btnSwitch1.disabled = true;
  btnSwitch2.disabled = true;
  btnSwitch3.disabled = true;
  btnSwitch4.disabled = true;
  btnSwitch5.disabled = true;
  btnSwitch6.disabled = true;
}

if (date.getDay() == 7 && date.getHours() == 12) {
  btnSwitch0.disabled = false;
  btnSwitch1.disabled = false;
  btnSwitch2.disabled = false;
  btnSwitch3.disabled = false;
  btnSwitch4.disabled = false;
  btnSwitch5.disabled = false;
  btnSwitch6.disabled = false;
  reiniciar();
}

if (
  btnSwitch0.classList.contains("active") &&
  date.getDay() == 1 &&
  date.getHours() >= 8
) {
  lunes.style.background = "#0cc141";
}

if (btnSwitch1.classList.contains("active") && date.getDay() == 2) {
  martes.style.background = "#0cc141";
  if (btnSwitch0.classList.contains("active")) {
    lunes.style.background = "#0cc141";
  } else {
    lunes.style.background = "#ff0000";
  }
}

if (btnSwitch2.classList.contains("active") && date.getDay() == 3) {
  miercoles.style.background = "#0cc141";
  if (btnSwitch0.classList.contains("active")) {
    lunes.style.background = "#0cc141";
  } else {
    lunes.style.background = "#ff0000";
  }
  if (btnSwitch1.classList.contains("active")) {
    martes.style.background = "#0cc141";
  } else {
    martes.style.background = "#ff0000";
  }
}

if (btnSwitch3.classList.contains("active") && date.getDay() == 4) {
  jueves.style.background = "#0cc141";
  if (btnSwitch0.classList.contains("active")) {
    lunes.style.background = "#0cc141";
  } else {
    lunes.style.background = "#ff0000";
  }
  if (btnSwitch1.classList.contains("active")) {
    martes.style.background = "#0cc141";
  } else {
    martes.style.background = "#ff0000";
  }
  if (btnSwitch2.classList.contains("active")) {
    miercoles.style.background = "#0cc141";
  } else {
    miercoles.style.background = "#ff0000";
  }
}

if (btnSwitch4.classList.contains("active") && date.getDay() == 5) {
  viernes.style.background = "#0cc141";
  if (btnSwitch0.classList.contains("active")) {
    lunes.style.background = "#0cc141";
  } else {
    lunes.style.background = "#ff0000";
  }
  if (btnSwitch1.classList.contains("active")) {
    martes.style.background = "#0cc141";
  } else {
    martes.style.background = "#ff0000";
  }
  if (btnSwitch2.classList.contains("active")) {
    miercoles.style.background = "#0cc141";
  } else {
    miercoles.style.background = "#ff0000";
  }
  if (btnSwitch3.classList.contains("active")) {
    jueves.style.background = "#0cc141";
  } else {
    jueves.style.background = "#ff0000";
  }
}

if (btnSwitch5.classList.contains("active") && date.getDay() == 6) {
  sabado.style.background = "#0cc141";
  if (btnSwitch0.classList.contains("active")) {
    lunes.style.background = "#0cc141";
  } else {
    lunes.style.background = "#ff0000";
  }
  if (btnSwitch1.classList.contains("active")) {
    martes.style.background = "#0cc141";
  } else {
    martes.style.background = "#ff0000";
  }
  if (btnSwitch2.classList.contains("active")) {
    miercoles.style.background = "#0cc141";
  } else {
    miercoles.style.background = "#ff0000";
  }
  if (btnSwitch3.classList.contains("active")) {
    jueves.style.background = "#0cc141";
  } else {
    jueves.style.background = "#ff0000";
  }
  if (btnSwitch4.classList.contains("active")) {
    viernes.style.background = "#0cc141";
  } else {
    viernes.style.background = "#ff0000";
  }
}

if (btnSwitch6.classList.contains("active") && date.getDay() == 7) {
  domingo.style.background = "#0cc141";
  if (btnSwitch0.classList.contains("active")) {
    lunes.style.background = "#0cc141";
  } else {
    lunes.style.background = "#ff0000";
  }
  if (btnSwitch1.classList.contains("active")) {
    martes.style.background = "#0cc141";
  } else {
    martes.style.background = "#ff0000";
  }
  if (btnSwitch2.classList.contains("active")) {
    miercoles.style.background = "#0cc141";
  } else {
    miercoles.style.background = "#ff0000";
  }
  if (btnSwitch3.classList.contains("active")) {
    jueves.style.background = "#0cc141";
  } else {
    jueves.style.background = "#ff0000";
  }
  if (btnSwitch4.classList.contains("active")) {
    viernes.style.background = "#0cc141";
  } else {
    viernes.style.background = "#ff0000";
  }
  if (btnSwitch5.classList.contains("active")) {
    sabado.style.background = "#0cc141";
  } else {
    sabado.style.background = "#ff0000";
  }
}


