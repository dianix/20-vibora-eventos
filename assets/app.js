//alert("viborita");
var botonJugar = document.getElementById("reiniciar");
var vibora = document.getElementById("vibora");

var posicionX = 0;
var posicionY = 0;

var desplazamiento = 50;


function moverVibora(event){
    switch(event.key){
        case "ArrowUp":
            //console.log(event.key);
            posicionY -= desplazamiento;
            if(posicionY < 0){
                terminarJuego();
            } else {
                vibora.style.marginTop = posicionY + "px";
            }
            break;
        case "ArrowDown":
            //console.log(event.key);
            posicionY += desplazamiento;
            if(posicionY > 450){
                terminarJuego();
            } else {
                vibora.style.marginTop = posicionY + "px";
            }
            break;
        case "ArrowLeft":
            //console.log(event.key);
            posicionX -= desplazamiento;
            if(posicionX < 0){
                terminarJuego();
            } else {
                vibora.style.marginLeft = posicionX + "px";
            }
            break; 
        case "ArrowRight":
            //console.log(event.key);
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
    alert("FIN DEL JUEGO");
    window.removeEventListener("keydown",moverVibora);
}

function reinicioJuego(){
    posicionX = 0;
    posicionY = 0;
    vibora.style.marginLeft = posicionX;
    vibora.style.marginTop = posicionY;
    window.addEventListener("keydown",moverVibora);
}

window.addEventListener("keydown",moverVibora);
botonJugar.addEventListener("click",reinicioJuego);