/*Realiza un formulario que pida la edad a una persona. Al presionar el botón de envío
debemos recoger dicha edad en una variable numérica y mostrar en el documento el
siguiente texto: (Ten en cuenta que todo debe ser mostrado en una estructura de
lista ordenada por letras. En negrita y color verde)
a. Eres mayor/menor de edad
b. Tu edad es par/impar
c. Los divisores de tu edad son: N1, N2, N3….
d. Según tu edad eres: Niño (0-15), Joven (15-30), Adulto (30–60), Mayor (>60)*/

function menu(): void{
    mayorMenor();
    parImpar();
    divisores();
    segunEdad();
}

function mayorMenor(): void{
    let edad: number = Number($inputById("edad").value);
    let result = (edad < 18) ? "Eres menor de edad":"Eres mayor de edad";
    $escribirLista(result);
}

function parImpar(): void{
    let edad: number = Number($inputById("edad").value);
    let result = (edad % 2 === 0) ? "Tu edad es par":"Tu edad es impar";
    $escribirLista(result);
}

function divisores(): void{
    let edad: number = Number($inputById("edad").value);
    let result: string = "";

    for(let i = 1; i <= edad; i++){
        if(edad % i === 0){
            result += i + ", ";
        }
    }

    $escribirLista(result);
}

function segunEdad(){
    let edad: number = Number($inputById("edad").value);
    let result: string = "";
    if(edad >= 0 && edad <= 15){
        result = "Eres un niño";
    }else if(edad > 15 && edad <= 30){
        result = "Eres un joven";
    }else if(edad > 30 && edad <= 60){
        result = "Eres un adulto";
    }else if(edad > 60){
        result = "Eres mayor";
    }else{
        result = "edad no valida";
    }
    $escribirLista(result);
}



//helper
function $inputById(id: string): HTMLInputElement{
    let input: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
    return input;
}

function $escribirLista(texto: string): void{
    let lista: HTMLOListElement = document.getElementById("lista") as HTMLOListElement;
    let item: HTMLLIElement = document.createElement("li") as HTMLLIElement;
    item.textContent = texto;
    lista.appendChild(item);
    lista.style.color = "green";
    lista.style.textDecoration = "bold";
    lista.type = "a";
}