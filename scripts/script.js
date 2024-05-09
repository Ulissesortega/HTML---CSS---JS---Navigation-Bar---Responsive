const burger = document.getElementById('burger');
const menuList = document.getElementById('menuList');

burger.addEventListener('click', function() {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
});