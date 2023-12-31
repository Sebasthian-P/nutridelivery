// CLOSE BUTTON

let closeBtn = document.getElementById('close');
let menu = document.getElementById('nav');
let openBtn = document.getElementById('open');
let btn = document.querySelectorAll('btn__services');

let btnCloseForm = document.getElementById('btn__close');
let btnOpenForm = document.getElementById('btn__open');
let form = document.getElementById('form');



const openMenu = () => {
    menu.style.transform = 'translateX(0%)';
    menu.style.transform = 'translateX(0%)';
}

const closeMenu = () => {
    menu.style.transform = '';
}

const closeForm = () => {
    form.style.transform = 'translate(1400px)';
    form.style.zIndex = '';
    document.body.style.overflowX = 'hidden';
}

const openForm = () => {
    form.style.transform = 'translate(0)';
    form.style.zIndex = '10000';
    document.body.style.overflow = 'visible';
}

openBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;
btnCloseForm.onclick = closeForm;
btnOpenForm.onclick = openForm