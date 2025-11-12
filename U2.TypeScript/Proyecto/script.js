var posNombre = 0;
var posPuntos = 1;
var posPartidosJugados = 2;
var posPartidosGanados = 3;
var posPartidosEmpetados = 4;
var posPartidosPerdidos = 5;
var posGolesFavor = 6;
var posGolesContra = 7;
function añadir_partido() {
    var matrizDeEquipos = [
        ["Real Madrid CF", 1, 0, 0, 0, 0, 0, 0],
        ["FC Barcelona", 1, 0, 0, 0, 0, 0, 0],
        ["Villarreal CF", 1, 0, 0, 0, 0, 0, 0],
        ["Atlético Madrid", 1, 0, 0, 0, 0, 0, 0],
        ["Real Betis Balompié", 1, 0, 0, 0, 0, 0, 0],
        ["RCD Espanyol", 1, 0, 0, 0, 0, 0, 0],
        ["Altetic Bilbao", 1, 0, 0, 0, 0, 0, 0],
        ["Sevilla FC", 1, 0, 0, 0, 0, 0, 0]
    ];
    sumar_partido(matrizDeEquipos);
    //sumar_puntos(matrizDePartidos);
    //sumar_goles_favor(matrizDePartidos);
    //sumar_goles_contra(matrizDePartidos);
    ordenar_array(matrizDeEquipos);
}
function ordenar_array(matrizDeEquipos) {
    // Ordenar según los criterios
    matrizDeEquipos.sort(function (a, b) {
        var puntosA = a[posPuntos];
        var puntosB = b[posPuntos];
        var diferenciaA = a[posGolesFavor] - a[posGolesContra];
        var diferenciaB = b[posGolesFavor] - b[posGolesContra];
        var golesFavorA = a[posGolesFavor];
        var golesFavorB = b[posGolesFavor];
        // Comparar puntos
        if (puntosB !== puntosA)
            return puntosB - puntosA;
        // Si tienen los mismos puntos, comparar diferencia de goles
        if (diferenciaB !== diferenciaA)
            return diferenciaB - diferenciaA;
        // Si también tienen la misma diferencia, comparar goles a favor
        return golesFavorB - golesFavorA;
    });
    console.log("Clasificación ordenada:");
    console.table(matrizDeEquipos);
}
function sumar_partido(matrizDeEquipos) {
    var equipoLocal = document.getElementById("equipo_local");
    var equipoVisitante = document.getElementById("equipo_visitante");
    var error = document.getElementById("error");
    var local = equipoLocal.value.trim().toLowerCase();
    var visitante = equipoVisitante.value.trim().toLowerCase();
    //comprobar q equipos no sean iguales
    if (equipoLocal.value === equipoVisitante.value) {
        error.textContent = "El equipo local y el visitante no pueden ser el mismo";
    }
    else {
        error.textContent = "";
    }
    for (var i = 0; i < matrizDeEquipos.length; i++) {
        var nombreEquipo = matrizDeEquipos[i][posNombre].trim().toLowerCase();
        if (nombreEquipo === local || nombreEquipo === visitante) {
            matrizDeEquipos[i][posPartidosJugados] += 1;
        }
    }
    //no va bien
}
function sumar_puntos(matrizDeEquipos) {
}
function sumar_goles_favor(matrizDeEquipos) {
}
function sumar_goles_contra(matrizDeEquipos) {
}
