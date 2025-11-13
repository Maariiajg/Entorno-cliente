/*Realiza un formulario que pida la edad a una persona. Al presionar el botón de envío
debemos recoger dicha edad en una variable numérica y mostrar en el documento el
siguiente texto: (Ten en cuenta que todo debe ser mostrado en una estructura de
lista ordenada por letras. En negrita y color verde)
a. Eres mayor/menor de edad
b. Tu edad es par/impar
c. Los divisores de tu edad son: N1, N2, N3….
d. Según tu edad eres: Niño (0-15), Joven (15-30), Adulto (30–60), Mayor (>60)*/
function menu() {
    mayorMenor();
    parImpar();
    divisores();
    segunEdad();
}
function mayorMenor() {
    var edad = Number($inputById("edad").value);
    var result = (edad < 18) ? "Eres menor de edad" : "Eres mayor de edad";
    $escribirLista(result);
}
function parImpar() {
    var edad = Number($inputById("edad").value);
    var result = (edad % 2 === 0) ? "Tu edad es par" : "Tu edad es impar";
    $escribirLista(result);
}
function divisores() {
    var edad = Number($inputById("edad").value);
    var result = "";
    for (var i = 1; i <= edad; i++) {
        if (edad % i === 0) {
            result += i + ", ";
        }
    }
    $escribirLista(result);
}
function segunEdad() {
    var edad = Number($inputById("edad").value);
    var result = "";
    if (edad >= 0 && edad <= 15) {
        result = "Eres un niño";
    }
    else if (edad > 15 && edad <= 30) {
        result = "Eres un joven";
    }
    else if (edad > 30 && edad <= 60) {
        result = "Eres un adulto";
    }
    else if (edad > 60) {
        result = "Eres mayor";
    }
    else {
        result = "edad no valida";
    }
    $escribirLista(result);
}
//helper
function $inputById(id) {
    var input = document.getElementById(id);
    return input;
}
function $escribirLista(texto) {
    var lista = document.getElementById("lista");
    var item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);
    lista.style.color = "green";
    lista.style.textDecoration = "bold";
    lista.type = "a";
}
