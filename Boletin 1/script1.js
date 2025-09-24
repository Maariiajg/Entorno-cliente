//Ejercicio 1
function saludar(){
    var edad = window.prompt("introduce tu edad");
    if(edad <=18){
        console.log("Eres menor de edad")
    }else{
        console.log("Eres mayor de edad")
    }
}

//Ejercicio 2:Crea un fichero JavaScript con una única instrucción que sea capaz de pintar por
//consola la siguiente cadena. El acceso a la ruta C:\\usuario\tarda 1’23”, algo
//considerado “lento” en la actualidad.
 
function pintar_ruta(){
    console.log("El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo considerado \"lento\" en la actualidad.");
}

//Ejercicio 3: Realiza una versión 2 del ejercicio anterior almacenando el valor en dos variables y
//concatenando el resultado antes y después de la palabra algo
function pintar_ruta_v2(){
    var substring1 = "El acceso a la ruta C:\\\\usuario\\tarda 1'23\", algo";
    var substring2 = "considerado \"lento\" en la actualidad";
    console.log(substring1 + substring2);
}

//Ejerccio 4: Almacena y muestra por consola una variable que almacene el valor de 2*10^-9
function muestra_potencia(){
    var num = 2*Math.pow(10,9);
    console.log("El valor es: " + num)
}

//Ejercicio 5: Almacena y muestra por consola el valor de 4 números en distintas bases conocidas
//(Octal, Decimal, Hexadecimal y Binario)

function muestra_n_distintas_bases(num){
    var numDecimal = num.toString(2);
    console.log("El numero " + num + " en binario es: " + numDecimal);
}

//Ejercicio 10: Crea un bloque de código en JavaScript en el que definas e inicialices dos variables.
//Cada una de ellas deben ser llamadas a pintar por consola desde fuera de dicha
//estructura. Identifica que ocurre y crea un comentario de varias líneas dentro del
//fichero .js.

function check_ambito_variable() {
    let prueba = 5;
    console.log("valor: " + prueba);
}

//Ejercicio 11: Busca cómo crear e inicializar un array de datos en JavaScript (Se verá en temas
//siguientes) y muestra sus valores en formato tabla por consola.
function definir_y_mostrar_array(){
    let array = ["Alberto", "Juan", "Sofia"];

    /* for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    } */
   console.table(array);
}

//Ejercicio 12: Realiza un bucle que de 100 vueltas que simplemente incremente un valor de diez
//en diez. Realiza un temporizador que calcule el tiempo que ha tardado en recorrer el
//bucle completamente.
function contar_y_temporizar(){
    let valor = 0;

    let initTime= new Date();
    for(let i =0; i<100000000; i++){
        valor+=10;
    }

    let endTime = new Date();

    console.log("Valor: " + valor);
    console.log("Ha tardado: " + (endTime -initTime)/1000 + " segundos");
}


