function cambiar_titulo(){
    let titulo: string = prompt("Introduce un nuevo titulo: ") as string;
    let nodoTitulo: HTMLHeadingElement = document.getElementById("titulo") as HTMLHeadingElement;
    nodoTitulo.textContent = titulo; 
}

function cambiar_fondo(){
    //Por defecto el DOM ya tiene un atributo que representa el body
    let body: HTMLBodyElement = document.body as HTMLBodyElement;

    if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }

}

function analiza_edad(){

    //Recojo el valor numerico desde el input con la edad del usuario
    let input: HTMLInputElement = document.getElementById("edad") as HTMLInputElement;
    let edad: number = Number(input.value);
    console.log(edad);

    //Creo el nodo <ol> raíz que contendra los elementos de la lista y modifico su estilo
    let lista: HTMLOListElement = document.getElementById("resultado") as HTMLOListElement;
    lista.innerHTML ="";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";

    //a. Compruebo si es mayor o menor de edad
    let mayorMenor: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    mayorMenor.textContent = edad > 18? "Eres mayor" : "Eres menor";

    //b. Compruebo si la edad es o no par
    let parImpar: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    parImpar.textContent = edad %2 == 0? "La edad es par" : "La edad es impar";

    //c. Calcular divisores de la edad
    let divisores: string = "";

    for(let i = 1; i <= edad; i++){
        if(edad%i== 0){
            divisores += i + ", ";
        }
    }

    divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)

    let listaDivisores: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    listaDivisores.textContent = divisores;

    //d. Clasifica edad
    let rangoEdad ="";
    switch(true){
        case edad >= 0 && edad < 15:
            rangoEdad = "Niño";
            break;
        case edad >= 15 && edad < 30:
            rangoEdad = "Joven";
            break;
        case edad >= 30 && edad < 60:
            rangoEdad = "Adulto";
            break;
        case edad >= 60:
            rangoEdad = "Mayor";
            break;
        default:
            console.error("Edad no valida");
    }

    let edadTexto: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = rangoEdad;

    //Añado cada elemento, a, b, c....
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}



/*function saludar(){
    let input: HTMLInputElement = document.getElementById("nombre") as HTMLInputElement;
    let nombre = input;

    let lista: HTMLParagraphElement = document.getElementById("resultado") as HTMLParagraphElement;
    lista.appendChild("Hola, " + nombre);
}*/