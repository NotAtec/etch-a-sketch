document.addEventListener("readystatechange", event => {
    if (event.target.readyState === "complete") {
        genGrid();
        updateSliderText();
    }
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", genGrid);

// Functions
function genGrid() {
    const grid = document.querySelector("#grid");
    grid.innerHTML = "";
    
    let v = document.getElementById("gridsize").value;
    for (let i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row"
        for (let j = 0; j < v; j++) {
            let cell = document.createElement("div");
            cell.className = "cell"
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function updateSliderText() {
    let v = document.getElementById("gridsize").value;
    let p = document.getElementById("sizetext");
    p.innerText = `${v} x ${v}`
}