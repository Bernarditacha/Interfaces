class Poligono {

  constructor() {
    this.circulos=0;
    this.arregloCirculos = [];
    this.centro = null;
    this.colorLineas = "rgb(255,250,0)";
    this.colorCentro;
  }

  addCirculo(circulo){
    this.arregloCirculos[this.circulos]=circulo;
    this.circulos++;
  }


  trazarLinea(pX,pY){
    if(this.circulos > 1){
      let x = this.arregloCirculos[this.circulos-2].getCoordenadaX();
      let y = this.arregloCirculos[this.circulos-2].getCoordenadaY();
      ctx.strokeStyle = this.colorLineas;
      ctx.moveTo(x,y);
      ctx.lineTo(pX,pY);
      ctx.stroke();
    }
  }

  cerrarPoligono(){
    let  x= this.arregloCirculos[0].getCoordenadaX();
    let  y= this.arregloCirculos[0].getCoordenadaY();
    ctx.strokeStyle = this.colorLineas;
    ctx.lineTo(x,y);
    ctx.stroke();
    this.calcularCentro();
  }

  calcularCentro(distinto){
    let puntos = this.arregloCirculos;
    let centro = {x: 0, y: 0};
    for(var i = 0; i < puntos.length; i++){
      var punto = puntos[i];
      centro.x += punto.getCoordenadaX();
      centro.y += punto.getCoordenadaY();
    }
    centro.x /= puntos.length;
    centro.y /= puntos.length;
    var circuloCentral = new Circulo(centro.x,centro.y,"rgb(0,155,0)");
    circuloCentral.circuloCentral(distinto,this.colorCentro);
    circuloCentral.crearCirculo();
    this.centro=circuloCentral;

    let ocultar = document.querySelector('.elementos');
    ocultar.hidden=true;
  }

  detectarClick(pX,pY){
    for(let i =0;i<this.arregloCirculos.length;i++){
      if(this.arregloCirculos[i].clickeado(pX,pY)){
        return this.arregloCirculos[i];
      }
    }
    if (this.centro != null){
      if (this.centro.clickeado(pX,pY))
      {
        return this.centro;
      }
    }
  }

  moverCentro(x,y){
    for(let i=0;i<this.arregloCirculos.length;i++){
      this.arregloCirculos[i].actualizar(this.arregloCirculos[i].getCoordenadaX()+x,this.arregloCirculos[i].getCoordenadaY()+y);
    }
    ctx.clearRect(0, 0, 800, 600);
    var primero = null;
    var segundo = null;
    for(let i=0;i<this.arregloCirculos.length;i++){
      primero = segundo;
      segundo = this.arregloCirculos[i];
      this.arregloCirculos[i].crearCirculo();
      if (primero != null)
      {
        this.trazarNuevasLineas(primero,segundo);
      }
    }
    this.trazarNuevasLineas(segundo,this.arregloCirculos[0]);
    this.centro.crearCirculo();

  }

  redibujar(distinto){
    ctx.clearRect(0, 0, 800, 600);
    var primero = null;
    var segundo = null;
    for(let i=0;i<this.arregloCirculos.length;i++){
      primero = segundo;
      segundo = this.arregloCirculos[i];
      this.arregloCirculos[i].crearCirculo();
      if (primero != null)
      {
        this.trazarNuevasLineas(primero,segundo);
      }
    }
    this.trazarNuevasLineas(segundo,this.arregloCirculos[0]);
    this.calcularCentro(distinto);
    this.centro.crearCirculo();
  }

  trazarNuevasLineas(primero,segundo){
    ctx.strokeStyle = this.colorLineas;
    ctx.moveTo(primero.getCoordenadaX(),primero.getCoordenadaY());
    ctx.lineTo(segundo.getCoordenadaX(),segundo.getCoordenadaY());
    ctx.stroke();
  }


  borrarCirculo(c){
    this.arregloCirculos;
    for(var i =0;i<this.circulos;i++){
      if(this.arregloCirculos[i]==c){
        var pos=i;
      }
    }
    this.arregloCirculos.splice(pos,1);
  }


  setearColor(color){
    for (var i = 0; i < this.arregloCirculos.length; i++) {
      this.arregloCirculos[i].setColor("rgb("+color+",0,0)");
    }
    this.colorCentro = ("rgb(0,"+color+",0)");

    this.colorLineas = ("rgb("+color+","+color+",0)");
  }

}
