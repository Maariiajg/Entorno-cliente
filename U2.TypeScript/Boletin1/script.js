//Ejercicio 1
function ej1() {
    //No existe date primitivo
    var fecha = new Date();
    console.log("Hoy es: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log("Son las: " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora aaaaaaa: " + (fecha.getHours() + 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
    console.log("Hora antertior: " + (fecha.getHours() - 1) + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}
//Ejercicio 2: Función que valida un dato introducido por formulario para que cumpla con un patrón de email.
/** Los pasos para validar esto son:
             *  1-. Extraer la información desde el Input HTML
             *  2-. Crear la expresión regular para validar el dato recogido (Deslgosaremos parte por parte dicha expresión)
             *  3-. Controlar el resultado de la validación para informar al usuario
             *  4-. Definir un espacio "visible" dentro del formulario donde pintar la información
             *  5-. Vamos a pintar el mensaje aplicando un estilo (rojo -> error \ verde -> ok)
             *  6-. Como extra, vamos a hacer que el mensaje desaparezca automáticamente a los 5 segundos
         */
function valida_form() {
    var regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$"); //Con fallos (hay que corregir)
    //Aplico la validacion de la expresion regular
    if (regExp.test($inputValue("email"))) {
        //Si test devuelve true quiere decir que el texto "email" cumple la expresion reg.
        $writeNode("ok", "El email es valido"); //Aquí escribo
        $writeNode("error", ""); //Aquí escribo tambien (lo que pasa que borra)
    }
    else {
        //Si es false quiere decir que el texto "email" no cumple la expresion regular.
        $writeNode("ok", ""); //Aquí escribo (borrando el contenido)
        $writeNode("error", "El email no cumple la expresion"); //Aqui tambien escribo
    }
}
function ej3() {
    var ventanaNueva = window.open("https:www.google.es", "mi ventana");
    ventanaNueva === null || ventanaNueva === void 0 ? void 0 : ventanaNueva.document.write("HOLA");
} //No se puede el ejercicio porque es demasiado invasivo
function redirect_to() {
    var regexp = new RegExp("^https:\/\/");
    var url = $inputValue("url");
    if (regexp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error", "Introduce una URL valida"); //Aqui tambien escribo
        setTimeout(function () { return $writeNode("error", ""); }, 5000);
    }
    window.location.href = url;
}
//Helpers (comunes para todo el boletín)
function $inputValue(id) {
    var input = document.getElementById(id); //Lectura
    var result = "";
    if (input) {
        result = input.value; //Recojo el valor (aqui es donde leo)
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
