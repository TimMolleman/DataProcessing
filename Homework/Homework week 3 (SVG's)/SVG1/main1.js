/*
Naam: Tim Molleman
Studentnummer: 10587306

/* use this to test out your function */
window.onload = function() {
 	changeColor("no", "#f4a460");
 	changeColor("lv", "#ffdd00");
 	changeColor("hu", "#ff00ff");
 	changeColor("it", "#00ffdd");

}
/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	var svg = document.getElementById(id);
	svg.style.fill = color;
};
