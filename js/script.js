$(document).ready(function () {

$('#navContact').on('click', function () {
     $('#contact').show();
});

$("#closeBox").on('click', function(){
    $('#contact').slideToggle();
})

});