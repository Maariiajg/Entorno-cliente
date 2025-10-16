let colores = [
    "#FFD1DC", 
    "#FFE5B4", 
    "#FFFACD", 
    "#BFD8B8", 
    "#AEC6CF", 
    "#CBAACB", 
    "#E3E4FA", 
    "#AAF0D1", 
    "#FF7F50", 
    "#FFD8B1"
];

let ejercicios = document.getElementsByClassName("ejercicio");

window.onload = function() {
    for(let i = 0; i < ejercicios.length; i++){
        let colorAleatorio = Math.random() * colores.length;
        ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
    }
};


function calcula_num_cifras(){
    let num = Number(prompt("Introduce un numero: "));
    let contador = 0;

    if(isNaN(num)){
        console.error("No has introducido un numero");
    }else if(num < 1){
        console.error("El numero no puede ser negativo ni 0");
    }else{
        while(num >= 1){
            num /= 10;
            contador++;
        }
    }

    console.log("EL numero tiene " + contador + " cifras");
    
}


function trianguloEscaleno(){
    // Pedir al usuario el número de filas del triángulo
    let numeroFilas = Number(prompt("Introduce el número de filas del triángulo equilátero:"), 10);

    // Comprobar que el valor introducido sea válido
    if (isNaN(numeroFilas) || numeroFilas < 1) {
    console.log("Por favor, introduce un número entero mayor que 0.");
    } else {
    // Llamar a la función
    dibujarTriangulo(numeroFilas);
    }


}

function dibujarTriangulo(filas) {
    for (let i = 1; i <= filas; i++) {
        let espacios = "";
        let puntos = "";

        // Generar los espacios a la izquierda
        for (let j = 1; j <= (filas - i); j++) {
        espacios = espacios + " ";
        }

        // Generar los puntos (asteriscos)
        for (let k = 1; k <= (2 * i - 1); k++) {
        puntos = puntos + "*";
        }

        // Mostrar la fila en la consola
        console.log(espacios + puntos);
    }
}


// ejercicio 3

function menu_3(){
    let opt = "";
    let num;
    let max = 0;
    let min = Infinity;
    let suma = 0;
    let vueltas = 0;
    do{
       opt = prompt("Que quieres hacer?"
            + "\n a. Introducir nuevo número"
            + "\n b. Calcular máximo"
            + "\n c. Calcular mínimo"
            + "\n d. Calcular media"
            + "\n e. Salir"
        );


        switch(opt){
            case "a":
                num = Number(prompt("Introduce un numero"));
                if(num < 0){
                    console.error("No puede ser negativo");
                }
                if(num < min){
                    min = num;
                }
                if(num > max){
                    max = num;
                }

                suma =+ num;
                vueltas ++;
                break;
            case "b":
                console.log("Calculando numero mayor...");
                console.log("El numero mayor es: " + max);
                break;
            case "c":
                console.log("Calculando numero menor...");
                console.log("El numero menor es: " + min);
                break;
            case "d":
                console.log("Calculando media...");
                let media = suma / vueltas;
                console.log("La media es: " + media);
                break;
            case "e":
                console.log("Saliendo...");
                break;
            default:
                console.log("El valor no es valido");
                break;
        }
    }while(opt != "e");
}


function notas_aleatorias(){
    let nota = Math.floor(Number(Math.random() * 10));

    if(nota >= 0 && nota <5){
        console.log(nota + ": Suspenso");
    }else if(nota === 5){
        console.log(nota + ": Suficiente");
    }else if(nota === 6){
        console.log(nota + ": Bien");
    }else if(nota >= 7 && nota < 9){
        console.log(nota + ": Notable");
    }else if(nota >= 9 && nota <= 10){
        console.log(nota + ": Sobresaliente");
    }else{
        console.error("Hubo un error con el random");
    }
}


/*function binario_decimal(){
    let binario = prompt("Dime tu binario");

    let decimal = parseInt(binario, 2);

    console.log("El binario " + binario + " equivale al decimal " + decimal);
}*/

function binario_decimal(){
    let binario = prompt("Dime tu binario");
    let decimal = 0;
    let potencia = 0;
    for(let i = binario.length - 1; i >= 0; i--){
        if(binario[i] == 1){
            decimal += Math.pow(2, potencia);
        }
        potencia++;
    }

    console.log("El binario " + binario + " equivale al decimal " + decimal);
}

function binario_decimal2(){
    let binario = prompt("Dime tu numero");
    let decimal = 0;
    for(let i = 0; i < binario.length, i++){
        if(binario[i] == 1){
            decimal += Math.pow() 
        }
    }
}













































//Simulacro examen, contraseña

const palabras = "abcdefghijklmnopqrstuvwxyz";
const caracteres = "1234567890()/=*#?";

function generarContrasena(fuerte) {
  // Pedimos longitud hasta recibir un entero válido mayor que 0
  let entrada;
  let n;
  do {
    entrada = prompt("Introduce el número de caracteres para la contraseña (entero > 0):");
    if (entrada === null) return null; // si el usuario cancela
    n = parseInt(entrada, 10);
  } while (isNaN(n) || n <= 0);

  // función auxiliar para elegir un carácter aleatorio de una cadena
  const aleatorioDe = (str) => str.charAt(Math.floor(Math.random() * str.length));

  // función auxiliar para barajar un array (Fisher–Yates)
  const mezclar = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  if (!fuerte) {
    // Débil: solo palabras (letras)
    let pass = "";
    for (let i = 0; i < n; i++) pass += aleatorioDe(palabras);
    return pass;
  } else {
    // Fuerte: debe contener palabra (letra), número y caracteres extraños
    // Aseguramos al menos un carácter de cada tipo cuando sea posible
    const letras = palabras;
    const extras = caracteres;
    const todo = letras + extras;

    const resultado = [];

    // Si la longitud permite, añadimos al menos una letra y al menos un extra
    if (n >= 1) resultado.push(aleatorioDe(letras));
    if (n >= 2) resultado.push(aleatorioDe(extras));

    // Rellenamos el resto con caracteres aleatorios de la unión
    while (resultado.length < n) resultado.push(aleatorioDe(todo));

    // Barajamos para que los tipos no queden siempre al inicio
    console.log(mezclar(resultado).join(""));
  }
}
