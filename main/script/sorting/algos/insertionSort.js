// Insertion Sort Algorithm
async function insertionSort() {
    for (let i = 1; i < bars.length; i++) {
        // Get the current bar and its value
        const currentValue = bars[i];
        const bar = document.getElementById("array-container").childNodes[i];

        // Change the color of the current bar
        bar.style.backgroundColor = "red";

        // Wait for a short period of time to slow down the animation
        await new Promise(resolve => setTimeout(resolve, speed));

        // Shift all bars to the left that are greater than the current value
        let j = i - 1;
        while (j >= 0 && bars[j] > currentValue) {
            const currentBar = document.getElementById("array-container").childNodes[j];
            const nextBar = document.getElementById("array-container").childNodes[j+1];
            swapBars(j, j+1);
            bars[j+1] = bars[j];
            j--;

            // Change the color of the two bars being compared
            currentBar.style.backgroundColor = "red";
            nextBar.style.backgroundColor = "red";

            // Wait for a short period of time to slow down the animation
            await new Promise(resolve => setTimeout(resolve, speed));

            // Reset the color of the two bars being compared
            currentBar.style.backgroundColor = "teal";
            nextBar.style.backgroundColor = "teal";
        }

        // Insert the current value in its correct position
        bars[j+1] = currentValue;

        // Change the color of the current bar back to teal
        bar.style.backgroundColor = "teal";
    }
}