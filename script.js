for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    div.style.display = "flex";
    div.style.width = "400px";
    document.querySelector(".container").appendChild(div);
}