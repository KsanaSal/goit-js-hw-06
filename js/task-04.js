let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    document.querySelector("#value").innerHTML = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    document.querySelector("#value").innerHTML = counterValue;
});
