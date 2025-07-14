
const texto = "Consultorio de Especialidades Odontológicas";
const titulo = document.getElementById("titulo-efecto");

let i = 0;
function escribir() {
  if (i < texto.length) {
    titulo.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 80);
  }
}

window.addEventListener("DOMContentLoaded", escribir);

// Validar 
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('.formulario');

  formulario.addEventListener('submit', (evento) => {
    const nombre = obtenerValor('input[name="nombre"]');
    const correo = obtenerValor('input[name="correo"]');
    const mensaje = obtenerValor('textarea[name="mensaje"]');

    if (!validarCampos(nombre, correo, mensaje)) {
      evento.preventDefault(); 
      alert('Por favor, completa todos los campos correctamente.');
    }
    
  });
});


function obtenerValor(selector) {
  return document.querySelector(selector).value.trim();
}

// Validar campos
function validarCampos(nombre, correo, mensaje) {
  return (
    nombre.length > 0 &&
    correo.includes('@') &&
    mensaje.length > 0
  );
}

// Mostrar mensaje de éxito 
function mostrarMensajeExito() {
  const mensaje = document.getElementById('mensaje-exito');
  const formulario = document.querySelector('.formulario');

  mensaje.style.display = 'block';
  formulario.reset();

  setTimeout(() => {
    mensaje.style.display = 'none';
  }, 5000);
}


//anuncio flotante//
window.addEventListener('load', function () {
  setTimeout(function () {
    // Crear el contenedor del anuncio
    const anuncio = document.createElement('div');
    anuncio.classList.add('anuncio-flotante');

    // Crear botón cerrar
    const cerrarBtn = document.createElement('button');
    cerrarBtn.innerHTML = '&times;';
    cerrarBtn.addEventListener('click', function () {
      anuncio.remove();
    });

    // Crear imagen
    const imagen = document.createElement('img');
    imagen.src = 'img/anuncio.jpg'; // Cambia a la ruta real de tu imagen
    imagen.alt = 'Promoción del mes';

    // Armar el anuncio
    anuncio.appendChild(cerrarBtn);
    anuncio.appendChild(imagen);

    // Agregar al body
    document.body.appendChild(anuncio);
  }, 5000); // Mostrar después de 5 segundos
});