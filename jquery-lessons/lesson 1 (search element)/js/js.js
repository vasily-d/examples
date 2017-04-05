/*window.onload = function()
{
	alert();
}*/

/*$(document).ready(function(){
	
});*/

$(function(){
	// поиск элементов на странице посредством jquery
	console.log('-------.main------------');
	var elem = $('.main');
	console.log(elem);	//коллекция
	console.log('-------------------');
	
	console.log('--------all li-----------');
	elem = $('.main aside li');
	console.log(elem);	//коллекция
	console.log(elem[0]);
	console.log(elem[0].innerHTML);
	console.log('-------------------');
	
	console.log('--------header----------');
	elem = $('header');
	console.log(elem[0].innerHTML);
	console.log('-------------------');

	console.log('-------div------------');
	elem = $('div');
	console.log(elem);	//все дивы
	console.log('-------------------');

	console.log('--------odd-----------');
	elem = $('.main aside li:odd');
	console.log(elem);	//чет элемент
	console.log('-------------------');
	
	console.log('--------even-----------');
	elem = $('.main aside li:even');
	console.log(elem);	//нечет элемент
	console.log('-------------------');
	
	console.log('--------first-child-----------');
	elem = $('.main aside li:first-child');
	console.log(elem);	//первые элементы для 2 ul
	
	console.log('-------last-child-----------');
	elem = $('.main aside li:last-child');
	console.log(elem);	//последние элементы для 2 ul
});