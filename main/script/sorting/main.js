// Array to hold the bars
let bars = [];
let defaultBars = 50;
let speed = 100;

// Function to generate a new array of random numbers
function generateArray() {
    let barInput = Math.round(document.getElementById('bars').value);
    numBars = barInput >= 20 ? barInput : defaultBars;
    if(numBars > 50){
        numBars = 50
        alert("Maximum number of bars is 50")
    }

    // Clear previous array
    bars = [];

    // Get the container element and clear its content
    const container = document.getElementById("array-container");
    container.innerHTML = "";

    // Generate 50 random numbers between 1 and 100
    for (let i = 0; i < numBars; i++) {
        bars.push(Math.floor(Math.random() * 100) + 1);
    }
    let rand = Math.floor(Math.random()  * numBars) +1;

    // Create a bar for each number and add it to the container
    for (let i = 0; i < bars.length; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = bars[i] * 4 + "px";
        if(bars[i] == bars[rand]){
            bar.style.height = 400 + "px";
            bars[rand] = 100;
        }
        container.appendChild(bar);
    }

    
}

// Function to swap two bars in the array
function swapBars(i, j) {
    const container = document.getElementById("array-container");

    // Get the two bars to swap
    const bar1 = container.childNodes[i];
    const bar2 = container.childNodes[j];

    // Swap their heights
    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
}


// Generate a new array when the page loads
window.onload = function() {
    generateArray(50);
}
  

function toggleHelpMenu() {
    let helpMenu = document.getElementById('help-menu');
    helpMenu.style.visibility = helpMenu.style.visibility == 'hidden' || helpMenu.style.visibility == '' ? 'visible' : 'hidden';
}

function handleSpeed(){
    let val = document.getElementById('speed').value;
    if (val == 0) {
        speed = 0;
        return;
    }

    val = Math.abs(document.getElementById('speed').max - val) + 1;
    speed = val;
}