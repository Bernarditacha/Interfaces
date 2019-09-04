document.querySelector('.ejercicioUno').addEventListener("click", ejercicioUno);
document.querySelector('.ejercicioDos').addEventListener("click", ejercicioDos);
document.querySelector('.ejercicioTres').addEventListener("click", ejercicioTres);
document.querySelector('.ejercicioCuatro').addEventListener("click", ejercicioCuatro);
document.querySelector('.ejercicioCinco').addEventListener("click", ejercicioCinco);
document.querySelector('.ejercicioSeis').addEventListener("click", ejercicioSeis);

// Variables constantes
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

let width=canvas.width;
let height=canvas.height;

let imageData = ctx.createImageData(width,height);

// Funciones globlales
function setPixel(imageData,x,y,r,g,b,a) {
  let  i = (x + y * imageData.width) * 4;
  imageData.data[i + 0] = r;
  imageData.data[i + 1] = g;
  imageData.data[i + 2] = b;
  imageData.data[i + 3] = a;
}

function ocultar(){
  //Ocultar informacion de Ejercicios
  let informacion1 = document.querySelector('.informacion1');
  informacion1.hidden = true;
  let informacion2 = document.querySelector('.informacion2');
  informacion2.hidden = true;
  let informacion3 = document.querySelector('.informacion3');
  informacion3.hidden = true;
  let informacion4 = document.querySelector('.informacion4');
  informacion4.hidden = true;
  let informacion5 = document.querySelector('.informacion5');
  informacion5.hidden = true;
  let informacion6 = document.querySelector('.informacion6');
  informacion6.hidden = true;
  //Ocultar botones del Ejercicio 6
  let boton = document.querySelector('.elementos');
  boton.hidden = true;
}

//Rellenar fondos canvas
function fondoCanvas() {
  ctx.fillStyle = "#808080";
  ctx.fillRect(0,0,width,height);
}

//Ejercicio 1
function ejercicioUno(){
  ocultar();
  fondoCanvas();
  let html = document.querySelector('.informacion1');
  html.hidden = false;
  let MAXFIL = 10;
  let MAXCOL = 10;
  let matriz = [];

  function crearM() {
    for (let i = 0; i <MAXCOL; i++) {
      matriz[i] = [];
    }
    cargarMatriz();
  }

  function cargarMatriz() {
    for(let x = 0; x<MAXFIL; x++){
      for (let j = 0; j <MAXCOL; j++) {
        matriz [x][j] = Math.floor(Math.random()*20);
      }
    }
  }

  //Item a)
  function valorMaximo(){
    let mayor=0;
    for (let i = 0; i <MAXFIL; i++) {
      for (let j = 0; j <MAXCOL; j++) {
        if( matriz [i][j] > mayor){
          mayor = matriz [i][j];
        }
      }
    }
    return mayor;
  }

  //Item b)

  function maxFilasParesMinFilasImpares (){
    let valor = [];
    let maximo;
    let minimo;
    for (let i = 0; i <MAXFIL; i++) {
      maximo=0;
      minimo=60000;
      if(i%2==0){
        for (let x = 0; x <MAXCOL; x++) {
          if(matriz[i][x] > maximo){
            maximo = matriz[i][x];
          }
        }  valor[i] = maximo;
      }else{
        for (let f = 0; f<MAXCOL; f++) {
          if(matriz[i][f] < minimo){
            minimo = matriz[i][f];
          }
        }
        valor[i] = minimo;
      }
    } return valor;
  }

  // Item c)

  function valorPromedio () {
    let sum;
    let promedio;
    let fila = [];
    for (let i = 0; i <MAXFIL; i++) {
      sum = 0;
      promedio=0;
      for (let j = 0; j <MAXCOL; j++) {
        sum += matriz[i][j];
      }  promedio = sum/MAXCOL;
      fila[i] = promedio;
    }
    return fila;
  }


  crearM();
  console.log(matriz);
  //  console.log(cargarMatriz());
  //  console.log(matriz);
  console.log(valorMaximo());
  console.log(maxFilasParesMinFilasImpares());
  console.log(valorPromedio());
}

