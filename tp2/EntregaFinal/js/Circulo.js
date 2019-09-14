
class Circulo {
  constructor(x, y, color) {
    this.coordenadaX = x;
    this.coordenadaY = y;
    this.color = color;
    this.tamanio = 10;
    this.centro = false;
  }

  crearCirculo() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.coordenadaX, this.coordenadaY, this.tamanio, 0, Math.PI * 2);
    ctx.fill();
  }

  getCoordenadaX(){
    return this.coordenadaX;
  }
  getCoordenadaY(){
    return this.coordenadaY;
  }

  circuloCentral(distinto,colorCentro){
    if(distinto == true){
    this.color = colorCentro;
  }
    this.tamanio = 7;
    this.centro = true;
  }

  setColor(rgb){
    this.color = rgb;
  }

  getCirculoCentral(){
    return this.centro;
  }
  clickeado(x,y){
    let hX = this.coordenadaX;
    let hY = this.coordenadaY;
    let distancia = Math.sqrt((Math.pow((x-hX),2))+(Math.pow((y-hY),2)));
    if(distancia>this.tamanio+10){
      return false;
    }
    else{
      return true;
    }
  }

  actualizar(x,y){
    this.coordenadaX = x;
    this.coordenadaY = y;
  }
}
