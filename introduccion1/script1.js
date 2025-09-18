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