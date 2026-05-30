const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const typingText = document.getElementById('typing-text');
const topBtn = document.getElementById('topBtn');
const projectContainer = document.getElementById('projectContainer');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const textArray = [
    'Frontend Developer',
    'JavaScript Developer',
    'ReactJS Developer'
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

const projects = [{
        title: 'E-Commerce Website',
        desc: 'Responsive shopping website'
    },
    {
        title: 'Weather App',
        desc: 'Weather forecast application'
    },
    {
        title: 'Task Manager',
        desc: 'Dynamic task management app'
    }
];

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;
    projectContainer.appendChild(card);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('contactForm')
    .addEventListener('submit', e => {
        e.preventDefault();
        alert('Message Sent Successfully!');
    });