/*window.onload = function()
{
	alert();
}*/

/*$(function(){
	
});*/

$(document).ready(function(){
	console.log('------html get---------');
	var elem = $('.main li a').eq(0);
	console.log(elem.html());
	elem.remove();
	
	console.log('-------html set--------');
	elem = $('.main li a').eq(0);
	console.log(elem.html('11'));	//по умолчанию изменяет все элементы
	console.log(elem.eq(0).html('12')); //перезаписали первый эелемент
	
	console.log('------addClass---------');
	elem.addClass('add');
	
	console.log('------css get/set---------');
	var elem1 = $('.main li a').eq(1);
	console.log(elem1);
	console.log(elem1.css('backgroundColor')); // получить первый элемент по умолчанию
	elem1.css('backgroundColor','#ff0'); //изменить не первый, а все из коллекции!!!!
	
	var style = {backgroundColor: 'red', border: '3px solid red', margin: '10px', 'border-radius': '10px'};
	console.log(elem1.parent().next().find('a'));
	elem1.parent().next().find('a').css(style);	
});