var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var cssCode= document.querySelector("h2");
var body = document.getElementById("b1");

function colorgen(){
	body.style.background= " linear-gradient(to right," + color1.value + "," + color2.value + ")";
	cssCode.textContent=body.style.background +";";
}


color1.addEventListener("input",colorgen)
color2.addEventListener("input",colorgen)