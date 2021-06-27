/* 

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


const links = document.querySelectorAll(".navbar ul a");
const logo = document.querySelector(".navbar .logo");
logo.addEventListener("click", clickHandler);
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
    if (this.classList.contains("menu-link")) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
 */