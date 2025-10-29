function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo titulo: ");
    var nodoTitulo = document.getElementById("titulo");
    nodoTitulo.textContent = titulo;
}
function cambiar_fondo() {
    //Por defecto el DOM ya tiene un atributo que representa el body
    var body = document.body;
    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}
function analiza_edad() {
    //Recojo el valor numerico desde el input con la edad del usuario
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    console.log(edad);
    //Creo el nodo <ol> raíz que contendra los elementos de la lista y modifico su estilo
    var lista = document.getElementById("resultado");
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";
    //a. Compruebo si es mayor o menor de edad
    var mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad > 18 ? "Eres mayor" : "Eres menor";
    //b. Compruebo si la edad es o no par
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 == 0 ? "La edad es par" : "La edad es impar";
    //c. Calcular divisores de la edad
    var divisores = "";
    for (var i = 1; i <= edad; i++) {
        if (edad % i == 0) {
            divisores += i + ", ";
        }
    }
    divisores = divisores.substring(0, divisores.length - 2); //Por culpa de Juan Antonio (M. Elite)
    var listaDivisores = document.createElement("li");
    listaDivisores.textContent = divisores;
    //d. Clasifica edad
    var rangoEdad = "";
    switch (true) {
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
    var edadTexto = document.createElement("li");
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
