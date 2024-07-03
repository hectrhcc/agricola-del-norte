$(document).ready(function() {
     //menu
    $('.menu-toggle').click(function(){
        $(this).toggleClass('open');
      });
       // Cargar contenido inicial
    $('#contenido-dinamico').load('inicio.html', function() {
        $(this).addClass('loaded'); 
    });
// Manejar clicks en los enlaces (ya no va porque todas las subpaginas ahora son secciones)
/*
$('.cargar-contenido').click(function(e) {
    e.preventDefault(); 
    let pagina = $(this).attr('href'); 
    $('#contenido-dinamico').removeClass('loaded');
    // Cargar la página usando AJAX
    $('#contenido-dinamico').load(pagina, function() {
        $(this).addClass('loaded'); 
    });
    return false;
});
*/

});
