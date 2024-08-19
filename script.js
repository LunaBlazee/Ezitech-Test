const menuIcon = document.getElementById('menu-icon');
const nav = document.getElementById('nav');


//menu toggle

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Change the menu icon based on the state
    if (nav.classList.contains('active')) {
        menuIcon.setAttribute('name', 'close-outline');
    } else {
        menuIcon.setAttribute('name', 'menu-outline');
    }
});