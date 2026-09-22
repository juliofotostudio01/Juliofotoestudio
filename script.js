const control = document.getElementById("control");
const fotoDespues = document.querySelector(".foto-despues");

control.addEventListener("input", function () {
    const valor = control.value;
    fotoDespues.style.clipPath = `inset(0 ${100 - valor}% 0 0)`;
});
const visor = document.getElementById("visorImagen");
const imagenGrande = document.getElementById("imagenGrande");
const cerrarVisor = document.querySelector(".cerrar-visor");
const fotosGaleria = document.querySelectorAll(".foto-trabajo img");

fotosGaleria.forEach(function(foto) {
    foto.addEventListener("click", function() {
        imagenGrande.src = foto.src;
        visor.style.display = "flex";
    });
});

cerrarVisor.addEventListener("click", function() {
    visor.style.display = "none";
});

visor.addEventListener("click", function(evento) {
    if (evento.target === visor) {
        visor.style.display = "none";
    }
});
const secciones = document.querySelectorAll("section, header");
const enlacesMenu = document.querySelectorAll(".menu a");

window.addEventListener("scroll", function () {

    let seccionActual = "";

    secciones.forEach(function (seccion) {
        const posicion = seccion.offsetTop - 150;

        if (window.scrollY >= posicion) {
            seccionActual = seccion.getAttribute("id");
        }
    });

    enlacesMenu.forEach(function (enlace) {
        enlace.classList.remove("activo");

        if (enlace.getAttribute("href") === "#" + seccionActual) {
            enlace.classList.add("activo");
        }
    });

});