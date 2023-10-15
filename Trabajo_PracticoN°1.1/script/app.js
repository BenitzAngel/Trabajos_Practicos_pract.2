// menu lateral
var menu_visible = false;
// el nav  es el ID=nav del html
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
  if (menu_visible == false) { //si esta oculto
    menu.style.display = "block";
    menu_visible = true;

  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

// ocultar el menu una vez que seleccionamos una opcion
let links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function(){
    menu.style.display = "none";
    menu_visible =  false;
  }
  
}