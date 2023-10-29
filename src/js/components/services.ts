function showCategories() {
    const categories = document.querySelectorAll('.services__article-category-title');

    function checkActiveCategories() {
        categories.forEach((category) => {
            const parent = category.parentElement;

            if (!parent!.classList.contains('--active')) return;

            const categories = parent!.querySelectorAll('.services__article-category-item');
            setActiveCategories(categories);
        });
    }

    checkActiveCategories();

    function setActiveCategories(categories: NodeListOf<Element>) {
        categories.forEach((category) => {
            category.classList.add('--active');
        });
    }

    categories.forEach((category) => {
        category.addEventListener('click', () => {
            const parent = category.parentElement;

            const list = parent!.querySelectorAll('.services__article-category-item');

            list.forEach((item) => {
                item.classList.toggle('--active');
                parent!.classList.toggle('--active');
            });
        });
    });
}

if (document.querySelector('.services')) {
    showCategories();
}
