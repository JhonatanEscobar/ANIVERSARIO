document.addEventListener('DOMContentLoaded', function() {
    const toggleMensajeButton = document.getElementById('toggleMensaje');
    const carta1 = document.getElementById('carta1');
    const mensajeOculto = document.getElementById('mensajeOculto');

    toggleMensajeButton.addEventListener('click', function() {
        if (carta1.style.display === 'none') {
            // Mostrar la carta y ocultar el mensaje
            carta1.style.display = 'block';
            mensajeOculto.style.display = 'none';
            toggleMensajeButton.textContent = 'Mostrar mensaje especial';
        } else {
            // Ocultar la carta y mostrar el mensaje
            carta1.style.display = 'none';
            mensajeOculto.style.display = 'block';
            toggleMensajeButton.textContent = 'Volver a la carta';
        }
    });
});w