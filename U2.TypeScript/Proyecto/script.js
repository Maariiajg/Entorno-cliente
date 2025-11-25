//asignar las posiciones dentro del array de arrays
var posNombre = 0;
var posPuntos = 1;
var posPartidosJugados = 2;
var posPartidosGanados = 3;
var posPartidosEmpetados = 4;
var posPartidosPerdidos = 5;
var posGolesFavor = 6;
var posGolesContra = 7;
var posDiferencia = 8;
// Array de arrays, guardaremos en ella todos los datos de claasificación, con cada equipo y sus estadisticas.
var matrizDeEquipos = [
    ["Real Madrid CF", 0, 0, 0, 0, 0, 0, 0, 0],
    ["FC Barcelona", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Villarreal CF", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Atlético Madrid", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Real Betis Balompié", 0, 0, 0, 0, 0, 0, 0, 0],
    ["RCD Espanyol", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Altetic Bilbao", 0, 0, 0, 0, 0, 0, 0, 0],
    ["Sevilla FC", 0, 0, 0, 0, 0, 0, 0, 0]
];
// Obtenemos los select del HTML
var selectLocal = document.getElementById("equipo_local");
var selectVisitante = document.getElementById("equipo_visitante");
//para hacer mas sencillo el codigo en vez de en el HTML vamos a cargar aquí las diferentes opciones de los selects
matrizDeEquipos.forEach(function (equipo) {
    var opt1 = document.createElement("option"); //creamos un elemento opcion
    opt1.textContent = equipo[posNombre]; //le asignamos el nombre del equipo
    opt1.value = equipo[posNombre]; //le asignamos su valor
    selectLocal.appendChild(opt1); //añadimos la nueva opción al select de equipo local
    //repetimos con el equipo visitante
    var opt2 = document.createElement("option");
    opt2.textContent = equipo[posNombre];
    opt2.value = equipo[posNombre];
    selectVisitante.appendChild(opt2);
});
// Función para pintar la tabla
function pintarTabla() {
    var tbody = document.getElementById("tbody"); //vamos a pintarlo todo dentro del tbody que tenemos en el HTML
    tbody.innerHTML = "";
    matrizDeEquipos.forEach(function (eq) {
        var fila = document.createElement("tr"); //para cada equipo creamos una fila
        eq.forEach(function (dato) {
            var td = document.createElement("td"); //para cada dato de la fila vamos creando td
            td.textContent = dato.toString();
            fila.appendChild(td); //añadimos el dato a la fila
        });
        tbody.appendChild(fila); //añadimos la fila al tbody
    });
}
// Actualizar diferencia de goles (golesFavor - golesContra) de un equipo
function actualizar_diferencias() {
    matrizDeEquipos.forEach(function (eq) {
        eq[posDiferencia] = eq[posGolesFavor] - eq[posGolesContra];
    });
}
// Ordenar clasificación
function ordenar_array() {
    matrizDeEquipos.sort(function (a, b) {
        return b[posPuntos] - a[posPuntos] || //1º mayor num puntos
            b[posPartidosGanados] - a[posPartidosGanados] || //2º mayor  um partidos ganados
            b[posDiferencia] - a[posDiferencia] || //3º mayor num de DG (este valor puede adoptar numeros negativos, si es así bajará en la clasificación)
            b[posGolesFavor] - a[posGolesFavor] || //4º mas goles a favor
            a[posGolesContra] - b[posGolesContra];
    } //5º menos goles en contra
    );
}
// Añadir partido
function añadir_partido() {
    var local = selectLocal.value; //miramos el valor del select de equipo local y del visitante
    var visitante = selectVisitante.value;
    //leemos el numero de goles introducido para el equipo visitante y paraa el local en el input del HTML
    var golesL = parseInt(document.getElementById("goles_local").value);
    var golesV = parseInt(document.getElementById("goles_visitante").value);
    var error = document.getElementById("error");
    //comprobamos que los equipos no sean el mismo, si es así pintamos un error
    if (local === visitante) {
        error.textContent = "Los equipos no pueden ser iguales.";
        return;
    }
    else {
        error.textContent = ""; //si no es así el contenido del error será vacio.
    }
    matrizDeEquipos.forEach(function (eq) {
        if (eq[posNombre] === local) { //si el nombre del equipo es igual que el de local 
            //sumamos un partido, los goles a favor y los en contra
            eq[posPartidosJugados]++;
            eq[posGolesFavor] += golesL;
            eq[posGolesContra] += golesV;
            //comprobamos quien ha ganado y le sumamos el partido ganado, empatado o perdido
            if (golesL > golesV)
                eq[posPartidosGanados]++;
            else if (golesL === golesV)
                eq[posPartidosEmpetados]++;
            else
                eq[posPartidosPerdidos]++;
        }
        //lo mismo para visitante
        if (eq[posNombre] === visitante) {
            eq[posPartidosJugados]++;
            eq[posGolesFavor] += golesV;
            eq[posGolesContra] += golesL;
            if (golesV > golesL)
                eq[posPartidosGanados]++;
            else if (golesV === golesL)
                eq[posPartidosEmpetados]++;
            else
                eq[posPartidosPerdidos]++;
        }
    });
    // Recalcular puntos
    matrizDeEquipos.forEach(function (eq) {
        //los puntos son 3 por partido ganado y uno por empatado
        eq[posPuntos] = eq[posPartidosGanados] * 3 + eq[posPartidosEmpetados];
    });
    actualizar_diferencias();
    ordenar_array();
    pintarTabla();
}
document.getElementById("formPartido").addEventListener("submit", function (e) {
    e.preventDefault();
    añadir_partido();
});
// Pintar al cargar
pintarTabla();
