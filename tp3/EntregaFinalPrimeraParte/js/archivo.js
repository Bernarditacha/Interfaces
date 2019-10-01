// --- EJERICIO 2 --- //
let clase = document.querySelector(".transform0");
clase.addEventListener('click', crearRandom);
//Funcion random para crear clases que apuntan a distintas transformaciones
function crearRandom() {
  let mat = Math.floor(Math.random()*11);
  clase.setAttribute("class","transform"+mat);
  clase = "transform"+mat;
  clase = document.querySelector('.'+clase);
  clase.addEventListener('click', crearRandom);
  console.log(clase);
}
// --- FIN EJERICIO 2 --- //


