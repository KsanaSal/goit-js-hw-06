const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", (e) => {
    output.textContent =
        e.currentTarget.value.length > 0 ? e.currentTarget.value : "Anonymous";
});
