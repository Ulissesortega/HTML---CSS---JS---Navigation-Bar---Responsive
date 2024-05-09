const burger = document.getElementById('burger');
const menuList = document.getElementById('menuList');
const header = document.getElementById('header');




burger.addEventListener('click', function() {
    if (menuList.style.display === 'flex') {
        menuList.style.display = 'none';
        header.classList.remove('active')


    } else {
        menuList.style.display = 'flex';
        header.classList.add('active')
    }
});