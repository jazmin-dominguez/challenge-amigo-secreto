// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 * Esta función se llama desde el botón "Añadir" en el HTML
 */
function agregarAmigo() {
    // Obtener el elemento input por su ID
    const inputAmigo = document.getElementById('amigo');
    
    // Verificar que el elemento existe
    if (!inputAmigo) {
        console.error('No se encontró el elemento con ID "amigo"');
        return;
    }
    
    // Obtener el valor y limpiar espacios en blanco
    const nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        inputAmigo.focus();
        return;
    }
    
    // Verificar si el nombre ya existe en la lista (case insensitive)
    const nombreExiste = amigos.some(amigo => 
        amigo.toLowerCase() === nombre.toLowerCase()
    );
    
    if (nombreExiste) {
        alert('Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.');
        inputAmigo.focus();
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus();
    
    // Actualizar la visualización de la lista
    mostrarAmigos();
    
    // Limpiar resultado anterior si existe
    limpiarResultado();
    
    console.log('Amigo agregado:', nombre);
    console.log('Lista actual:', amigos);
}

/**
 * Función para mostrar la lista de amigos en pantalla
 */
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    
    // Verificar que el elemento existe
    if (!lista) {
        console.error('No se encontró el elemento con ID "listaAmigos"');
        return;
    }
    
    // Limpiar la lista actual
    lista.innerHTML = '';
    
    // Si no hay amigos, no mostrar nada o mostrar mensaje
    if (amigos.length === 0) {
        return;
    }
    
    // Crear elementos de lista para cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.setAttribute('data-index', index);
        li.style.cursor = 'pointer';
        li.title = 'Haz clic para eliminar';
        lista.appendChild(li);
    });
}

/**
 * Función para sortear un amigo secreto
 */
function sortearAmigo() {
    console.log('Iniciando sorteo...');
    console.log('Amigos disponibles:', amigos);
    
    // Verificar que hay al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, agrega al menos un nombre antes de sortear.');
        const inputAmigo = document.getElementById('amigo');
        if (inputAmigo) inputAmigo.focus();
        return;
    }
    
    // Verificar que hay al menos 2 amigos para hacer el sorteo más interesante
    if (amigos.length < 2) {
        const continuar = confirm('Solo hay un amigo en la lista. ¿Quieres continuar con el sorteo de todas formas?');
        if (!continuar) return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    console.log('Amigo sorteado:', amigoSorteado);
    
    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
}

/**
 * Función para mostrar el resultado del sorteo
 */
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    
    // Verificar que el elemento existe
    if (!resultado) {
        console.error('No se encontró el elemento con ID "resultado"');
        alert(`¡El amigo secreto es: ${amigoSorteado}!`);
        return;
    }
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear elemento de lista para el resultado
    const li = document.createElement('li');
    li.textContent = `🎉 ¡El amigo secreto es: ${amigoSorteado}! 🎉`;
    resultado.appendChild(li);
}

/**
 * Función para limpiar el resultado del sorteo
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = '';
    }
}

/**
 * Función para eliminar un amigo de la lista
 */
function eliminarAmigo(index) {
    if (index < 0 || index >= amigos.length) {
        console.error('Índice inválido:', index);
        return;
    }
    
    const nombreAEliminar = amigos[index];
    const confirmar = confirm(`¿Estás seguro de que quieres eliminar a "${nombreAEliminar}" de la lista?`);
    
    if (confirmar) {
        amigos.splice(index, 1);
        mostrarAmigos();
        limpiarResultado();
        console.log('Amigo eliminado:', nombreAEliminar);
        console.log('Lista actualizada:', amigos);
    }
}

// Event Listeners - Se ejecutan cuando se carga la página

// Esperar a que se cargue completamente el DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando aplicación...');
    
    // Enfocar el campo de entrada
    const inputAmigo = document.getElementById('amigo');
    if (inputAmigo) {
        inputAmigo.focus();
        
        // Permitir agregar amigo presionando Enter
        inputAmigo.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                agregarAmigo();
            }
        });
        
        console.log('Event listener de Enter agregado');
    } else {
        console.error('No se pudo encontrar el elemento input con ID "amigo"');
    }
    
    // Event listener para eliminar amigos haciendo clic en la lista
    const listaAmigos = document.getElementById('listaAmigos');
    if (listaAmigos) {
        listaAmigos.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                const index = event.target.getAttribute('data-index');
                if (index !== null) {
                    eliminarAmigo(parseInt(index));
                }
            }
        });
        
        console.log('Event listener de eliminación agregado');
    }
    
    console.log('Aplicación inicializada correctamente');
});

// Funciones adicionales para debugging

/**
 * Función para reiniciar el juego (útil para debugging)
 */
function reiniciarJuego() {
    if (amigos.length > 0) {
        const confirmar = confirm('¿Estás seguro de que quieres reiniciar el juego? Se eliminarán todos los nombres de la lista.');
        if (confirmar) {
            amigos = [];
            mostrarAmigos();
            limpiarResultado();
            const inputAmigo = document.getElementById('amigo');
            if (inputAmigo) inputAmigo.focus();
            console.log('Juego reiniciado');
        }
    } else {
        alert('No hay nada que reiniciar. La lista ya está vacía.');
    }
}

/**
 * Función para obtener estadísticas (útil para debugging)
 */
function obtenerEstadisticas() {
    const estadisticas = {
        totalAmigos: amigos.length,
        amigos: [...amigos],
        estaListoParaSortear: amigos.length >= 1
    };
    
    console.log('Estadísticas actuales:', estadisticas);
    return estadisticas;
}

// Función de debugging - eliminar en producción
function debug() {
    console.log('=== DEBUG INFO ===');
    console.log('Amigos:', amigos);
    console.log('Input existe:', !!document.getElementById('amigo'));
    console.log('Lista existe:', !!document.getElementById('listaAmigos'));
    console.log('Resultado existe:', !!document.getElementById('resultado'));
    console.log('==================');
}