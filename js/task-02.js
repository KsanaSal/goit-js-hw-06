const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const newLi = ingredients.map((el) => {
    const createLi = document.createElement("li");
    createLi.innerText = el;
    return createLi;
});
document.querySelector("#ingredients").append(...newLi);
