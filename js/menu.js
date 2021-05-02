$(document).ready(main);

var contador = 1;
$('.menu_bar').click(function(){

    if(contador == 1)
    {
        $('nav').animate({
            left: '0'
        });

        contador = 0;
    }
    else
    {
        contador = 1;
        $('nav').animate({
            left: '-100%'
        });
    }
});

/*-----------------------------------------------------------------------------*/

var mediaquery = window.matchMedia("(max-width:800px)");

$('.submenu').click(function(){

    if (mediaquery.matches) {
        console.log("LA RESOLUCION < a 800px")
        $(this).children('.children').slideToggle();
    }

});
         






  




