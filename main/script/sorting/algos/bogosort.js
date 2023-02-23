// Bogosort Algorithm
async function bogosort() {
    alert("WARNINIG: This sorting algorithm as a time complexity of (n+n!), so pretty much if you have an array bigger than 10, it will take forever to finish, I recommend that you chose a value between 5-7 to see that algorithm work.")
    while (!isSorted(bars)) {
        // Change the color of all bars to red
        const barElements = document.querySelectorAll(".bar");
        barElements.forEach(bar => bar.style.backgroundColor = "red");

        shuffle(bars);

        // Wait for a short period of time to slow down the animation
        await new Promise(resolve => setTimeout(resolve, speed));

        // Change the color of all bars back to teal
        barElements.forEach(bar => bar.style.backgroundColor = "teal");
    }
}

// Helper function to check if an array is sorted
function isSorted(arr) {
    console.log(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}


// Helper function to shuffle an array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        swapBars(i, j)
        const temp = bars[i];
        bars[i] = bars[j];
        bars[j] = temp;
    }
}
