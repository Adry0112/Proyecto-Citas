# Mi Proyecto de Citas de Softwans

**Descripción:**

Esta aplicación web permite a los usuarios gestionar sus citas de manera sencilla. Permite crear, editar y eliminar citas.

**Tecnologías:**

* Frontend: HTML, JavaScript, CSS
* Backend: Node.js


**Instalación:**

1. Clona el repositorio: `git clone https://github.com/Adry0112/Proyecto-Citas.git`
2. Instala las dependencias: npm install -g json-servernpm y  install json-server --save-dev
4. Inicia el servidor de desarrollo: `json-server --watch db.json --port 3001`

**API:**

* **Base URL:** http://localhost:3000/
* **Recursos:**
    * **Citas:**
        * GET /citas: Obtener todas las citas
        * POST /citas: Crear una nueva cita
        * GET /citas/:id: Obtener una cita por ID
        * PUT /citas/:id: Editar una cita
        * DELETE /citas/:id: Eliminar una cita
    * **Usuarios:**
        * POST /register: Registrar un nuevo usuario
        * POST /login: Iniciar sesión

**Inicio de sesión y Registro:**
* **Registro:**
    * Enviar una solicitud POST a `/register` con los datos del usuario (nombre de usuario, correo electrónico, contraseña).
* **Inicio de sesión:**
    * Enviar una solicitud POST a `/login` con las credenciales del usuario.


**Autor:**
Adriancy Rodriguez