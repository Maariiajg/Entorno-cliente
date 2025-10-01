//variables globales
var nombre = "";
var edad = 0;
var contador = 0; //veces que he tirado los dados
var media_puntos = 0;
var valor_max = 0;
var valor_min = 6;
var tiempo = 0;



function menu(){
    
    let pulsado = false;
    let opcion = "";
    do{
        opcion = prompt("Que quieres hacer?"
            + "\n A. Iniciar juego"
            + "\n B. Lanzar dados"
            + "\n C. Mostrar estadisticas de juego"
            + "\n D. Salir"
        );

        switch(opcion){
            case "A":
                pulsado = true;
                console.log("Iniciando juego...");
                iniciar_juego();
                break;
            case "B":
                if (pulsado === true){
                    console.log("Lanzando dados...");
                    lanzar_dados();
                }else{
                    console.error("No has iniciado el juego");
                }
                
                break;
            case "C":
                if (pulsado === true){
                    console.log("Mostrando estadísticas...");
                    mostrar_estadisticas();
                }else{
                    console.error("No has iniciado el juego");
                }
                break;
            case "D":
                if (pulsado === true){
                    salir();
                }else{
                    console.error("No has iniciado el juego");
                }
                break;
            default:
                console.log("Opción no valida");
                break;
        }
    }while(opcion !== "D");
}

function iniciar_juego(){
    nombre = prompt("Dime tu nombre: ");
    edad = Number(prompt("Dime tu edad: "));

    return console.log ("El jugador " + nombre + " con " + edad + " años, comienza el juego ")
}

function lanzar_dados(){
    const CARAS = 6;
    let dado1 = 0;
    let dado2 = 0;
    let puntuacion = 0;
    var vuelta = 1;
    const MAX_VUELTAS = 3;

    

    while(dado1 === dado2){
        dado1 = Math.floor(Math.random() * CARAS) + 1;
        dado2 = Math.floor(Math.random() * CARAS) + 1;
        
        console.log("Dado 1: " + dado1);
        console.log("Dado 2: " + dado2);

        puntuacion = puntuacion + (dado1 + dado2);

        console.log("El jugador " + nombre + " ha obtenido " + puntuacion + " puntos en esta tirada");

        if(vuelta > MAX_VUELTAS){
            puntuacion = 0;
        }else if(vuelta <= MAX_VUELTAS){
            vuelta++; //veces q he tirado los daods seguidas
        }

        

        // valores min y max
        if (dado1 < valor_min){
            valor_min = dado1;
        }
        if (dado2 < valor_min){
            valor_min = dado2;
        }

        if (dado1 > valor_max){
            valor_max = dado1;
        }
        if (dado2 > valor_max){
            valor_max = dado2;
        }

        //media puntos
        media_puntos = Math.round(puntuacion / contador);
        
        //veces que tiro en total
        contador++;

    }
}

function mostrar_estadisticas(){
    console.log("Tus estadisticas son: "
        + "\n Has tirado los dados " + contador + " veces"
        + "\n Media de puntos por tirada: " + media_puntos
        + "\n Valor minimo obtenido: " + valor_min
        + "\n Valor máximo obtenido: " + valor_max
    );
}

function salir(){
    console.log("Saliendo... El jugador " + nombre + "ha tardado" + tiempo + "minutos");
}