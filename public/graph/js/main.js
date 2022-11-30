

var resetbtn = document.getElementById('.reset');
var refreshbtn = document.getElementById('.refresh');
var startbtn = document.getElementById('.start');
var container = document.getElementById('.container');
var weightbtn = document.getElementById('weight');
var algobtn = document.getElementById('algo');

export var rowsize = 15;
export var colsize = 30;
export var startRow = 10;
export var endRow = 5;
export var startCol = 10;
export var endCol = 25;
export var mouseIsDown = false;
export var weighttype = weightbtn.options[weightbtn.selectedIndex].value;
export var algorithm = algobtn.options[algobtn.selectedIndex].value;


resetbtn.addEventListener('click', reset);
startbtn.addEventListener('click', start);
refreshbtn.addEventListener('click', refresh);
container.addEventListener('mousedown', function () {
	mouseIsDown = true;
});
container.addEventListener('mouseup', function () {
	mouseIsDown = false;
});
container.addEventListener('mouseover', setWallAttribute);
weightbtn.addEventListener('change', updateweight);
algobtn.addEventListener('change', updatealgo);