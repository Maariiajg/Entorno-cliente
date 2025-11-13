window.onload = () => {
    if($getCookieByKey("nombre") == "" || $getCookieByKey("nombre") == null){
        let nombre: string = prompt("Introduce tu nombre") as string;
        almacenarCookie("nombre", nombre);
    }
    
    let contadorVisitas = 1;
    almacenarCookie("visitas", String(contadorVisitas));
    contadorVisitas++;
    console.log(contadorVisitas);

    mostrarNombre();
    
    
}

 


function crearTarjeta(): void{
    let divPrincipal: HTMLDivElement = document.getElementById("resultados") as HTMLDivElement;
    let tarjeta: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    let id: number = Number($inputById("id").value) as number;
    let descripcion: string = $inputById("descripcion").value as string;
    let tipo: string = $inputById("tipos").value as string;
    let fecha: Date = new Date() as Date;

    tarjeta.textContent = "ID: " + id + " Descripcion: " + descripcion + " Tipo: " + tipo + " Fecha: " + fecha;
    //depende del tipo un color u otro
    if(tipo === "incidencia"){
        tarjeta.style.backgroundColor = "red"; 
        divPrincipal.appendChild(tarjeta);
    }else if(tipo === "tarea"){
        tarjeta.style.backgroundColor = "blue"; 
        divPrincipal.appendChild(tarjeta);
    }else if(tipo === "evento"){
        tarjeta.style.backgroundColor = "green"; 
        divPrincipal.appendChild(tarjeta);
    }
    


    
    

}

/*function generarEnlace(id: number): string{
    let enlaceFinal = " https://www.issues.com/" + id;
    return enlaceFinal;
}*/

//cookies
function almacenarCookie(clave:string, valor: string): void{
    document.cookie = clave + "=" + valor;
}
//mostrar nombre
function mostrarNombre(): void{
    let hueco = $inputById("mostrarNombre");
    hueco.textContent = "Bienvenido al dashboard de  " + $getCookieByKey("nombre") + "(" +$getCookieByKey("visitas") + ")";
}

//helper cookie
function $getCookieByKey(key: string): string{
    let arrayCookie: string[] = document.cookie.split(";"); //separamos toas las cookies por ; y las convertimos en array
    let result: string = "";
    for(let i: number = 0; i < arrayCookie.length; i++){
        let clave: string = arrayCookie[i].split("=")[0]; //separamos cada cookie en clave valor y en este caso cogemos la clave
        let valor: string = arrayCookie[i].split("=")[1]; //y aqui cogemos el valor
        if(clave.trim() == key){
            result = valor;
        }
    } 
     return result;
}

 //helper
function $inputById(id: string): HTMLInputElement{
    let input: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
    return input;
}

