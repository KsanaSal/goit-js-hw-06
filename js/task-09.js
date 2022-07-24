function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
    span.innerHTML = randomColor;
    document.body.style.background = randomColor;
});
