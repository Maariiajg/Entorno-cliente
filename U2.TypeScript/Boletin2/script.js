var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ============ 1. Cambiar título ============
function cambiar_titulo() {
    var titulo = prompt("Introduce un nuevo título:");
    if (titulo) {
        var nodoTitulo = document.getElementById("titulo");
        nodoTitulo.textContent = titulo;
    }
}
// ============ 2. Cambiar fondo ============
function cambiar_fondo() {
    var body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}
// ============ 3. Analiza edad ============
function analiza_edad() {
    var input = document.getElementById("edad");
    var edad = Number(input.value);
    if (isNaN(edad) || edad < 0) {
        alert("Introduce una edad válida");
        return;
    }
    var lista = document.getElementById("resultado");
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";
    // a) Mayor o menor
    var mayorMenor = document.createElement("li");
    mayorMenor.textContent = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    // b) Par o impar
    var parImpar = document.createElement("li");
    parImpar.textContent = edad % 2 === 0 ? "Tu edad es par" : "Tu edad es impar";
    // c) Divisores
    var divisores = [];
    for (var i = 1; i <= edad; i++) {
        if (edad % i === 0)
            divisores.push(i);
    }
    var listaDivisores = document.createElement("li");
    listaDivisores.textContent = "Los divisores de tu edad son: ".concat(divisores.join(", "));
    // d) Clasificación por edad
    var rangoEdad = "";
    if (edad < 15)
        rangoEdad = "Niño";
    else if (edad < 30)
        rangoEdad = "Joven";
    else if (edad < 60)
        rangoEdad = "Adulto";
    else
        rangoEdad = "Mayor";
    var edadTexto = document.createElement("li");
    edadTexto.textContent = "Seg\u00FAn tu edad eres: ".concat(rangoEdad);
    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}
// ============ 4. Saludo y color ============
function cambiar_nombre() {
    var name = prompt("Introduce tu nombre:");
    if (name) {
        var saludo = document.getElementById("saludo");
        saludo.textContent = "Hola, ".concat(name, "!");
    }
}
function cambiar_color() {
    var select = document.getElementById("color");
    var color = select.value;
    var saludo = document.getElementById("saludo");
    saludo.style.color = color;
}
// ============ 5. Información del navegador ============
function info_navegador() {
    var option = document.getElementById("option").value.toLowerCase();
    switch (option) {
        case "a":
            console.log("Idioma del navegador: " + navigator.language);
            break;
        case "b":
            console.log("Nombre del navegador: " + navigator.userAgent);
            break;
        case "c":
            console.log("Cookies habilitadas: " + (navigator.cookieEnabled ? "Sí" : "No"));
            break;
        case "d":
            console.log("Tamaño de pantalla: " + window.innerWidth + "x" + window.innerHeight);
            break;
        default:
            console.error("Opción no válida. Usa a, b, c o d.");
    }
}
// ============ 6. Mini navegador ============
function navegar() {
    var inputUrl = document.getElementById("url");
    var url = inputUrl.value.trim();
    if (!url) {
        alert("Introduce una URL");
        return;
    }
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }
    window.location.href = url;
}
// ============ 7. Reloj digital ============
function actualizar_reloj() {
    var now = new Date();
    var hora = now.toLocaleTimeString();
    var reloj = document.getElementById("reloj");
    reloj.textContent = hora;
}
window.onload = function () { return setInterval(actualizar_reloj, 1000); };
// ============ 8. Lista de la compra ============
function count_elements() {
    var list = document.getElementById("shopping-list");
    console.log("Hay ".concat(list.childElementCount, " elementos."));
}
function add_element() {
    var text = prompt("Introduce el nuevo producto:");
    if (text) {
        var list = document.getElementById("shopping-list");
        var new_element = document.createElement("li");
        new_element.textContent = text;
        list.appendChild(new_element);
    }
}
function show_first_last_element() {
    var _a, _b;
    var list = document.getElementById("shopping-list");
    console.log("Primer elemento:", (_a = list.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent);
    console.log("Último elemento:", (_b = list.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent);
}
function duplicate_element() {
    var list = document.getElementById("shopping-list");
    var id = Number(prompt("Número del producto a duplicar:"));
    if (isNaN(id) || id < 1 || id > list.childElementCount)
        return;
    var original = list.children[id - 1];
    var dupl = document.createElement("li");
    dupl.textContent = original.textContent;
    list.appendChild(dupl);
}
function edit_element() {
    var list = document.getElementById("shopping-list");
    var id = Number(prompt("Número del producto a editar:"));
    if (isNaN(id) || id < 1 || id > list.childElementCount)
        return;
    var nuevo = prompt("Nuevo valor del producto:");
    if (nuevo)
        list.children[id - 1].textContent = nuevo;
}
function delete_element() {
    var list = document.getElementById("shopping-list");
    var id = Number(prompt("Número del producto a eliminar:"));
    if (isNaN(id) || id < 1 || id > list.childElementCount)
        return;
    list.removeChild(list.children[id - 1]);
}
function show_elements() {
    var list = document.getElementById("shopping-list");
    __spreadArray([], list.children, true).forEach(function (el, i) {
        console.log("".concat(i + 1, ". ").concat(el.textContent));
    });
}
function sort_elements() {
    var list = document.getElementById("shopping-list");
    var items = __spreadArray([], list.children, true).map(function (el) { return el.textContent || ""; });
    items.sort(function (a, b) { return a.localeCompare(b); });
    list.innerHTML = "";
    items.forEach(function (text) {
        var li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    });
    console.log("Lista ordenada alfabéticamente.");
}
