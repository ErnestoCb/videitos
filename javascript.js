$(document).ready(function() {

//Trae el source del video del data-src en el boton
var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

    
    
// Esto es lo que hace que se autoreproduzca al abrir el modal
$('#myModal').on('shown.bs.modal', function (e) {
    
// Esto pone el video en autoplay y que no muestre videos relacionados (los videos que aparecen en la barra de abajo)
$("#video").attr('src',$videoSrc + "?playsinline=1&autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
})
    


// Esto deberia pausar el video completamente al cerrar el modal
$('#myModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
}) 
    
    

});

console.log("s");