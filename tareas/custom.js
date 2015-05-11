/**
 * Created by Desarrollo Web on 06/05/2015.
 */

// esta libreria es para evitar que se recarge para que sea dinamico

$(document).ready(function(){
    $("#ftarea").submit(function(event){
        event.preventDefault();
        $.ajax({
                type:'POST',
                url: 'send.php',
                dat: $(this).serialize(),//captura los datos
                success:function(data){
                    $("#respuesta").slideDown();
                    $("#respuesta").html(data);
                }
            });


    });
});