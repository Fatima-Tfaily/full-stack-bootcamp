const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

const menuChildren = menuDiv.children;
console.log('Menu children:');
for (let i = 0; i < menuChildren.length; i++) {
    console.log(menuChildren[i]);
}

const headerChildren = headerElement.children;
console.log('Header children:');
for (let i = 0; i < headerChildren.length; i++) {
    console.log(headerChildren[i]);
}

const footerChildren = footerElement.children;
console.log('Footer children:');
for (let i = 0; i < footerChildren.length; i++) {
    console.log(footerChildren[i]);
}
const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);
const p = document.createElement('p');
p.innerText = "Hello,Word!";
div.appendChild(p);
div.style.backgroundColor = "blue";
p.style.color = "white";
p.style.fontSize = "24px";
p.style.fontFamily = "Helvetica";
p.style.border = "1px solid black";
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(heading => {
    heading.style.fontStyle = 'italic';
});

const colorChangeButton = document.createElement('button');
colorChangeButton.textContent = 'Hover Me';
document.body.appendChild(colorChangeButton);

colorChangeButton.addEventListener('mouseover', () => {
    colorChangeButton.style.backgroundColor = 'red';
});

colorChangeButton.addEventListener('mouseout', () => {
    colorChangeButton.style.backgroundColor = '';
});
const originalDiv = document.getElementById('original');

originalDiv.addEventListener('click', event => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'BUTTON') {
        console.log('Clicked button text:', clickedElement.textContent);
    }
});

const form = document.getElementById('myForm');

form.addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    console.log('Name:', formData.get('name'));
    console.log('Email:', formData.get('email'));
});
