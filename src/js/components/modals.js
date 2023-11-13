import $ from 'jquery';

function bindModal(trigger, modal, close, callback = () => null) {
    (modal = document.querySelector(modal)), (close = document.querySelector(close));

    const body = document.body;
    const modalBody = modal.querySelector('.modal');

    if (!$(trigger) || !modal || !close || !modalBody) return;

    $(trigger).each(function () {
        $(this).on('click', (e) => {
            e.preventDefault();
            modal.classList.add('--active');
            modalBody.classList.add('--active');
            body.classList.add('locked');
        });
    });
    $(close).on('click', () => {
        modalBody.classList.remove('--active');
        modal.classList.remove('--active');
        body.classList.remove('locked');
    });
    $(modal).on('click', (e) => {
        if (e.target === modal) {
            modalBody.classList.remove('--active');
            modal.classList.remove('--active');
            body.classList.remove('locked');
        }
    });

    callback();
}

bindModal('.request-button', '#request-modal', '#request-modal .modal__close');
bindModal(
    '.request-success-button',
    '#request-modal-success',
    '#request-modal-success .modal__close',
    bindSuccessModal
);

bindModal('.comment-button', '#comment-modal', '#comment-modal .modal__close');
bindModal('.calculate-button', '#calculate-modal', '#calculate-modal .modal__close');

function bindSuccessModal() {
    $('.request-success-button').on('click', (event) => {
        event.preventDefault();

        $('.modal__wrapper').each(function () {
            $(this).removeClass('--active');
            $(this).find('.modal').removeClass('--active');
        });

        $('#request-modal-success').addClass('--active');
        $('#request-modal-success .modal').addClass('--active');
    });
}

const reviewButtons = document.querySelectorAll('.reviews__item-info-button');

reviewButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        const review = $(event.target).closest('.reviews__item-info');
        const reviewText = review.find('.reviews__item-info-description').text();

        const modal = $('#comment-modal');
        const modalBody = modal.find('.modal');
        const text = modalBody.find('.reviews__item-info-description');

        modal.addClass('--active');
        modalBody.addClass('--active');
        document.body.classList.add('locked');

        text.html(reviewText);
    });
});

const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = Array.from(multiStepForm.querySelectorAll('[data-step]'));

let currentStep = formSteps.findIndex((step) => step.classList.contains('--active'));

Array.from(document.querySelectorAll('form')).forEach((form) =>
    form.addEventListener('submit', (event) => event.preventDefault())
);

if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
}

multiStepForm.addEventListener('click', (e) => {
    if (e.target.matches('[data-next]')) {
        const fields = Array.from(formSteps[currentStep].querySelectorAll('input'));

        const isValidFields = fields.every((input) => input.reportValidity());

        if (isValidFields) {
            currentStep += 1;
            showCurrentStep();
        }
    }
});

formSteps.forEach((step) => {
    step.addEventListener('animationend', (e) => {
        console.log(!e.target.classList.contains('--active'))
        formSteps[currentStep].classList.remove('hidden');
        e.target.classList.toggle('hidden', !e.target.classList.contains('--active'));
    });
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('--active', index === currentStep);
    });
}
