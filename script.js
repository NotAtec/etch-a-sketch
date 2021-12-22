document.addEventListener("readystatechange", event => {
    if (event.target.readyState === "complete") {
        genGrid();
        updateSliderText();
        addCellListener();
    }
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetHandler);

const rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click", rainbowMode);

const blackButton = document.getElementById("black");
blackButton.addEventListener("click", blackMode);

const eraserButton = document.getElementById("eraser");
eraserButton.addEventListener("click", eraserMode);

let mode = "black";

// Functions
function resetHandler() {
    genGrid();
    addCellListener();
    if (mode == "eraser") {
        mode = "black";
    }
}

function rainbowMode() {
    mode = "rainbow";
}

function eraserMode() {
    mode = "eraser";
}

function blackMode() {
    mode = "black";
}

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

function addCellListener() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", updateColor);
    });
}

function updateColor() {
    let color = ""
    switch (mode) {
        case "black":
            color = "black";
            break;
        case "rainbow":
            color = "#" + Math.floor(Math.random()*16777215).toString(16); //Creates random color value, and sets it to HEX
            break;
        case "eraser":
            color = "white";
            break;
    }
    this.style.backgroundColor = color;
}