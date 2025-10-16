// ejercicio 1
function ej1() {
    //No existe date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear());
    console.log("Son las:" + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora enterior:" + (fecha.getHours() + 1) + ":" + (fecha.getMinutes() + 1) + ":" + (fecha.getSeconds() + 1));
    console.log("Hora enterior:" + (fecha.getHours() - 1) + ":" + (fecha.getMinutes() - 1) + ":" + (fecha.getSeconds() - 1));
}
//ejercicio 2
function ej2() {
    var expReg = new RegExp("lo_q_sea");
    var email = document.getElementById("email");
    //nos aseguramos de que no es nulo (xq no se puede almacenar un nulo en un HTMLInputElement)
    if (document.getElementById()) {
    }
}
