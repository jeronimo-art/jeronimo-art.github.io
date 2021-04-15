var idioma = window.navigator.language;

if (idioma == "es-ES") {
  location.href = "es/index.html";
}
if (idioma == "es") {
  location.href = "es/index.html";
}

if (idioma == "en-EN") {
  location.href = "en/index.html";
}
if (idioma == "en") {
  location.href = "en/index.html";
}

if (idioma != "en-EN" && idioma != "es-ES") {
  location.href = "en/index.html";
}