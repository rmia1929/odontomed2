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

// Validar antes de enviar
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
  
    const anuncio = document.createElement('div');
    anuncio.classList.add('anuncio-flotante');

    const cerrarBtn = document.createElement('button');
    cerrarBtn.innerHTML = '&times;';
    cerrarBtn.addEventListener('click', function () {
      anuncio.remove();
    });

    const imagen = document.createElement('img');
    imagen.src = 'img/anuncio.jpg'; 
    imagen.alt = 'Promoción del mes';

    anuncio.appendChild(cerrarBtn);
    anuncio.appendChild(imagen);

    document.body.appendChild(anuncio);
  }, 5000); 
});
