const form = document.querySelector(".login-form");
const handeleSubmit = (e) => {
    e.preventDefault();
    const {
        elements: { email, password },
    } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log({ Email: email.value, Password: password.value });
    e.currentTarget.reset();
};
form.addEventListener("submit", handeleSubmit);
