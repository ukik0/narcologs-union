import $ from 'jquery';

import { rem } from '../utils/index';

const DESKTOP_WIDTH = parseInt(rem(48));
const showMoreButton = document.querySelector('.features-show-more')!;
const hideButton = document.querySelector('.features-hide')!;

interface showMoreProps {
    parent: HTMLElement;
    showButton?: Element;
    hideButton?: Element;
    COUNT_ELEMENTS?: number;
}

export function showMore({ parent, showButton, hideButton, COUNT_ELEMENTS = 3 }: showMoreProps) {
    const childrenNodes = parent.childNodes;

    if (window.innerWidth > DESKTOP_WIDTH) return;

    childrenNodes.forEach((children, index) => {
        if (index > COUNT_ELEMENTS + 2) {
            $(children).fadeOut('slow');
        }
    });

    if (showButton) {
        showButton.addEventListener('click', showElements);
    }

    if (hideButton) {
        hideButton.addEventListener('click', hideElements);
    }

    function showElements() {
        childrenNodes.forEach((children) => {
            $(children).fadeIn('fast');
        });

        if (hideButton && showButton) {
            $(hideButton).fadeIn('fast').css('display', 'block');
            $(showButton).fadeOut('fast');
        }

        if (showButton) {
            $(showButton).hide('fast');
        }
    }

    function hideElements() {
        childrenNodes.forEach((children, index) => {
            if (index < COUNT_ELEMENTS + 3) return;

            $(children).fadeOut('fast');
        });

        if (hideButton && showButton) {
            $(hideButton).fadeOut('fast');
            $(hideButton).fadeIn('fast').css('display', 'block');
        }

        window.scrollTo({ top: $(parent).offset()!.top - 200, behavior: 'smooth' });
    }
}

if (document.querySelector('.features')) {
    showMore({ parent: document.querySelector('.features__list')!, hideButton, showButton: showMoreButton });
}

if (document.querySelector('.services')) {
    const showButton = document.querySelector('.services__info-button')!;

    showMore({ parent: document.querySelector('.services__info-content')!, showButton: showButton, COUNT_ELEMENTS: 5 });
}
