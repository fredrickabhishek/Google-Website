const menuIcon = document.querySelector('.menu-img');
const navbar = document.querySelector('.popnavbar');
menuIcon.addEventListener('click',() => {
    navbar.classList.toggle('change');
})