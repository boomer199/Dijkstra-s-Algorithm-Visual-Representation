// Bubble Sort Algorithm
async function bubbleSort() {
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            // Change the color of the two bars being compared
            const container = document.getElementById("array-container");
            const bar1 = container.childNodes[j];
            const bar2 = container.childNodes[j+1];
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";

            // Wait for a short period of time to slow down the animation
            await new Promise(resolve => setTimeout(resolve, speed));

            // If the left bar is taller than the right bar, swap them
            if (bars[j] > bars[j+1]) {
                swapBars(j, j+1);
                const temp = bars[j];
                bars[j] = bars[j+1];
                bars[j+1] = temp;
            }

            // Reset the color of the two bars being compared
            bar1.style.backgroundColor = "teal";
            bar2.style.backgroundColor = "teal";
        }
    }
}