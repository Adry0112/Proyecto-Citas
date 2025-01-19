document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                alert("Inicio de sesión exitoso.");
                window.location.href = 'index.html';
            } else {
                alert("Credenciales incorrectas. Intenta de nuevo.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Hubo un problema al iniciar sesión.");
        });
});