// Guardar registro
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const user = {
                userType: document.getElementById('userType').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                password: document.getElementById('password').value, // Captura la contraseña
            };

            // Guardar en localStorage
            localStorage.setItem('user', JSON.stringify(user));
            console.log('Usuario registrado:', user);

            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = '../html/login.html'; // Ajusta la ruta según tu proyecto
        });
    }
});


