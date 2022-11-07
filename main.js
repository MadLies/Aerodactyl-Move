let x = 0;
let y = 0;

let aerodactyl = document.getElementById("Aerodactyl");

function moveAerodactyl(event) {
if(event.keyCode == '39') {
  x = x+ 50;  
  aerodactyl.style.left = x + 'px';
  document.getElementById("Aerodactyl").src = "files/Aero2.png";
  
}
else if (event.keyCode == '37') {
  x-=50;
  aerodactyl.style.left = x + "px";
  document.getElementById("Aerodactyl").src = "files/Aero1.png";
}

else if (event.keyCode == '38') {
  y+=50;
  aerodactyl.style.top = (-y) + "px";


}

else if (event.keyCode == '40') {
    y-=50;
    aerodactyl.style.top = (-y) + "px";
    
}
}

window.onkeydown = moveAerodactyl;