/* Boton despelegar menu*/
document.querySelector(".Header-btn").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".Header-line1");
var line2__bars = document.querySelector(".Header-line2");
var line3__bars = document.querySelector(".Header-line3");
var menu = document.querySelector(".Header-nav");

function animateBars() {
    line1__bars.classList.toggle("Header-line--line1");
    line2__bars.classList.toggle("Header-line--line2");
    line3__bars.classList.toggle("Header-line--line3");
    menu.classList.toggle("active");
}

//buscador
var lupa = document.getElementById("lupa");
var inputBuscar = document.getElementById("buscador");
var btnMenu = document.getElementById("btn--menu");

// Variable para llevar un registro del estado del buscador
var buscadorVisible = false;

// Agrega un manejador de eventos al hacer clic en la lupa
lupa.addEventListener("click", function() {
    // Verifica el ancho de la ventana
    var windowWidth = window.innerWidth;

    // Si el ancho de la ventana es mayor que 1012px, muestra/oculta el buscador
    if (windowWidth > 1012) {
        if (!buscadorVisible) { 
            inputBuscar.style.display = "block";
            menu.style.display = "none";
            buscadorVisible = true;
        } else {
            inputBuscar.style.display = "none";
            menu.style.display = "block";
            buscadorVisible = false;
        }
    } else {
        // Si el ancho de la ventana es menor o igual a 1012px, muestra/oculta el menú
        if (btnMenu.style.display === "none") {
            inputBuscar.style.display = "none";
            btnMenu.style.display = "block"; 
        } else {
            inputBuscar.style.display = "block";
            btnMenu.style.display = "none"; 
        }
        
    }
});
