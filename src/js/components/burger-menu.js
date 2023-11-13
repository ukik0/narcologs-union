import $ from 'jquery';

const burgerMenuButton = document.querySelector('.header__burger');
const closeBurgerButton = document.querySelector('.header__burger-menu-heading .close');

burgerMenuButton.addEventListener('click', () => {
    $('.header__burger-menu').addClass('--active');
    $('body').addClass('locked');
});

closeBurgerButton.addEventListener('click', () => {
    $('.header__burger-menu').removeClass('--active');
    $('body').removeClass('locked');
});

const burgerMenuDropdown = document.querySelectorAll('.header__burger-menu-item');

burgerMenuDropdown.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        const arrow = dropdown.querySelector('.header__burger-menu-item-title');
        const list = dropdown.querySelector('.header__burger-menu-dropdown-list');

        if (!list) return;

        $(list).slideToggle().css('display', 'flex');
        $(arrow).toggleClass('--active');
    });
});
