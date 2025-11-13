window.onload = function () {
    if ($getCookieByKey("nombre") == "" || $getCookieByKey("nombre") == null) {
        var nombre = prompt("Introduce tu nombre");
        almacenarCookie("nombre", nombre);
    }
    var contadorVisitas = 1;
    almacenarCookie("visitas", String(contadorVisitas));
    contadorVisitas++;
    console.log(contadorVisitas);
    mostrarNombre();
};
function crearTarjeta() {
    var divPrincipal = document.getElementById("resultados");
    var tarjeta = document.createElement("div");
    var id = Number($inputById("id").value);
    var descripcion = $inputById("descripcion").value;
    var tipo = $inputById("tipos").value;
    var fecha = new Date();
    tarjeta.textContent = "ID: " + id + " Descripcion: " + descripcion + " Tipo: " + tipo + " Fecha: " + fecha;
    //depende del tipo un color u otro
    if (tipo === "incidencia") {
        tarjeta.style.backgroundColor = "red";
        divPrincipal.appendChild(tarjeta);
    }
    else if (tipo === "tarea") {
        tarjeta.style.backgroundColor = "blue";
        divPrincipal.appendChild(tarjeta);
    }
    else if (tipo === "evento") {
        tarjeta.style.backgroundColor = "green";
        divPrincipal.appendChild(tarjeta);
    }
}
/*function generarEnlace(id: number): string{
    let enlaceFinal = " https://www.issues.com/" + id;
    return enlaceFinal;
}*/
//cookies
function almacenarCookie(clave, valor) {
    document.cookie = clave + "=" + valor;
}
//mostrar nombre
function mostrarNombre() {
    var hueco = $inputById("mostrarNombre");
    hueco.textContent = "Bienvenido al dashboard de  " + $getCookieByKey("nombre") + "(" + $getCookieByKey("visitas") + ")";
}
//helper cookie
function $getCookieByKey(key) {
    var arrayCookie = document.cookie.split(";"); //separamos toas las cookies por ; y las convertimos en array
    var result = "";
    for (var i = 0; i < arrayCookie.length; i++) {
        var clave = arrayCookie[i].split("=")[0]; //separamos cada cookie en clave valor y en este caso cogemos la clave
        var valor = arrayCookie[i].split("=")[1]; //y aqui cogemos el valor
        if (clave.trim() == key) {
            result = valor;
        }
    }
    return result;
}
//helper
function $inputById(id) {
    var input = document.getElementById(id);
    return input;
}
