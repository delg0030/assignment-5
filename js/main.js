var $form = $('.form');
var $name = $('.name');
var $age = $('.age');
var $dinos = $('.dinos');



$form.on('submit', function (e) {  
    e.preventDefault();
    
var $li = $('<li>');    
var $nameH2 = $('<h2>').html($name.val());
var $ageP = $('<p>').html($age.val());
    
$li.append($nameH2).append($ageP);
$dinos.append($li);

});





