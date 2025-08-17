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
   const mostrarTablero = ()=> tab

   const mostrarTableroOrdenado = function(){
      for(let i=0; i<tab.length; i++){
         console.log(tab[i]);
         
      }
   }

   return {mostrarTablero, mostrarTableroOrdenado}

}


const jugador1 = jugador("Seba")
const jugador2 = jugador("Antonia")

let tablero1 = tablero()
console.log(tablero1.mostrarTableroOrdenado());

