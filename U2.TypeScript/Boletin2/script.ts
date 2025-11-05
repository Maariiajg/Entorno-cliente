// ============ 1. Cambiar título ============
function cambiar_titulo(): void {
    const titulo: string | null = prompt("Introduce un nuevo título:");
    if (titulo) {
        const nodoTitulo = document.getElementById("titulo") as HTMLHeadingElement;
        nodoTitulo.textContent = titulo;
    }
}

// ============ 2. Cambiar fondo ============
function cambiar_fondo(): void {
    const body = document.body as HTMLBodyElement;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

// ============ 3. Analiza edad ============
function analiza_edad(): void {
    const input = document.getElementById("edad") as HTMLInputElement;
    const edad: number = Number(input.value);

    if (isNaN(edad) || edad < 0) {
        alert("Introduce una edad válida");
        return;
    }

    const lista = document.getElementById("resultado") as HTMLOListElement;
    lista.innerHTML = "";
    lista.style.fontWeight = "bold";
    lista.style.color = "green";
    lista.type = "a";

    // a) Mayor o menor
    const mayorMenor = document.createElement("li") as HTMLLIElement;
    mayorMenor.textContent = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

    // b) Par o impar
    const parImpar = document.createElement("li") as HTMLLIElement;
    parImpar.textContent = edad % 2 === 0 ? "Tu edad es par" : "Tu edad es impar";

    // c) Divisores
    const divisores: number[] = [];
    for (let i = 1; i <= edad; i++) {
        if (edad % i === 0) divisores.push(i);
    }
    const listaDivisores = document.createElement("li") as HTMLLIElement;
    listaDivisores.textContent = `Los divisores de tu edad son: ${divisores.join(", ")}`;

    // d) Clasificación por edad
    let rangoEdad = "";
    if (edad < 15) rangoEdad = "Niño";
    else if (edad < 30) rangoEdad = "Joven";
    else if (edad < 60) rangoEdad = "Adulto";
    else rangoEdad = "Mayor";

    const edadTexto = document.createElement("li") as HTMLLIElement;
    edadTexto.textContent = `Según tu edad eres: ${rangoEdad}`;

    lista.appendChild(mayorMenor);
    lista.appendChild(parImpar);
    lista.appendChild(listaDivisores);
    lista.appendChild(edadTexto);
}

// ============ 4. Saludo y color ============
function cambiar_nombre(): void {
    const name: string | null = prompt("Introduce tu nombre:");
    if (name) {
        const saludo = document.getElementById("saludo") as HTMLParagraphElement;
        saludo.textContent = `Hola, ${name}!`;
    }
}

function cambiar_color(): void {
    const select = document.getElementById("color") as HTMLSelectElement;
    const color = select.value;
    const saludo = document.getElementById("saludo") as HTMLParagraphElement;
    saludo.style.color = color;
}

// ============ 5. Información del navegador ============
function info_navegador(): void {
    const option = (document.getElementById("option") as HTMLInputElement).value.toLowerCase();

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
function navegar(): void {
    const inputUrl = document.getElementById("url") as HTMLInputElement;
    let url = inputUrl.value.trim();
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
function actualizar_reloj(): void {
    const now = new Date();
    const hora = now.toLocaleTimeString();
    const reloj = document.getElementById("reloj") as HTMLParagraphElement;
    reloj.textContent = hora;
}
window.onload = () => setInterval(actualizar_reloj, 1000);

// ============ 8. Lista de la compra ============
function count_elements(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    console.log(`Hay ${list.childElementCount} elementos.`);
}

function add_element(): void {
    const text: string | null = prompt("Introduce el nuevo producto:");
    if (text) {
        const list = document.getElementById("shopping-list") as HTMLOListElement;
        const new_element = document.createElement("li") as HTMLLIElement;
        new_element.textContent = text;
        list.appendChild(new_element);
    }
}

function show_first_last_element(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    console.log("Primer elemento:", list.firstElementChild?.textContent);
    console.log("Último elemento:", list.lastElementChild?.textContent);
}

function duplicate_element(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    const id: number = Number(prompt("Número del producto a duplicar:"));
    if (isNaN(id) || id < 1 || id > list.childElementCount) return;

    const original = list.children[id - 1] as HTMLLIElement;
    const dupl = document.createElement("li") as HTMLLIElement;
    dupl.textContent = original.textContent;
    list.appendChild(dupl);
}

function edit_element(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    const id: number = Number(prompt("Número del producto a editar:"));
    if (isNaN(id) || id < 1 || id > list.childElementCount) return;

    const nuevo = prompt("Nuevo valor del producto:");
    if (nuevo) (list.children[id - 1] as HTMLLIElement).textContent = nuevo;
}

function delete_element(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    const id: number = Number(prompt("Número del producto a eliminar:"));
    if (isNaN(id) || id < 1 || id > list.childElementCount) return;
    list.removeChild(list.children[id - 1]);
}

function show_elements(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    [...list.children].forEach((el, i) => {
        console.log(`${i + 1}. ${(el as HTMLLIElement).textContent}`);
    });
}

function sort_elements(): void {
    const list = document.getElementById("shopping-list") as HTMLOListElement;
    const items: string[] = [...list.children].map(el => (el as HTMLLIElement).textContent || "");
    items.sort((a, b) => a.localeCompare(b));
    list.innerHTML = "";
    items.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    });
    console.log("Lista ordenada alfabéticamente.");
}
