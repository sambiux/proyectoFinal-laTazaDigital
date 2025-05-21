// Selecciona el contenedor del slider
let slider = document.querySelector('.slider .list');
// Selecciona todos los elementos individuales del slider
let items = document.querySelectorAll('.slider .list .item');
// Botón para ir al siguiente slide
let next = document.getElementById('next');
// Botón para ir al slide anterior
let prev = document.getElementById('prev');
// Selecciona todos los puntos de navegación (dots)
let dots = document.querySelectorAll('.slider .dots li');

// Calcula el índice máximo de los slides
let lengthItems = items.length - 1;
// Índice del slide activo
let active = 0;

// Evento para el botón "siguiente"
next.onclick = function(){
    // Si no es el último, avanza; si es el último, vuelve al primero
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

// Evento para el botón "anterior"
prev.onclick = function(){
    // Si no es el primero, retrocede; si es el primero, va al último
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

// Intervalo automático para cambiar de slide cada 7 segundos
let refreshInterval = setInterval(()=> {next.click()}, 7000);

// Función para actualizar el slider
function reloadSlider(){
    // Mueve el slider al slide activo
    slider.style.left = -items[active].offsetLeft + 'px';

    // Actualiza el punto activo
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    // Reinicia el intervalo automático
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 7000);
}

// Evento para los puntos de navegación (dots)
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key; // Cambia al slide correspondiente
         reloadSlider();
    })
})

// Cuando la ventana cambia de tamaño, ajusta el slider
window.onresize = function(event) {
    reloadSlider();
};