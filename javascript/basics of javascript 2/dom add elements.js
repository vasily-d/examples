/* dom add elements in js */

//1 where add?
var elem = document.getElementById("one");

//2 create elements and what add?
var link = document.createElement("a");
var p = document.createElement("p");

//3 style of elements
link.innerHTML = "Go to google";
link.href = "http://google.com";

p.style.margin = "25px";
p.style.backgroundColor = "white";
p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, maiores recusandae ipsam quia harum libero reiciendis dicta consequuntur. Dolores voluptatibus tempora quae officiis amet fuga recusandae alias dolorem ex deleniti?";

//4 add elements
elem.appendChild(link);
elem.appendChild(p);

// remove child
var removeBtn = document.getElementById("remove");

removeBtn.onclick = function(){
	var elem = document.getElementById("one");
	var elem1 = elem.getElementsByTagName("p")[0];
	
	console.log(elem.removeChild(elem1));
}
