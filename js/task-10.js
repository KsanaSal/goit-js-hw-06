function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlColl = document.querySelector("#controls");
const collection = document.querySelector("#boxes");
let size = 30;
const createBoxes = (amount) => {
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement("div");
        box.style.width = size + "px";
        box.style.height = size + "px";
        box.style.backgroundColor = getRandomHexColor();
        collection.append(box);
        size += 10;
    }
};

controlColl.children[1].addEventListener("click", () => {
    createBoxes(controlColl.children[0].value);
});

const destroyBoxes = () => {
    while (collection.firstChild) {
        collection.removeChild(collection.firstChild);
    }
    controlColl.children[0].value = "";
    size = 30;
};

controlColl.children[2].addEventListener("click", () => {
    destroyBoxes();
});
