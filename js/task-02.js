const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const newList = ingredients.map((el) => {
    const createLi = document.createElement("li");
    createLi.textContent = el;
    createLi.classList.add("item");
    return createLi;
});
document.querySelector("#ingredients").append(...newList);
