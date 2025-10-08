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
    let vueltas;
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