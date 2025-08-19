/*

Tablero -> objeto tableto

jugadores -> Objeto

controlador del juego -> Objeto

*/

function jugador (nombre){
   let nombreJugador = nombre
   let puntuacion = 0

   const getNombre = () => nombreJugador

   const getPuntuacion = () => puntuacion
   const ganarPunto = () => puntuacion++

   return {getNombre, getPuntuacion, ganarPunto}
}

function tablero(){

   let tab = []
   for (let i = 0; i < 3; i++) {
      tab[i] = Array(3).fill(0)
   }
   
   //funciona
   const mostrarTablero = () => tab

   const mostrarTableroOrdenado = function(){
      for(let i=0; i<tab.length; i++){
         console.log(tab[i]);
      }
   }

   return {mostrarTablero, mostrarTableroOrdenado}

}

function controlador(tablero){

   const jugada = function(x, y, marca){
      if(tablero[x][y] == 0){
         tablero[x][y] = marca
      }
   }

   const verificarGanador = function(jugador){

      //FILAS
      if(tablero[0][0] == tablero[0][1] == tablero[0][2]){
         console.log(`El ganador es `, jugador.getNombre());
         jugador.ganarPunto()
      }
      else if(tablero[1][0] == tablero[1][1] == tablero[1][2]){
         console.log(`El ganador es `, jugador.getNombre());
         jugador.ganarPunto()
      }
      else if(tablero[2][0] == tablero[2][1] == tablero[2][2]){
         console.log(`El ganador es `, jugador.getNombre());
         jugador.ganarPunto()
      }

      //COLUMNAS
      else if(tablero[0][0] == tablero[1][0] == tablero[2][0]){
         console.log(`El ganador es `, jugador.getNombre());
         jugador.ganarPunto()
      }
      else if(tablero[0][1] == tablero[1][1] == tablero[2][1]){
         console.log(`El ganador es `, jugador.getNombre());
         jugador.ganarPunto()
      }
      else if(tablero[0][2] == tablero[1][2] == tablero[2][2]){
         console.log(`El ganador es `, jugador.getNombre());
         jugador.ganarPunto()
      }

      //CRUZADO
      else if(tablero[0][0] == tablero[1][1] == tablero[2][2]){
         console.log(`El ganador es `);
         jugador.ganarPunto()
      }
      else if(tablero[0][2] == tablero[1][1] == tablero[2][0]){
         console.log(`El ganador es `);
         jugador.ganarPunto()
      }

   }

   return {jugada, verificarGanador}

}


const jugador1 = jugador("Seba")
const jugador2 = jugador("Antonia")

let tablero1 = tablero()
console.log(tablero1.mostrarTableroOrdenado());
let controlador1 = controlador(tablero1.mostrarTablero())

//jugar en loop
/*for(let i = 0; i<3; i++){
   if(i%2 == 0){
      controlador1.jugada(0, 0, "X")
   }else{
      controlador1.jugada(2, 2, "O")
   }
}*/

controlador1.jugada(0,0, "X")
controlador1.jugada(0,1, "O")
controlador1.jugada(1,0, "X")
controlador1.jugada(2,0, "X")

console.log(tablero1.mostrarTableroOrdenado());


controlador1.verificarGanador(jugador1)

console.log(jugador1.getPuntuacion());
console.log(jugador2.getPuntuacion());
