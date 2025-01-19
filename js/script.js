document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Limpiar mensajes de error anteriores
    clearErrors();

    // Validaciones
    let isValid = true;

    if (!name) {
        showError('name', "Por favor, ingresa tu nombre.");
        isValid = false;
    }

    if (!email) {
        showError('email', "Por favor, ingresa tu correo electrónico.");
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('email', "Por favor, ingresa un correo electrónico válido.");
            isValid = false;
        }
    }

    if (!service) {
        showError('service', "Por favor, selecciona un servicio.");
        isValid = false;
    }

    if (!date) {
        showError('date', "Por favor, selecciona una fecha.");
        isValid = false;
    }

    if (!time) {
        showError('time', "Por favor, selecciona una hora.");
        isValid = false;
    }

    if (isValid) {
        // Crear un objeto de cita
        const appointment = {
            name: name,
            email: email,
            service: service,
            date: date,
            time: time
        };
    
        // Enviar la cita a la API
        fetch('http://localhost:3000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(response => response.json())
        .then(data => {
            // Redirigir a la página de confirmación
            window.location.href = 'confirmation.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Hubo un problema al agendar la cita.");
        });
    }

// Función para mostrar errores
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;
    field.parentNode.insertBefore(error, field.nextSibling);
}

// Función para limpiar errores
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}
})