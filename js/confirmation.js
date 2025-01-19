document.addEventListener('DOMContentLoaded', function() {
    // Obtener el mensaje de confirmación
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerText = "¡Tu cita ha sido agendada con éxito!";

    // Contador para la redirección
    let countdown = 3; 
    const countdownElement = document.getElementById('countdown');

    // Actualizar el contador cada segundo
    const interval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;

        // Si el contador llega a 0, redirigir a la página de citas
        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = 'appointments.html';
        }
    }, 1000);
});