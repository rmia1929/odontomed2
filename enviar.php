
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $destino = "rmia1929@gmail.com";
    $asunto = "Mensaje desde el formulario de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Mensaje:\n$mensaje";

    $cabeceras = "From: $correo";

    if (mail($destino, $asunto, $contenido, $cabeceras)) {
        echo "<script>
                alert('Mensaje enviado correctamente');
                window.history.back();
              </script>";
    } else {
        echo "<script>
                alert('Error al enviar el mensaje');
                window.history.back();
              </script>";
    }
}
?>
