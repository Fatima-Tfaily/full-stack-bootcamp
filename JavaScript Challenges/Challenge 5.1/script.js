const button = document.createElement('button');
button.textContent = "BUTTON";
document.body.appendChild(button);
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#3498db";
button.style.color = " #ffffff";
button.style.border = " none";
button.style.cursor = " pointer";
button.addEventListener('click', () => {
    button.style.backgroundColor = "red";
    button.style.color = "white";
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    button.textContent = "Clicked " + randomNumber + "!";
})
const h1 = document.createElement("h1");
h1.textContent = "Hello!";
document.body.appendChild(h1);
h1.style.border = "10px dotted green";
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
            h1.style.backgroundColor = "red";
            break;
        case "s":
            h1.style.marginLeft = (parseInt(h1.style.marginLeft) || 0) + 10 + "px";
            break;
        case "d":
            const newParagraph = document.createElement("p");
            newParagraph.textContent = "Key D was pressed!";
            document.body.appendChild(newParagraph);
            break;
        case "w":
            h1.style.display = h1.style.display === "none" ? "block" : "none";
            break;
        case " ":
            h1.style.fontSize = (parseInt(h1.style.fontSize) || 16) + 5 + "px";
            break;
    }
});


const form = document.createElement("form");
form.id = "form";

// Create and configure Full Name input
const fullNameLabel = document.createElement("label");
fullNameLabel.textContent = "Full Name:";
const fullNameInput = document.createElement("input");
fullNameInput.type = "text";
fullNameInput.name = "full-name";
fullNameInput.required = true;

// Create and configure Email input
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email Address:";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.required = true;

// Create and configure Password input
const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.name = "password";
passwordInput.required = true;

// Create and configure Confirm Password input
const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.textContent = "Confirm Password:";
const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.type = "password";
confirmPasswordInput.name = "confirm-password";
confirmPasswordInput.required = true;

// Create Submit Button
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
const error = document.createElement("p");
passwordInput.id = "error";
error.style.color = "red";
error.style.display = "none";
const success = document.createElement("p");
passwordInput.id = "success";
success.style.color = "green";
error.style.display = "none";

// Append elements to the form
form.appendChild(fullNameLabel);
form.appendChild(fullNameInput);
form.appendChild(document.createElement("br"));
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement("br"));
form.appendChild(confirmPasswordLabel);
form.appendChild(confirmPasswordInput);
form.appendChild(document.createElement("br"));
form.appendChild(submitButton);
form.appendChild(document.createElement("br"));
form.appendChild(error);
form.appendChild(success);
document.body.appendChild(form);
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const fullName = form.elements["full-name"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirm-password"].value;

    if (!isValidEmail(email)) {
        errorMessage.textContent = "Invalid email address.";
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        error.style.display = "block";
        success.style.display = "none";
    } else {
        success.textContent = "Resitration successful!";
        error.style.display = "none";
        success.style.display = "block";
    }
});

function isValidEmail(email) {
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}