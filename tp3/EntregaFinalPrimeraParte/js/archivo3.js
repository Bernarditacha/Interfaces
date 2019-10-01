// --- EJERICIO 3 --- //
let box = document.querySelector(".box10");
window.onload = function() {
  box.addEventListener('mousemove', function(event){
    var imagen = document.querySelector(".imagen2");
      var  eX = event.clientX;
      var eY = event.clientY;
      eX = eX - 300;
      eY = eY - 300;
      imagen.style.left = eX+"px";
      imagen.style.top = eY+"px";
      
    });
  }