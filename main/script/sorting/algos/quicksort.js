// Quicksort Algorithm
async function quicksort(arr = bars, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = await partition(arr, low, high);
        await quicksort(arr, low, pivotIndex - 1);
        await quicksort(arr, pivotIndex + 1, high);
    }
}

async function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            await swap(arr, i, j);
        }
    }
    await swap(arr, i + 1, high);
    return i + 1;
}

// Helper function to swap two elements in the array
async function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    swapBars(i, j)


    const currentBar = document.getElementById("array-container").childNodes[i];
    const nextBar = document.getElementById("array-container").childNodes[j];


    // Wait for a short period of time to slow down the animation
    currentBar.style.backgroundColor = "red";
    nextBar.style.backgroundColor = "red";

    await new Promise(resolve => setTimeout(resolve, speed));

    currentBar.style.backgroundColor = "teal";
    nextBar.style.backgroundColor = "teal";
}
