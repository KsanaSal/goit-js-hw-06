const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
    if (input.dataset.length == input.value.length) {
        input.classList.add("valid");
        if (input.classList.contains("invalid")) {
            input.classList.remove("invalid");
        }
    } else {
        input.classList.add("invalid");
        if (input.classList.contains("valid")) {
            input.classList.remove("valid");
        }
    }
});
