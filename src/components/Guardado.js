function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;

    // Obtener datos existentes o inicializar un array vacío
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    // Agregar la nueva tarea al array
    tareas.push({ nombre, descripcion });

    // Guardar el array de tareas en el localStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));

    // Actualizar la lista de tareas mostrada en la página
    mostrarTareas();
}

// Función para mostrar las tareas almacenadas en el localStorage
function mostrarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    const listaTareas = document.getElementById('tareas');

    listaTareas.innerHTML = '';

    tareas.forEach(function(tarea) {
        const li = document.createElement('li');
        li.textContent = tarea.nombre + ': ' + tarea.descripcion;
        listaTareas.appendChild(li);
    });
}

// Mostrar tareas al cargar la página
mostrarTareas();