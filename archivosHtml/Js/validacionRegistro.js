/* ───────── VALIDACIÓN DE REGISTRO ───────── */
const formRegistro = document.getElementById('formRegistro');
if (formRegistro) {
    formRegistro.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre     = document.getElementById('nombre').value.trim();
        const correo     = document.getElementById('correo').value.trim();
        const contrasena = document.getElementById('contrasena').value.trim();
        const erroresDiv = document.getElementById('errores');

        if (!nombre || !correo || !contrasena) {
            erroresDiv.textContent = 'Todos los campos son obligatorios.';
            return;
        }

        if (!correo.includes('@') || !correo.includes('gmail') || !correo.endsWith('.com')) {
            alert('El correo debe ser un Gmail válido (ej. usuario@gmail.com).');
            return;
        }

        if (contrasena.length < 6) {
            erroresDiv.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            return;
        }

        const usuario = { nombre, correo, contrasena };
        localStorage.setItem('usuario', JSON.stringify(usuario));
        localStorage.setItem('sesionIniciada', 'false'); // ← Importante: aún no está iniciada la sesión

        erroresDiv.style.color = 'green';
        erroresDiv.textContent = 'Registrando tu cuenta...';

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    });
}

/* ───────── VALIDACIÓN DE INICIO DE SESIÓN ───────── */
const formSesion = document.getElementById('formSesion');
if (formSesion) {
    formSesion.addEventListener('submit', (event) => {
        event.preventDefault();

        const correoSesion     = document.getElementById('correoSesion').value.trim();
        const contrasenaSesion = document.getElementById('contrasenaSesion').value.trim();
        const erroresSesionDiv = document.getElementById('erroresSesion');

        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

        if (!usuarioGuardado) {
            erroresSesionDiv.textContent = 'No hay usuarios registrados.';
            return;
        }

        const credencialesOK =
            usuarioGuardado.correo === correoSesion &&
            usuarioGuardado.contrasena === contrasenaSesion;

        if (credencialesOK) {
            localStorage.setItem('sesionIniciada', 'true');

            erroresSesionDiv.style.color = 'green';
            erroresSesionDiv.textContent = 'Iniciando sesión...';

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1500);
        } else {
            erroresSesionDiv.textContent = 'Correo o contraseña incorrectos.';
        }
    });
}
