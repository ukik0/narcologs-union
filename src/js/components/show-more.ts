import $ from 'jquery';

import { rem } from '../utils/index';

const DESKTOP_WIDTH = parseInt(rem(48));

interface showMoreProps {
    parent: Element;
    showButton?: Element;
    hideButton?: Element;
    COUNT_ELEMENTS?: number;
}

export function showMore({ parent, showButton, hideButton, COUNT_ELEMENTS = 3 }: showMoreProps) {
    const childrenNodes = Array.from(parent.children);

    if (window.innerWidth > DESKTOP_WIDTH) return;

    if (showButton) {
        if (childrenNodes.length <= 1) {
            $(showButton).fadeOut('fast');
        }
    }

    childrenNodes.forEach((children, index) => {
        if (index + 1 > COUNT_ELEMENTS) {
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

        if (showButton && !hideButton) {
            $(showButton).hide();
        }
    }

    function hideElements() {
        childrenNodes.forEach((children, index) => {
            if (index < COUNT_ELEMENTS) return;

            $(children).fadeOut('fast');
        });

        if (hideButton && showButton) {
            $(hideButton).fadeOut('fast');
            $(showButton).fadeIn('fast').css('display', 'block');
        }

        window.scrollTo({ top: $(parent).offset()!.top - 200, behavior: 'smooth' });
    }
}

if (document.querySelector('.features')) {
    const showButton = document.querySelector('.features-show-more')!;
    const hideButton = document.querySelector('.features-hide')!;

    showMore({
        parent: document.querySelector('.features__list')!,
        hideButton,
        showButton
    });
}

if (document.querySelector('.services')) {
    const showButton = document.querySelector('.services__info-button')!;

    showMore({
        parent: document.querySelector('.services__info-content')!,
        showButton: showButton,
        COUNT_ELEMENTS: 4
    });
}

if (document.querySelector('.specialists')) {
    const showButton = document.querySelector('.specialists__button')!;

    showMore({
        parent: document.querySelector('.specialists .swiper-wrapper')!,
        showButton,
        COUNT_ELEMENTS: 2
    });
}

if (document.querySelector('.steps')) {
    const steps = document.querySelectorAll('.steps__item');

    steps.forEach((step) => {
        const showButton = step.querySelector('.steps__item-show-button')!;
        const parent = step.querySelector('.steps__item-wrapper')!;

        showMore({
            parent,
            showButton,
            COUNT_ELEMENTS: 1
        });
    });
}
