async function selectionSort() {
    let n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted part of the array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (bars[j] < bars[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element in the unsorted part of the array
        if (minIndex !== i) {
            const currentBar = document.getElementById("array-container").childNodes[i];
            const nextBar = document.getElementById("array-container").childNodes[minIndex];
            swapBars(i, minIndex);
            const temp = bars[i];
            bars[i] = bars[minIndex];
            bars[minIndex] = temp;

            // Change the color of the two bars being swapped
            currentBar.style.backgroundColor = "red";
            nextBar.style.backgroundColor = "red";

            // Wait for a short period of time to slow down the animation
            await new Promise(resolve => setTimeout(resolve, speed));

            // Reset the color of the two bars being swapped
            currentBar.style.backgroundColor = "teal";
            nextBar.style.backgroundColor = "teal";
        }
    }
}