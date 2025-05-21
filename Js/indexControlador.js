document.addEventListener('DOMContentLoaded', () => {
    const sesionIniciada = localStorage.getItem('sesionIniciada');
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const contenedorSesion = document.querySelector('.sesionUsuario');

    if (sesionIniciada === 'true' && usuario && contenedorSesion) {
        contenedorSesion.innerHTML = `
            <div class="nombreUsuario">Hola, ${usuario.nombre}</div>
            <button class="btnCerrarSesion">Cerrar sesión</button>
        `;
        
        const botonCerrarSesion = document.querySelector(".btnCerrarSesion");
        if (botonCerrarSesion) {
            botonCerrarSesion.addEventListener("click", () => {
                localStorage.setItem('sesionIniciada', 'false');
                setTimeout(() => {
                    location.reload();
                }, 500); // Recarga la página para mostrar los botones de inicio y registro otra vez
            });
        }
    } else {
        const botonRegistro = document.querySelector(".btnRegistro");
        const botonSesion = document.querySelector(".btnInicioSesion");

        if (botonRegistro) {
            botonRegistro.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = "archivosHtml/registroUsuario.html";
            });
        }

        if (botonSesion) {
            botonSesion.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = "archivosHtml/sesionUsuario.html";
            });
        }
    }

    // Botón Historia
    const botonHistoria = document.querySelector(".btnHistoria");
    if (botonHistoria) {
        botonHistoria.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "archivosHtml/seccionHistoria.html";
        });
    }


    const botonNovedades = document.querySelector(".btnNovedades");
    if (botonNovedades) {
        botonNovedades.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "archivosHtml/seccionNovedades.html";
        });
    }
});
