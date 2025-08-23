/*

Tablero -> objeto tableto

jugadores -> Objeto

controlador del juego -> Objeto

*/

function jugador(nombre) {
   let nombreJugador = nombre
   let puntuacion = 0

   const getNombre = () => nombreJugador

   const getPuntuacion = () => puntuacion
   const ganarPunto = () => puntuacion++

   return { getNombre, getPuntuacion, ganarPunto }
}

function tablero() {

   let tab = []
   for (let i = 0; i < 3; i++) {
      tab[i] = Array(3).fill(0)
   }

   const mostrarTablero = () => tab

   const mostrarTableroOrdenado = function () {
      for (let i = 0; i < tab.length; i++) {
         console.log(tab[i]);
      }
   }

   const resetear = function () {
      for (let i = 0; i < 3; i++) {
         tab[i] = Array(3).fill(0)
      }
   }

   return { mostrarTablero, mostrarTableroOrdenado, resetear}

}

function controlador(tablero) {
   const jugada = function (x, y, marca) {
      let tab = tablero.mostrarTablero()
      if (tab[x][y] == 0) {
         tab[x][y] = marca
      }
   }

   const verificarGanador = function (jugador) {
      let tab = tablero.mostrarTablero()

      // FILAS
      if (tab[0][0] !== 0 && tab[0][0] === tab[0][1] && tab[0][1] === tab[0][2]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         //Parar
         jugador.ganarPunto()
         desactivarBotones()
      }
      else if (tab[1][0] !== 0 && tab[1][0] === tab[1][1] && tab[1][1] === tab[1][2]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }
      else if (tab[2][0] !== 0 && tab[2][0] === tab[2][1] && tab[2][1] === tab[2][2]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }

      // COLUMNAS
      else if (tab[0][0] !== 0 && tab[0][0] === tab[1][0] && tab[1][0] === tab[2][0]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }
      else if (tab[0][1] !== 0 && tab[0][1] === tab[1][1] && tab[1][1] === tab[2][1]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }
      else if (tab[0][2] !== 0 && tab[0][2] === tab[1][2] && tab[1][2] === tab[2][2]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }

      // DIAGONALES
      else if (tab[0][0] !== 0 && tab[0][0] === tab[1][1] && tab[1][1] === tab[2][2]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }
      else if (tab[0][2] !== 0 && tab[0][2] === tab[1][1] && tab[1][1] === tab[2][0]) {
         console.log(`El ganador es ${jugador.getNombre()}`)
         jugador.ganarPunto()
         desactivarBotones()
      }
   }

   return { jugada, verificarGanador }
}

//AQUI EL RESET
function limpiarTablero() {
   const botones = document.querySelectorAll(".btn")
   botones.forEach(boton => {
      boton.textContent = ""
      boton.disabled = false;
   })
   tablero1.resetear()
}

function desactivarBotones(){
   botones.forEach(boton => {
      boton.disabled = true;
   })  
}


const botones = document.querySelectorAll(".btn")
const btnReset = document.querySelector("#reset")
btnReset.addEventListener("click", limpiarTablero)


let marcas = 0;
//Marcas dependiendo del numero de turno primero verificando si el texto del boton esta vacio

let tablero1 = tablero()
tablero1.mostrarTableroOrdenado()
let controlador1 = controlador(tablero1)

//Funciona
function dondeJugar(indice, marca, jugador){
   if (indice == 0) {
      controlador1.jugada(0, 0, marca)
   }
   else if(indice == 1){
      controlador1.jugada(0, 1, marca)
   }
   else if(indice == 2){
      controlador1.jugada(0, 2, marca)
   }
   else if(indice == 3){
      controlador1.jugada(1, 0, marca)
   }
   else if(indice == 4){
      controlador1.jugada(1, 1, marca)
   }
   else if(indice == 5){
      controlador1.jugada(1, 2, marca)
   }
   else if(indice == 6){
      controlador1.jugada(2, 0, marca)
   }
   else if(indice == 7){
      controlador1.jugada(2, 1, marca)
   }
   else if(indice == 8){
      controlador1.jugada(2, 2, marca)
   }
   controlador1.verificarGanador(jugador)
}

let seba = jugador("Seba")
let anto = jugador("Anto")

botones.forEach((boton, indice) => {
   boton.addEventListener("click", () => {
      if (boton.textContent == "") {
         if (marcas % 2 == 0) {
            //Llamar donde jugar y usar el indice como parametro
            boton.textContent = "X"
            dondeJugar(indice, "X", seba)
            
         } else {
            boton.textContent = "O"
            dondeJugar(indice, "O", anto)
         }
         marcas++
      }
      console.log(`Hiciste clic en el botón en la posición: ${indice}`);
   })
})
