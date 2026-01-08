//LOADER

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
    }, 2000); //el setTimeout se puede quitar luego de finalizar la pagina
})

const loader = document.getElementById("loaderPagina");
const showLoader = () => {
 loader.classList.add("show-loader");
}

const hideLoader = () => {
 loader.classList.remove("show-loader");    
}

//COUNTDOWN

let fecha = new Date(2026, 1, 21, 16, 0);
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");


let intervalo = setInterval(() => {

    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;

    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    
    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;


    if (distancia < 0) {
        clearInterval(intervalo);
        cuentaAtras.innerHTML = "<p class='grande'>¡Ya llegamos!</p>"
    }
    
}, 1000)


ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 1500 });