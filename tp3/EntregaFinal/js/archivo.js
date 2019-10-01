
//Comienzo de cuenta regresiva 
window.onload = cuentaRegresiva;

let puntaje = document.querySelector(".puntos");
let tiempo = document.querySelector(".segundos");

let personaje = document.querySelector(".personaje");
let pocima = document.querySelector(".pocima");
let bomba = document.querySelector(".bomba");

let gameOver = document.querySelector(".over");
gameOver.hidden = true;
let mensaje = document.querySelector(".mensaje");
mensaje.hidden = true;
let reiniciar = document.querySelector(".btn");
reiniciar.hidden = true;

reiniciar.addEventListener("click", reload);


//Tiempo de duracion del juego
let segundos = 30;
//Movimiento del dragon
let subir = false;
let bajar = false;
//Posicion inicial de cada elemento eje Y
let posicionYPersonaje = 180;
let posicionYPocima = 100;
let posicionYBomba = 260;
//Posicion inicial de cada elemento eje X
let left = 1200;
let posicionXPersonaje = 650;
//Contador elementos colisionados/recogidos
let cantidadPocimas= 0;
let cantidadBombas= 0;
//Animacion del personaje
let volando = false;
let colision = false;
// Hacer aparecer y desaparecer elementos
let esconderPocima = false;
let esconderBomba = false;
let mostrarBomba = true;
let mostrarPocima = true;

function GameLoop (){
  detectar();
  actualizar();
  redibujar();

id=requestAnimationFrame(GameLoop);
}

function detectar(){
  document.addEventListener("keydown", detectarTecla);
  function detectarTecla(evento) {
    let keyCode = document.layers ? evento.which : document.all ? event.keyCode : document.getElementById ? evento.keyCode : 0;
    if(keyCode == 38){
      subir = true;
      bajar = false;
  }else {
    if(keyCode == 40){
      subir= false;
      bajar = true;
  }
  }
}
}


function actualizar(){
  //Subir
  if (subir == true){
    if (posicionYPersonaje==180 || posicionYPersonaje == 260){
    posicionYPersonaje -= 80;
    subir=false;
    }
  //Bajar
  }else {
    if(bajar==true){
      if (posicionYPersonaje == 100 || posicionYPersonaje == 180){
    posicionYPersonaje += 80;
    bajar=false;
      }
    }
  }
  //Volar
  if(volando == true){
    personaje.className = "personaje";
  }
  //Colision
  if(colision == true){
    personaje.className = "personajeDead";
    esconderBomba = true;
  }

  //Hacer aparecer/desaparecer elementos
  if(mostrarBomba == true){
    bomba.className = "bomba";
  }
  if(mostrarPocima == true){
    pocima.className = "pocima";
  }

  if(esconderBomba == true){
    bomba.className = "oculta";
  }
  if(esconderPocima == true){
    pocima.className = "oculta";
  }

  //Mover-desaparecer elementos
  if(left>250){
    left -= 10;
  }
  
  if(left == 250){
    //Cuando llego al margen izquierdo escondo los elementos
    mostrarBomba = false;
    mostrarPocima = false;
    esconderBomba = true;
    esconderPocima = true;
    //Llamo a la funcion que vuelve a mostrar los elementos 
    setTimeout(function(){
        requestAnimationFrame(mostrar);
     },0.5);

  } 
  //Recojer pocimas
  if( left == posicionXPersonaje && posicionYPersonaje == posicionYPocima && mostrarPocima == true){
    mostrarPocima = false;
    esconderPocima = true;
    cantidadPocimas++;
  }
  //Colisionar con combas
  if(left == posicionXPersonaje && posicionYPersonaje == posicionYBomba && mostrarBomba == true){
    mostrarBomba = false;
    esconderBomba = true;
    volando = false;
    colision = true;
    //Llamo a la funcion que hace volar al dragon nuevamente 
    setTimeout(function(){
        requestAnimationFrame(finColision);
    },600);
      cantidadBombas++;
  }
    
//Fin del juego por limite de tiempo, por cantidad de bombas colisionadas o por pocimas recogidas
  if(segundos==0 || cantidadBombas == 3 || cantidadPocimas == 5){
      gameOver.hidden = false;
      mensaje.hidden = false;
      reiniciar.hidden = false;
      mostrarBomba = false;
      esconderBomba = true;
      mostrarPocima = false;
      esconderPocima = true;
      segundos = 0;
      left = 1200;
      window.cancelAnimationFrame(id);
  }

  if(segundos==0 || cantidadBombas == 3){
    mensaje.innerHTML = "GAME OVER";
  }
  if(cantidadPocimas == 5){
    mensaje.innerHTML = "GANASTE";
  }

}

//Funcion para que vuelva de volar luego de una colision
function finColision(){
  colision = false;
  volando = true;
}

//Vuelvo a mostrar los elementos
function mostrar(){
  let mat = Math.floor(Math.random()*2);
  if (mat == 1){
    esconderBomba = false;
    mostrarBomba = true;
  }else{
    esconderPocima = false;
    mostrarPocima = true;
  }
  left = 1200;
}

//Limite de tiempo para finalizar el juego
function cuentaRegresiva(){
  segundos--;
  if(segundos != 0){
  setTimeout(cuentaRegresiva,1000);
  }
}

//Funcion para volver a jugar
function reload(){
  cantidadPocimas= 0;
  cantidadBombas= 0;
  segundos = 30;
  esconderBomba = false;
  esconderPocima = false;
  mostrarBomba = true;
  mostrarPocima = true;
  gameOver.hidden = true;
  mensaje.hidden = true;
  reiniciar.hidden = true;
}

function redibujar(){
  personaje.style.top = posicionYPersonaje +"px";
  pocima.style.left = left + "px";
  bomba.style.left = left + "px";
  tiempo.innerHTML=segundos;
  puntaje.innerHTML = cantidadPocimas;
}

GameLoop();
