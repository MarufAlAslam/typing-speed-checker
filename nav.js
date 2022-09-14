const navBtn = document.getElementById('nav-button');
const nav_links = document.getElementById('nav__links');

navBtn.addEventListener('click', () => {
    // console.log("clicked")
    nav_links.classList.toggle('active');
});