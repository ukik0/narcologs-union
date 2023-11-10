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
            $('body').width($(document).width()).addClass('locked');
        });
    });
    $(close).on('click', () => {
        modalBody.classList.remove('--active');
        modal.classList.remove('--active');
        $('body').width('').removeClass('locked');
    });
    $(modal).on('click', (e) => {
        if (e.target === modal) {
            modalBody.classList.remove('--active');
            modal.classList.remove('--active');
            body.classList.remove('locked');
            $('body').width('').removeClass('locked');
        }
    });

    callback();
}

bindModal('.request-button', '#request-modal', '#request-modal .modal__close');
bindModal('.request-success-button', '#request-modal-success', '#request-modal-success .modal__close', bindSuccessModal);

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