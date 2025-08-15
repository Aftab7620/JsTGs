document.getElementById("addButton").addEventListener("click", function () {
    const container = document.getElementById("addDiv");

    const newBox = document.createElement("div");
    newBox.classList.add("box");

    container.appendChild(newBox);
});
