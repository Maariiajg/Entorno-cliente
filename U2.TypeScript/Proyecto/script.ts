    const posNombre = 0;
    const posPuntos = 1;
    const posPartidosJugados = 2;
    const posPartidosGanados = 3;
    const posPartidosEmpetados = 4;
    const posPartidosPerdidos = 5;
    const posGolesFavor = 6;
    const posGolesContra = 7;

function añadir_partido(){


    let matrizDeEquipos: any[][] =[
        ["Real Madrid CF", 1, 0, 0, 0, 0, 0, 0],
        ["FC Barcelona", 1, 0, 0, 0, 0, 0, 0],
        ["Villarreal CF", 1, 0, 0, 0, 0, 0, 0],
        ["Atlético Madrid", 1, 0, 0, 0, 0, 0, 0],
        ["Real Betis Balompié", 1, 0, 0, 0, 0, 0, 0],
        ["RCD Espanyol", 1, 0, 0, 0, 0, 0, 0],
        ["Altetic Bilbao", 1, 0, 0, 0, 0, 0, 0],
        ["Sevilla FC", 1, 0, 0, 0, 0, 0, 0]
    ] 
    sumar_partido(matrizDeEquipos);
    //sumar_puntos(matrizDePartidos);
    //sumar_goles_favor(matrizDePartidos);
    //sumar_goles_contra(matrizDePartidos);

    ordenar_array(matrizDeEquipos);
   
}

function ordenar_array(matrizDeEquipos: any[][]){
    // Ordenar según los criterios
    matrizDeEquipos.sort((a, b) => {
        const puntosA = a[posPuntos];
        const puntosB = b[posPuntos];

        const diferenciaA = a[posGolesFavor] - a[posGolesContra];
        const diferenciaB = b[posGolesFavor] - b[posGolesContra];

        const golesFavorA = a[posGolesFavor];
        const golesFavorB = b[posGolesFavor];

        // Comparar puntos
        if (puntosB !== puntosA) return puntosB - puntosA;

        // Si tienen los mismos puntos, comparar diferencia de goles
        if (diferenciaB !== diferenciaA) return diferenciaB - diferenciaA;

        // Si también tienen la misma diferencia, comparar goles a favor
        return golesFavorB - golesFavorA;
    });

    console.log("Clasificación ordenada:");
    console.table(matrizDeEquipos);
}

function sumar_partido(matrizDeEquipos: any[][]){
    let equipoLocal: HTMLInputElement = document.getElementById("equipo_local") as HTMLInputElement;
    let equipoVisitante: HTMLInputElement = document.getElementById("equipo_visitante") as HTMLInputElement;
    let error: HTMLDivElement = document.getElementById("error") as HTMLDivElement;
    const local = equipoLocal.value.trim().toLowerCase();
    const visitante = equipoVisitante.value.trim().toLowerCase();
    //comprobar q equipos no sean iguales
    if (equipoLocal.value === equipoVisitante.value){
        error.textContent = "El equipo local y el visitante no pueden ser el mismo";
    }else {
        error.textContent = "";
    }

    for(let i = 0; i < matrizDeEquipos.length; i++){
        let nombreEquipo = matrizDeEquipos[i][posNombre].trim().toLowerCase();

        if(nombreEquipo === local || nombreEquipo === visitante){
            matrizDeEquipos[i][posPartidosJugados] += 1;
        }
    }
    //no va bien
}

function sumar_puntos(matrizDeEquipos: any[][]){

}

function sumar_goles_favor(matrizDeEquipos: any[][]){

}

function sumar_goles_contra(matrizDeEquipos: any[][]){

}