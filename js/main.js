var $form = $('.form');
var $name = $('.name');
var $age = $('.age');
var $dinos = $('.dinos');

$form.on('submit', function (e) {  
    e.preventDefault();
    
var $li = $('<li>');    
var $nameH4 = $('<h4>').html($name.val());
var $ageP = $('<p>').html($age.val());
var $button = $('<button>');
var $button = $('<button class="delete">X</button>')

$li.append($button);


  $button.html('&#x2717');
  $button.addClass('delete');

  $button.on('click', function(){
    $(this).parent().remove();
  })
    
$li.append($nameH4).append($ageP);
$dinos.append($li);
$addH2.append($button);

});

$dinos.on('click', 'li', function () {
    $(this).toggleClass('strike');
});