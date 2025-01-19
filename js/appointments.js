document.addEventListener('DOMContentLoaded', function() {
    loadAppointments();
     

    function loadAppointments() {
        fetch('http://localhost:3000/appointments') 
            .then(response => response.json())
            .then(data => {
                const appointmentsContainer = document.getElementById('appointments-container');
                appointmentsContainer.innerHTML = '';

                if (data.length === 0) {
                    appointmentsContainer.innerHTML = '<p>No tienes citas agendadas.</p>';
                } else {
                    data.forEach(appointment => {
                        const appointmentDiv = document.createElement('div');
                        appointmentDiv.className = 'appointment';
                        appointmentDiv.innerHTML = `
                            <h3>${appointment.service}</h3>
                            <p><strong>Nombre:</strong> ${appointment.name}</p>
                            <p><strong>Correo:</strong> ${appointment.email}</p>
                            <p><strong>Fecha:</strong> ${appointment.date}</p>
                            <p><strong>Hora:</strong> ${appointment.time}</p>
                            <div class="appointment-buttons">
                                <button class="edit" data-id="${appointment.id}">Editar</button>
                                <button class="delete" data-id="${appointment.id}">Eliminar</button>
                            </div>

                        `;
                        appointmentsContainer.appendChild(appointmentDiv);
                    });
                }
            })
            .catch(error => {
                console.error('Error al cargar las citas:', error);
                const appointmentsContainer = document.getElementById('appointments-container');
                appointmentsContainer.innerHTML = '<p>Hubo un problema al cargar tus citas.</p>';
            });
    }
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit')) {
          const id = event.target.dataset.id;
          editAppointment(id);
        } else if (event.target.classList.contains('delete')) {
          const id = event.target.dataset.id;
          deleteAppointment(id);
        }
      });
    // Función para editar una cita
    window.editAppointment = function(id) {
        const appointment = prompt("Ingresa los nuevos detalles de la cita (nombre, correo, servicio, fecha, hora) separados por comas:");
        if (appointment) {
            const [name, email, service, date, time] = appointment.split(',');
            const updatedAppointment = { name: name.trim(), email: email.trim(), service: service.trim(), date: date.trim(), time: time.trim() };

            fetch(`http://localhost:3000/appointments/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedAppointment)
            })
            .then(response => {
                if (response.ok) {
                    loadAppointments(); 
                } else {
                    alert("Error al editar la cita.");
                }
            })
            .catch(error => {
                console.error('Error al editar la cita:', error);
            });
        }
    };

    // Función para eliminar una cita
    window.deleteAppointment = function(id) {
        if (confirm("¿Estás seguro de que deseas eliminar esta cita?")) {
            fetch(`http://localhost:3000/appointments/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    loadAppointments();
                } else {
                    alert("Error al eliminar la cita.");
                }
            })
            .catch(error => {
                console.error('Error al eliminar la cita:', error);
            });
        }
    };
   
});