const container = document.querySelector(".container");

function createRow(columns) {
    for(let i = 0; i < columns; i++) {
        let div = document.createElement("div");
        div.className = "pixel";
        div.style.border = "1px solid rgb(184, 184, 184)";
        div.addEventListener("click", function() {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
}

for(let i = 0; i < 16; i++) {
    createRow(16);
}

container.addEventListener("mousedown", () => {
    drawing = true;
});

container.addEventListener("mouseup", () => {
    drawing = false;
});

container.addEventListener("mouseleave", () => {
    drawing = false; // Stop drawing when mouse leaves the container
});

container.addEventListener("mousemove", (event) => {
    if (drawing) {
        const target = event.target;
        if (target.classList.contains("pixel")) {
            target.style.backgroundColor = "black";
            target.style.border = "1px solid black"
        }
    }
});

const pixels = document.querySelectorAll(".pixel");

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    pixels.forEach(element => {
        element.style.backgroundColor = "white";
        element.style.border = "1px solid rgb(184, 184, 184)";
    });
})

const hide = document.querySelector("#hide");
hide.addEventListener("click", () => {
    pixels.forEach(element => {
        element.style.border = "none";
    });
})
