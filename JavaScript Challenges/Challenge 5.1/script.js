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