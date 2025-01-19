document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = { name, email, password };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert ("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = 'login.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Hubo un problema al registrar el usuario.");
    });
});