<?php

// si empieza con $ es variable si empieza con $_ es una funcion

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $peppo=$_POST['nombre'];
    $apellido=$_POST['apelli'];
    $celular=$_POST['celu'];
    $correo=$_POST['email'];

    //Indicamos el correo de destino
    $destinatario= '76204445@certus.edu.pe';

    //Indicamos el asunto del correo
    $asunto='Matrícula';

    //Disenamos el cuerpo del mensaje (el punto es para concatenar) (el \n es salto de linea)
    $cuerpo.= "Nombres:" . $peppo . "\n";
    $cuerpo.= "Apellidos:" . $apellido . "\n";
    $cuerpo.= "Celular:" . $celular . "\n";
    $cuerpo.= "Correo: " . $correo . "\n";

    //enviamos el correo con los datos configurados ( if(mail()) es como una funcion pero se llama metodo recibe 3 argumentos)
    if(mail($destinatario, $asunto, $cuerpo)){
        echo "El mensaje se ha enviado satisfactoriamente";
    }else{
        echo "Error No se pudo enviar el mensaje";
    }
}
//confirmacion del mensaje (echo)
?>