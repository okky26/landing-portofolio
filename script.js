const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-container');
const menuList = document.querySelectorAll('#menu .inner-content')


menuBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
})

menuList.forEach(menu => {
    menu.addEventListener('mouseover', () => {
        for (let i = 0; i < menuList.length; i++){
            menuList[i].classList.remove('active');
        };

        menu.classList.add('active');
    })
});
console.log(menuList);