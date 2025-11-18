var posNombre = 0;
var posPuntos = 1;
var posPartidosJugados = 2;
var posPartidosGanados = 3;
var posPartidosEmpetados = 4;
var posPartidosPerdidos = 5;
var posGolesFavor = 6;
var posGolesContra = 7;
var posDiferencia = 8; // Nueva columna: diferencia de goles. Es uno de los requisitos de desampate, 
//si tiene muchoas mas goles en contra que a favor tendrá un resultado negativo por lo que bajará en la clasificación
// Matriz global para meter los resultados acumulados, inicializamos todo a 0
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
function añadir_partido() {
    sumar_partido(matrizDeEquipos);
    sumar_puntos(matrizDeEquipos);
    sumar_goles_favor(matrizDeEquipos);
    sumar_goles_contra(matrizDeEquipos);
    actualizar_diferencias(matrizDeEquipos);
    ordenar_array(matrizDeEquipos);
}
//Calcular y guardar diferencia de goles
function actualizar_diferencias(matrizDeEquipos) {
    for (var i = 0; i < matrizDeEquipos.length; i++) {
        matrizDeEquipos[i][posDiferencia] = matrizDeEquipos[i][posGolesFavor] - matrizDeEquipos[i][posGolesContra];
    }
}
// Función para ordenar la tabla de clasificación
function ordenar_array(matrizDeEquipos) {
    matrizDeEquipos.sort(function (a, b) {
        //Puntos (desc)
        var diffPuntos = b[posPuntos] - a[posPuntos];
        if (diffPuntos !== 0)
            return diffPuntos;
        //Partidos ganados (desc)
        var diffGanados = b[posPartidosGanados] - a[posPartidosGanados];
        if (diffGanados !== 0)
            return diffGanados;
        //Diferencia de goles (desc)
        var diffDiferencia = b[posDiferencia] - a[posDiferencia];
        if (diffDiferencia !== 0)
            return diffDiferencia;
        //Goles a favor (desc)
        var diffGolesFavor = b[posGolesFavor] - a[posGolesFavor];
        if (diffGolesFavor !== 0)
            return diffGolesFavor;
        //Goles en contra (menos es mejor, asc)
        var diffGolesContra = a[posGolesContra] - b[posGolesContra];
        if (diffGolesContra !== 0)
            return diffGolesContra;
        //Menos derrotas (asc)
        var diffPerdidas = a[posPartidosPerdidos] - b[posPartidosPerdidos];
        if (diffPerdidas !== 0)
            return diffPerdidas;
        //en caso de que todo lo demas sea empate debe devolver algo, por lo tanto le devolvemos 0
        return 0;
    });
    console.log("Clasificación ordenada:");
    console.table(matrizDeEquipos); //mostramos en formato tabla por consola
}
// Función para actualizar partidos jugados, ganados, empatados, perdidos
function sumar_partido(matrizDeEquipos) {
    var equipoLocal = document.getElementById("equipo_local");
    var equipoVisitante = document.getElementById("equipo_visitante");
    var golesLocal = parseInt(document.getElementById("goles_local").value);
    var golesVisitante = parseInt(document.getElementById("goles_visitante").value);
    var error = document.getElementById("error");
    //comprueba que los dos equipos no sean el mismo
    if (equipoLocal.value === equipoVisitante.value) {
        error.textContent = "El equipo local y el visitante no pueden ser el mismo";
        return;
    }
    else {
        error.textContent = "";
    }
    for (var i = 0; i < matrizDeEquipos.length; i++) {
        var nombreEquipo = matrizDeEquipos[i][posNombre];
        //sumar el partido jugado a ambos equipos
        if (nombreEquipo === equipoLocal.value || nombreEquipo === equipoVisitante.value) {
            matrizDeEquipos[i][posPartidosJugados] += 1;
        }
        //comparando cual de los dos equipos sacó mas puntos sumamos partido, ganada, empatado o perdido
        if (nombreEquipo === equipoLocal.value) {
            if (golesLocal > golesVisitante) {
                matrizDeEquipos[i][posPartidosGanados] += 1;
            }
            else if (golesLocal === golesVisitante) {
                matrizDeEquipos[i][posPartidosEmpetados] += 1;
            }
            else {
                matrizDeEquipos[i][posPartidosPerdidos] += 1;
            }
        }
        if (nombreEquipo === equipoVisitante.value) {
            if (golesVisitante > golesLocal) {
                matrizDeEquipos[i][posPartidosGanados] += 1;
            }
            else if (golesVisitante === golesLocal) {
                matrizDeEquipos[i][posPartidosEmpetados] += 1;
            }
            else {
                matrizDeEquipos[i][posPartidosPerdidos] += 1;
            }
        }
    }
    actualizar_diferencias(matrizDeEquipos);
    ordenar_array(matrizDeEquipos);
}
// Función para sumar puntos
function sumar_puntos(matrizDeEquipos) {
    for (var i = 0; i < matrizDeEquipos.length; i++) {
        //por cada equipo[i] en la posición puntos meetemos la suma de los partidos 
        //ganados (los miramos en el propio array y los multiplicamos por 3) y de los 
        //partidos empatados(los multiplicamos por 1)
        matrizDeEquipos[i][posPuntos] = matrizDeEquipos[i][posPartidosGanados] * 3 + matrizDeEquipos[i][posPartidosEmpetados];
    }
    actualizar_diferencias(matrizDeEquipos);
    ordenar_array(matrizDeEquipos);
}
// Función para sumar goles a favor
function sumar_goles_favor(matrizDeEquipos) {
    var golesLocal = parseInt(document.getElementById("goles_local").value);
    var golesVisitante = parseInt(document.getElementById("goles_visitante").value);
    var equipoLocal = document.getElementById("equipo_local").value;
    var equipoVisitante = document.getElementById("equipo_visitante").value;
    //sumamos el numero de goles que marcaron a cada equipo independientemente de si ganan o pierden
    for (var i = 0; i < matrizDeEquipos.length; i++) {
        if (matrizDeEquipos[i][posNombre] === equipoLocal) { //asegurarse de que es el equipo local de este partido
            matrizDeEquipos[i][posGolesFavor] += golesLocal; //sumar sus puntos
        }
        if (matrizDeEquipos[i][posNombre] === equipoVisitante) { //asegurarse de que es el equipo visitante de este partido
            matrizDeEquipos[i][posGolesFavor] += golesVisitante; //sumar sus puntos
        }
    }
    actualizar_diferencias(matrizDeEquipos);
    ordenar_array(matrizDeEquipos);
}
// Función para sumar goles en contra
function sumar_goles_contra(matrizDeEquipos) {
    var golesLocal = parseInt(document.getElementById("goles_local").value);
    var golesVisitante = parseInt(document.getElementById("goles_visitante").value);
    var equipoLocal = document.getElementById("equipo_local").value;
    var equipoVisitante = document.getElementById("equipo_visitante").value;
    //ahora lo opuesto. Sumamos a cada equipo el numero de goles en contra, es decir, que le marcaron en este partido
    for (var i = 0; i < matrizDeEquipos.length; i++) {
        if (matrizDeEquipos[i][posNombre] === equipoLocal) {
            matrizDeEquipos[i][posGolesContra] += golesVisitante;
        }
        if (matrizDeEquipos[i][posNombre] === equipoVisitante) {
            matrizDeEquipos[i][posGolesContra] += golesLocal;
        }
    }
    actualizar_diferencias(matrizDeEquipos);
    ordenar_array(matrizDeEquipos);
}
