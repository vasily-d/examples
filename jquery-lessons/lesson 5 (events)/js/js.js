/*window.onload = function()
{
	alert();
}*/

/*$(document).ready(function(){
	
});*/

$(document).ready(function(){

	//события в jquery
	/*
	$('.main li a').click(function(e){
		
		//alert('');
		$(this).toggleClass('add');
		//$(this).hide();
		//$(this).show();	
	});
	*/
	
	$('.main li a').on('click', function(e){
		
		//alert('');
		$(this).toggleClass('add');
		//$(this).hide();
		//$(this).show();	
	});

	$(document).on('keydown', function(e){
		console.log(e.keyCode);
	});	
});