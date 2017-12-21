$(document).ready(function() {
 var tweet = $('#writte-tweet');
 var btn = $('#btn');
 $('.newBox').text("");
// console.log(tweet.val());
// console.log(btn);
    $(btn).on('click', function(){

        $('<div id =newBox class=newBox></div>').appendTo('body');
        $('.newBox').css('background', 'skyblue');
        $('.newBox').css('height', '150px');
        // agregando el texto al nuevo div 
        $('.newBox:last-child').text(tweet.val());
        // $('.newBox').text(tweet.val());  cambia el texto a todas las cajas
        // $('#newBox').html($(tweet).val() );  cambia el texto solo a la primera caja

        // limpiando el text area
        $('#writte-tweet').val('');
    });



});
