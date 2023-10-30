function accordion(trigger, selector) {
    const items = document.querySelectorAll(trigger);

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;

            if (!parent) return;

            if (parent.classList.contains('--active')) {
                parent.classList.remove('--active');
            } else {
                document.querySelectorAll(selector).forEach((child) => child.classList.remove('--active'));
                parent.classList.add('--active');
            }
        });
    });
}

if (document.querySelector('.faq')) {
    accordion('.faq__questions-item-heading', '.faq__questions-item');
}
