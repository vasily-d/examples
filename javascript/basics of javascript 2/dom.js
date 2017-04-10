/* dom in js */
var elem = document.getElementById("one");
console.log("ById:");
console.log(elem);

elem = document.getElementsByTagName("div");
console.log("ByTagName:");
console.log(elem);
console.log(elem[0]);

elem = document.getElementsByClassName("two");
console.log("ByClassName:");
console.log(elem);
console.log(elem[0]);

elem = document.querySelectorAll('div');
console.log("querySelectorAll:");
console.log(elem);

elem = document.querySelector('div');
console.log("querySelector:");
console.log(elem);