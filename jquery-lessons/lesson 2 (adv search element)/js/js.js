/*window.onload = function()
{
	alert();
}*/

$(document).ready(function(){
	// дополнительные элементы поиска элементов - jquery
	console.log('--------parent-------');
	var elem = $('.main aside li a');
	console.log(elem);
	console.log(elem[0].innerHTML);
	console.log(elem.eq(0)[0]);
	console.log(elem.parent().parent()[1]);
	
	//фильтры для наборов элементов jquery
	console.log('-------:not--------');
	var el = $('.main aside ul li a:not(.one)');
	console.log(el);
	console.log('-------:gt--------');
	el = $('.main aside ul li:gt(1)>a'); //с 2
	console.log(el);
	console.log('------a.one---------');
	el = $('.main aside ul li a.one');
	console.log(el);
	console.log('------:contains---------');
	el = $('ul li a:contains(Menu3)');	
	console.log(el);
	console.log('-------:has--------');
	el = $('.main aside ul li:has(a.one)');
	console.log(el);	
});