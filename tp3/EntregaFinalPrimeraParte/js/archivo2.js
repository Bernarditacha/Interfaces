/*function reloj(){
    let horaActual  = new Date();
    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();
    horas = (horas > 12)? horas -12 : horas;
    horas = (horas == '00')? 12 : horas;

    let segundero = document.querySelector(".box6");
    let minutero = document.querySelector(".box7");
    let horero = document.querySelector(".box8");

    let rotateS = "rotate("+segundos*6 + "deg)";
    let rotateM = "rotate("+minutos *6 + "deg)";
    let rotateH = "rotate("+((horas*30) + (minutos / 2))+"deg)";

    segundero.style.transform = rotateS;
    minutero.style.transform = rotateM;
    horero.style.transform = rotateH;
}
setInterval(reloj,1000);*/