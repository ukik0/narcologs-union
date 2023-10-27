import $ from 'jquery';

import { rem } from '../utils/index';

const DESKTOP_WIDTH = parseInt(rem(48));
const showMoreButton = document.querySelector('.features-show-more');
const hideButton = document.querySelector('.features-hide');

export function showMoreFeatures() {
    const items = Array.from(document.querySelectorAll('.features__item'));

    if (window.innerWidth > DESKTOP_WIDTH) return;

    items.forEach((item, index) => {
        if (index > 2) {
            $(item).fadeOut('slow');
        }
    });

    showMoreButton!.addEventListener('click', showElements);

    hideButton!.addEventListener('click', hideElements);

    function showElements() {
        items.forEach((item) => {
            $(item).fadeIn('fast');
        });

        $('.features-hide').fadeIn('fast').css('display', 'block');
        $('.features-show-more').fadeOut('fast');
    }

    function hideElements() {
        items.forEach((item, index) => {
            if (index < 3) return;

            $(item).fadeOut('fast')
        })

        $('.features-hide').fadeOut('fast');
        $('.features-show-more').fadeIn('fast').css('display', 'block');
    }

}

if (document.querySelector('.features')) {
    showMoreFeatures();
}
