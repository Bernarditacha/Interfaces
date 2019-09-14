"use strict";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let arrastrar=false;
let abierto= true; //CHEQUEAR
let contador=0;
var poligono = new Poligono();
var circuloElegido=null;
var tecla = false;
let color = 255;
let colorInicial = "rgb(200,0,0)";
let distinto = false;

 //Para cambiar el color del Cneotr
    function crearCirculo(e){
      if(abierto == true){
        let pX = e.layerX;
        let pY = e.layerY;
        console.log(pX,pY);
        let circulo = new Circulo(pX,pY,colorInicial);
        circulo.crearCirculo();
        contador++;
        poligono.addCirculo(circulo);
        poligono.trazarLinea(pX,pY);

    }

  }
  let boton = document.querySelector(".elementos");
  boton.hidden = false;
    function cerrarPoligono() {
      if(contador>=3){
        poligono.cerrarPoligono();
        boton.hidden = true;
        contador=0;
      }
      abierto = false;
    }

    function seleccionar(e) {
      let pX = e.layerX;
      let pY = e.layerY;
      this.circuloElegido = poligono.detectarClick(pX,pY);
      if(this.circuloElegido != null){
      this.arrastrar = true;
}
    }

    function soltar(e) {
      this.arrastrar=false;
      this.circuloElegido = null;
    }



function arrastrarFigura(e){
	let pX = e.layerX;
  let pY = e.layerY;
	if (this.arrastrar){
		if(this.circuloElegido.getCirculoCentral()){
  		var movimientoX = pX - this.circuloElegido.getCoordenadaX();
  		var movimientoY = pY - this.circuloElegido.getCoordenadaY();
  		this.circuloElegido.actualizar(pX,pY);
  		poligono.moverCentro(movimientoX,movimientoY);
  		}else{
  		this.circuloElegido.actualizar(pX,pY);
  		redibujar();
		}
	}
}

function borrarCirc(e){
	var pX = e.layerX;
  var pY = e.layerY;
   /*for(var i =0;i<Poligonos.length;i++){
	this.circuloElegido=Poligonos[i].detectarClick(pX,pY);
  if (this.circuloElegido != null){
  	Poligonos[i].borrarCirculo(this.circuloElegido);
    redibujar();
    }
    redibujar();
  }*/

  this.circuloElegido = poligono.detectarClick(pX,pY);
  if (this.circuloElegido != null){
    poligono.borrarCirculo(this.circuloElegido);
    redibujar();
    }

}

function redibujar(distinto){
  poligono.redibujar(distinto);
  //for(var i =0;i<Poligonos.length;i++){
    //Poligonos[i].redibujar();
//}
}

function cambiarColor(e){
  distinto= true;
  if(tecla ==true){
    if((e.deltaY > 0) && (color > 0)&& (color <=255)){
      color--;
    }
    if((e.deltaY < 0) && (color >= 0) && (color <255)){
      color++;
    }
}
poligono.setearColor(color);
redibujar(distinto);

}



function detectarTecla(e) {
  if(e.key == "c" || (e.key == "C")){
  tecla = true;

}
}

function desactivarTecla(e) {
  if(e.key == "c" || (e.key == "C")){
  tecla = false;
  distinto= false;
}
}

document.querySelector(".cerrar").addEventListener("click", cerrarPoligono);

    canvas.addEventListener("mousewheel", cambiarColor);
    document.addEventListener("keydown", detectarTecla);

    document.addEventListener("keyup", desactivarTecla);
    canvas.addEventListener("dblclick",borrarCirc);
    canvas.addEventListener("click", crearCirculo);
    canvas.addEventListener("mousedown", seleccionar);
    canvas.addEventListener("mouseup", soltar);
    canvas.addEventListener("mousemove", arrastrarFigura);
