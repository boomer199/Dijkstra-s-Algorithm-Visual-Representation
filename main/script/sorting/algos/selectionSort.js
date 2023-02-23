async function selectionSort() {
    alert("Does Not work at the moment")
    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < bars.length; j++) {
            if (bars[j] < bars[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swapBars(i, minIndex);
            const bar1 = document.getElementById("array-container").childNodes[i];
            const bar2 = document.getElementById("array-container").childNodes[minIndex];
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";
            await new Promise(resolve => setTimeout(resolve, 100));
            bar1.style.backgroundColor = "teal";
            bar2.style.backgroundColor = "teal";
        }
    }
    for (let k = 0; k < bars.length; k++) {
        document.getElementById("array-container").childNodes[k].style.backgroundColor = "green";
    }
}
