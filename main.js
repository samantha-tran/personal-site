const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navbar-links')[0];
const navLinks = document.getElementsByClassName('menu-link');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

for (const links of navLinks) {
    links.addEventListener('click', () => {
        navbar.classList.remove('active');    
    })
}