//Ejercicio 2

function ejercicioDos() {
  ocultar();
  fondoCanvas();
  //Mostrar consigna del ejercicio
  let html = document.querySelector('.informacion2');
  html.hidden = false;

  document.querySelector(".crear").addEventListener("click", function() {
    event.preventDefault();
  ctx.fillStyle = document.querySelector('.color').value;
  ctx.fillRect(100,125, 300, 250);
});
}

// Ejercicio 3

function ejercicioTres() {
  ocultar();

  //Mostrar consigna del ejercicio
  let html = document.querySelector('.informacion3');
  html.hidden = false;

  let r = 208;
  let g = 255;
  let b = 50;
  let a = 225;

  for (let x = 0; x <width; x++) {
    for (let y = 0; y <height; y++) {
      setPixel(imageData,x,y,r,g,b,a);
    }
  }
  ctx.putImageData(imageData,0,0);
}

// Ejercicio 4

function ejercicioCuatro() {
    ocultar();

  //Mostrar consigna del ejercicio
  let html = document.querySelector('.informacion4');
  html.hidden = false;

  let a = 255;
  let imageData = ctx.createImageData(width,height);

  for (let x = 0; x <height; x++) {
    r = x / height*255;
    g = x / height*255;
    b = x / height*255;
    for (let y = 0; y <width; y++) {
      setPixel(imageData,y,x,r,g,b,a);
    }
  }
  ctx.putImageData(imageData,0,0);
}

//Ejercicio 5

function ejercicioCinco(){
  ocultar();

  //Mostrar consigna del ejercicio
  let html = document.querySelector('.informacion5');
  html.hidden = false;

  let r,g,b;
  let a = 255;

  for (let x = 0; x <width; x++) {
    for (let y = 0; y <height; y++) {
      if (y < height / 2) {
        r = y / (height / 2) * 255;
        g = y / (height / 2) * 255;
        b = y / height * 0;
      } else {
        r = 255;
        g = (1 - ((y - height / 2) / (height / 2))) * 255;
        b = 0;
      }
      setPixel(imageData,y,x,r,g,b,a);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

// Ejercicio 6

function ejercicioSeis() {
  ocultar();
  fondoCanvas();
  //Mostrar consigna del ejercicio
  let html = document.querySelector('.informacion6');
  html.hidden = false;
  //Mostrar botones
  let boton =  document.querySelector('.elementos');
  boton.hidden = false;
  //Item a)
  let image1 = new Image();
  image1.src = "image.jpg";
  image1.crossOrigin = 'Anonymous';
  image1.onload = function () {

  ctx.drawImage(this,0,0);
  imageData = ctx.getImageData(0,0, this.width,this.height);

  }

  document.querySelector('.aplicarFiltro').addEventListener("click", filtroBlancoNegro);
  document.querySelector('.sacarFiltro').addEventListener("click", ejercicioSeis);

  function filtroBlancoNegro(){
    let a = 255;
    for (let x = 0; x < imageData.width; x++) {
      for (let y = 0; y <imageData.height; y++) {

        let r = getRed(imageData, x, y);
        let g = getGreen(imageData, x, y);
        let b = getBlue(imageData, x, y);

        let gris = (r + g + b) / 3;

        setPixel(imageData, x, y, gris, gris, gris,a);

      }
    }

    function getRed(imageData, x, y) {
      let index = (x + y * imageData.width) * 4;
      return imageData.data[index+0];
    }

    function getGreen(imageData, x, y) {
      let index = (x + y * imageData.width) * 4;
      return imageData.data[index+1];
    }

    function getBlue(imageData, x, y) {
      let index = (x + y * imageData.width) * 4;
      return imageData.data[index+2];
    }

    ctx.putImageData(imageData,0,0);
  }
}
