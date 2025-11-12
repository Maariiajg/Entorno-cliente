
function formulario(): void{
    //recogemos los datos
    let nombre: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let apellidos: HTMLInputElement = document.getElementById("apellidos") as HTMLInputElement;
    let edad: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let telefono: HTMLInputElement = document.getElementById("telefono") as HTMLInputElement;
    let direccion: HTMLInputElement = document.getElementById("direccion") as HTMLInputElement;
    let inputFechaNacimiento: HTMLInputElement = document.getElementById("fecha_nacimiento") as HTMLInputElement;
    let fechaNacimiento = new Date(inputFechaNacimiento.value);
    let url: HTMLInputElement = document.getElementById("url") as HTMLInputElement;
    let select: HTMLSelectElement = document.getElementById("acciones") as HTMLSelectElement;
    let accion = select.value;
    

    switch(accion){
        case "nombre_invertido":
            //separa en array de caracteres
            let caracteres = nombre.value.split('');
            let caracteresInvertidos = caracteres.reverse();
            //Une el array invertido en una nueva cadena
            let palabraInvertida: string = caracteresInvertidos.join('');
            let palabraMayus = palabraInvertida.toUpperCase();
            let final = palabraMayus + "2006";
            $writeNode("hueco", final);
            break;

        case "redirigir_busqueda":
            let urlFinal = url.value;
            window.location.replace(urlFinal);
            break;

        case "mostrar_edad":
            const fechaActual = new Date();
            const anioActual = fechaActual.getFullYear();
            
            let anioNacimiento = fechaNacimiento.getFullYear;
            console.log(anioNacimiento);
            let edadPorFecha = Number(anioActual) - Number(anioNacimiento);
            console.log(edadPorFecha);
            //$writeNode("hueco", edadPorFecha);
            break;

        case "almacenar_datos":
            let cookieNombre: string = nombre.value;
            let cookieApellidos: string = apellidos.value;
            let cookieEdad: string = edad.value;
            let cookieTelefono: string = telefono.value;
            let cookieFechaNacimiento: string = inputFechaNacimiento.value;
            let cookieUrl: string = url.value;

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

function $writeNode (id: string, msg: string) : void {
    const nodo = document.getElementById("hueco") as HTMLElement; //Escritura

    if(nodo){
        nodo.textContent = msg;
    }

}



