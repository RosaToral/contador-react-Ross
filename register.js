
//Validar que el navegador contiene la opción serviceWorker
//y registrar el propio
//Una vez registrado, hay que instalarlo
//Ir a serviceWorker,js
if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js");
}