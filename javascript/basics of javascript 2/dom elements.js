/* dom elements in js */
	
var one = document.getElementById("one");
var all = document.getElementsByTagName("div");

var oneBtn = document.getElementById("single");
var twoBtn = document.getElementById("all");

oneBtn.onclick = function(){
	console.log(one.innerHTML);
}

twoBtn.onclick = function(){
	
	//change tags and style
	for(var i = 0; i < all.length; i++)
	{
		console.log("innerHTML: "+all[i].innerHTML);
		all[i].innerHTML = "change";
		
		all[i].style.backgroundColor = "green";
		console.log("background-color: "+all[i].style.backgroundColor);
	}
	
	//change link - change attribute
	var aElem = document.getElementsByTagName("a");
	var aElem = aElem[0];
	aElem.href = "http://yandex.ru";
	aElem.innerHTML = "Yandex";
}