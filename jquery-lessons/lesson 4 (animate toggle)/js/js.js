/*window.onload = function()
{
	alert();
}*/

/*$(function(){
	
});*/

$(document).ready(function(){
		
	//анимация
	$('.main li a').eq(0).click(function(e){
		//alert();
		
		$(this).parent().parent().hide();
		console.log($(this).parent().parent());
		
		$(this).parent().parent().fadeIn(2000, function(){
			//колбек
			$(this).fadeOut(2000);
		});
	});

	$('.main li a').eq(1).click(function(e){
		
		$(this).fadeOut(2000, function(){
			//callback
			
			$(this).fadeIn(2000, function(){
				//callback
				
				$(this).slideUp(2000, function(){
					//callback
					//slideDown
				});				
			});
		});	
	});	
});