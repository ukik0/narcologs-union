interface showElementsProps {
    triggers: NodeListOf<Element>;
    itemSelector: string;
}

function showElements({ triggers, itemSelector }: showElementsProps) {
    function checkActiveCategories() {
        triggers.forEach((category) => {
            const parent = category.parentElement;

            if (!parent!.classList.contains('--active') || !parent) return;

            const categories = parent.querySelectorAll(itemSelector);
            setActiveCategories(categories);
        });
    }

    checkActiveCategories();

    function setActiveCategories(categories: NodeListOf<Element>) {
        categories.forEach((category) => {
            category.classList.add('--active');
        });
    }

    triggers.forEach((category) => {
        category.addEventListener('click', () => {
            const parent = category.parentElement;

            const triggers = parent!.querySelectorAll(itemSelector);

            triggers.forEach((item) => {
                item.classList.toggle('--active');
                parent!.classList.toggle('--active');
            });
        });
    });
}

if (document.querySelector('.services')) {
    const triggers = document.querySelectorAll('.services__article-category-title');

    showElements({ triggers, itemSelector: '.services__article-category-item' });
}

const triggers = document.querySelectorAll('.footer__nav-block-title');

showElements({ triggers, itemSelector: '.footer__nav-item' });