// 13. Muestra el siguiente error por pantalla “Error!. No se ha encontrado ningún valor”.
function validar(){
    console.error("Error!. No se ha encontrado ningún valor");
}
// 14. Realiza un ejercicio que al pulsar un botón llamado Eliminar pinte un mensaje de
// confirmación para asegurarse que el usuario está seguro de su acción.
function eliminar(){
    let eliminar = confirm("Deseas eliminar?");
    if(eliminar == true){
        console.log("ELIMINADO");    
    }
}
// 15. Realiza un programa en JavaScript que realice lo siguiente.
// a. Pida el nombre de usuario y este debe introducir su nombre
// b. Le pregunte al usuario si quiere abandonar el programa y este deberá
// Aceptar o Cancelar
// c. Lance una alerta con la decisión del usuario
// d. Muestre por consola “FIN DEL PROGRAMA”, en negrita subrayado y de
// color azul.
function pedir_datos(){
    let seguir = true;
    while(seguir){
        let nombre = prompt("Introduce tu nombre: ");
        console.log("Hola " + nombre);
        seguir = confirm("Desea continuar en el programa?");
        console.log("Has decidido seguir? " + seguir);
    }

    console.log("FIN DEL PROGRAMA");
    
}
// 16. Realiza un programa que pida por pantalla tu edad, tu nombre, tu ciudad, tu
// dirección y tu teléfono y que al finalizar muestre un alerta dándote la enhorabuena si
// la edad de tu cumpleaños elevado a 5 es igual a tu número de teléfono o si
// simplemente tu ciudad es “Mairena del Alcor”. (Tipo formulario).
function pedir_muchos_datos(){
    let edad = document.getElementById("edad").value;
    let nombre = document.getElementById("nombre").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;

    console.log("La informacion es: " + nombre + edad + ciudad + direccion + telefono);
    
    if(edad**5 === telefono || ciudad.toUpperCase() == "Mairena del alcor".toUpperCase()){
        console.log("ENHORABUENA");
    }else{
        console.log("QUE PENA");
    }
}
// 17. Haz un programa que dado un número de entrada cuente sus cifras y las muestre
// por consola.
function contar_cifras(){
    let numero = Math.abs(prompt("dame un numero: "));
    let cifras = 0;
    while(numero >= 1){
        
        cifras ++;
        numero = Math.floor(numero / 10);
    }
    console.log("Tiene " + cifras + " cifras");
}
// 18. Realiza un programa que dada tu edad indique si eres niño (0-16 años), joven (17-25
// años), adulto (26 - 60 años) o senior, en adelante.
function calcula_edad(){
    let edad = Number(prompt("Introduce tu edad: "));
    switch(true){
        case edad >= 0 && edad <= 16:
            console.log("Eres un niño");
            break;
        case edad > 16 && edad <= 25:
            console.log("Eres un joven");
            break;
        case edad > 25 && edad <= 60:
            console.log("Eres un adulto");
            break;
        case edad > 60:
            console.log("Eres senior");
            break;
        default:
            console.error("Edad introducida no valida");
    }
    
}
// ahora con formulario

function calcula_edad_formulario(){
    let edad = Number(prompt("Introduce tu edad: "));
    switch(true){
        case edad >= 0 && edad <= 16:
            pintar_mensaje("Eres un niño", true);
            break;
        case edad > 16 && edad <= 25:
            pintar_mensaje("Eres un joven", true);
            break;
        case edad > 25 && edad <= 60:
            pintar_mensaje("Eres un adulto", true);
            break;
        case edad > 60:
            pintar_mensaje("Eres senior", true);
            break;
        default:
            pintar_mensaje("Edad introducida no valida", error);
    }
}

function pintar_mensaje(mensaje, isOk){

    let aviso =document.getElementsById("aviso");

    aviso.textContent = mensaje;

    if(isOk){
        aviso.style.color = "green";
    }else{
        aviso.style.color = "red";
    }

}
// 19. Realiza un programa que calcule un número aleatorio entre 1 y 10 y pida intentos
// hasta que aciertes. Al finalizar debe mostrar por pantalla el número de intentos que
// has realizado.
function acierta_aleatorio(){
    const aleat = Math.floor((Math.random() * 10) + 1);
    let intento = 0; //contador

    alert("Se ha calculado un numero aleatorio, es capaz de acertarlo?")
    

    do{
        intento++;
        var valor_intento = Number(prompt("Intento " + intento));

    }while(intento != aleat);

    console.timeLog("Enhorabuena! El numero secreto era el " + aleat);
    console.log("Has necesitado " + intento + " intentos"); 
}

// 20. Muestra por pantalla el número de múltiplos de un numero que existen entre 8 y 100
function multiplos(){
    let n = Number(prompt("Introduce un numero"));
    let multiplos = 0;
    const max = 100;

    for(let i= n+1; i < max; i++){
        if(i%n == 0){
            multiplos++;
            console.log("Multiplo encontrado " + i)
        }
    }

    console.log("El numero " + n + " tiene " + multiplos + " multiplos");
    
}

