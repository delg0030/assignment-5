var $form = $('.form');
var $name = $('.name');
var $age = $('.age');
var $dinos = $('.dinos');




$form.on('submit', function (e) {  
    e.preventDefault();
    
var $li = $('<li>');    
var $nameH4 = $('<h4>').html($name.val());
var $ageP = $('<p>').html($age.val());
    
$li.append($nameH4).append($ageP);
$dinos.append($li);

});

$dinos.on('click', 'li', function() {
    $(this).addClass('js-strike');
});




