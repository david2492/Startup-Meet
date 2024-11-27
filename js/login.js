// Iniciar sesión
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Recuperar datos del usuario guardado
            const user = JSON.parse(localStorage.getItem('user'));

            // Validar credenciales
            if (user && user.email === email && user.password === password) {
                alert(`¡Bienvenido, ${user.name}!`);
                console.log('Inicio de sesión exitoso:', user);
                // Redirigir a la página principal o dashboard
                window.location.href = 'dashboard.html'; // Cambia según tu estructura
            } else {
                alert('Correo o contraseña incorrectos.');
            }
        });
    }
});