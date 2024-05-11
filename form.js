
const validateForm = () => {
    console.log("validateForm");

    let noErrors = true;

    let form = document.getElementById("form");
    let nameInput = document.getElementById("name");
    let firstNameInput = document.getElementById("first-name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        setErrorFor(nameInput, "Veuillez entrer votre nom");
        noErrors = false;
    } else if (name.length < 3 || name.length > 20) {
        setErrorFor(nameInput, "Veuillez entrer un nom entre 3 et 20 caractères");
        noErrors = false;
    } else if (!name.match(/^[a-zA-Z\s]+$/)) {
        setErrorFor(nameInput, "Veuillez entrer un nom valide");
        noErrors = false;
    } else {
        setSuccessFor(nameInput);
        console.log("nom valide");
    }

    if (firstName === "") {
        setErrorFor(firstNameInput, "Veuillez entrer votre prénom");
        noErrors = false;
    } else if (firstNameInput.length < 3 || firstName.length > 20) {
        setErrorFor(firstNameInput, "Veuillez entrer un prénom entre 3 et 20 caractères");
        console.log("prénom invalide");
        noErrors = false;
    } else {
        setSuccessFor(firstNameInput);
        console.log("prénom valide");
    }

    if (email === "") {
        setErrorFor(emailInput, "Veuillez entrer votre email");
        noErrors = false;
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setErrorFor(emailInput, "Veuillez entrer un email valide");
        console.log("email invalide");
        noErrors = false;
    } else {
        setSuccessFor(emailInput);
        console.log("email valide");
    }

    if (message === "") {
        setErrorFor(messageInput, "Veuillez entrer un message");
        noErrors = false;
    } else if (message.length < 5) {
        setErrorFor(messageInput, "Veuillez entrer un message plus long");
        console.log("message invalide");
        noErrors = false;
    } else {
        setSuccessFor(messageInput);
        console.log("message valide");
    }
    return noErrors;
};


const setErrorFor = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};



const setSuccessFor = (input) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector(".errorMessage");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
        form.submit();
    }
});