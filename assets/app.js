//alert("viborita");
var area = document.getElementById("area");
var vibora = document.getElementById("vibora");

var posicionX = 0;
var posicionY = 0;

var desplazamiento = 50;


function moverVibora(perrito){
    var arriba = 38;
    var abajo = 40;
    var izq = 37;
    var derecha = 39;
    switch(perrito.keyCode){
        case arriba:
            //alert(perrito.key);
            posicionY -= desplazamiento;
            if(posicionY < 0){
                terminarJuego();
            } else {
                vibora.style.marginTop = posicionY + "px";
            }
            break;
        case abajo:
            //alert(perrito.key);
            posicionY += desplazamiento;
            if(posicionY > 450){
                terminarJuego();
            } else {
                vibora.style.marginTop = posicionY + "px";
            }
            break;
        case izq:
            //alert(perrito.key);
            posicionX -= desplazamiento;
            if(posicionX < 0){
                terminarJuego();
            } else {
                vibora.style.marginLeft = posicionX + "px";
            }
            break; 
        case derecha:
            //alert(perrito.key);
            posicionX += desplazamiento;
            if(posicionX > 450){
                terminarJuego();
            } else {
                vibora.style.marginLeft = posicionX + "px";
            }
            break;
    }
}

function terminarJuego(){
    alert("Fin del juego");
}

window.addEventListener("keydown",moverVibora);