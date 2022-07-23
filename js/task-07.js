const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.value = input.min;
input.addEventListener("input", () => {
    span.style.fontSize = `${input.value}px`;
});
