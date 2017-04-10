/* events in js */

window.onload = function(){
	alert("page is loaded");
	
	/*
	document.onclick = function(){
		alert("click on document");
	}
	*/
	
	/*
	document.addEventListener("click", function(){
		//
		
	});
	*/
	
	var elem = document.getElementsByClassName('text');
	elem = elem[0];
	elem.onclick = function(){			
		alert("click on first div");
	}
	
	var elem1 = document.getElementsByClassName('text2');
	elem1 = elem1[0];
	elem1.ondblclick = function(){
		alert("double click on second div and null event of first div");
		
		// null to event by class text
		elem.onclick = function(){}
	}
};