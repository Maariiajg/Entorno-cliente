function formulario() {
    //recogemos los datos
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var edad = document.getElementById("edad");
    var telefono = document.getElementById("telefono");
    var direccion = document.getElementById("direccion");
    var inputFechaNacimiento = document.getElementById("fecha_nacimiento");
    var fechaNacimiento = new Date(inputFechaNacimiento.value);
    var url = document.getElementById("url");
    var select = document.getElementById("acciones");
    var accion = select.value;
    switch (accion) {
        case "nombre_invertido":
            //separa en array de caracteres
            var caracteres = nombre.value.split('');
            var caracteresInvertidos = caracteres.reverse();
            //Une el array invertido en una nueva cadena
            var palabraInvertida = caracteresInvertidos.join('');
            var palabraMayus = palabraInvertida.toUpperCase();
            var final = palabraMayus + "2006";
            $writeNode("hueco", final);
            break;
        case "redirigir_busqueda":
            var urlFinal = url.value;
            window.location.replace(urlFinal);
            break;
        case "mostrar_edad":
            var fechaActual = new Date();
            var anioActual = fechaActual.getFullYear();
            var anioNacimiento = fechaNacimiento.getFullYear;
            console.log(anioNacimiento);
            var edadPorFecha = Number(anioActual) - Number(anioNacimiento);
            console.log(edadPorFecha);
            //$writeNode("hueco", edadPorFecha);
            break;
        case "almacenar_datos":
            var cookieNombre = nombre.value;
            var cookieApellidos = apellidos.value;
            var cookieEdad = edad.value;
            var cookieTelefono = telefono.value;
            var cookieFechaNacimiento = inputFechaNacimiento.value;
            var cookieUrl = url.value;
            document.cookie = cookieNombre;
            document.cookie = cookieApellidos;
            document.cookie = cookieEdad;
            document.cookie = cookieTelefono;
            document.cookie = cookieFechaNacimiento;
            document.cookie = cookieUrl;
            break;
        default:
            $writeNode("error", "Algo falló");
            break;
    }
}
function $writeNode(id, msg) {
    var nodo = document.getElementById("hueco"); //Escritura
    if (nodo) {
        nodo.textContent = msg;
    }
}
