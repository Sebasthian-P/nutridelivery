// CLOSE BUTTON

let closeBtn = document.getElementById('close');
let menu = document.getElementById('nav');
let openBtn = document.getElementById('open');
let btn = document.querySelectorAll('btn__services')

const openMenu = () => {
    menu.style.transform = 'translateX(0%)';
    menu.style.transform = 'translateX(0%)';
    document.body.style.overflow = 'hidden';
}

const closeMenu = () => {
    menu.style.transform = '';
    document.body.style.overflow = 'visible';
}

openBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;
