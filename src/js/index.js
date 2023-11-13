import { Fancybox } from '@fancyapps/ui';
import Inputmask from 'inputmask';

import './components';

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '../scss/styles.scss';

Fancybox.bind('[data-fancybox]', {
    Images: {
        zoom: false
    }
});
function setPhoneMask() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach((phoneInput) => {
        const im = new Inputmask('+ 7 (999) 999-99-99', {placeholder: '+ 7 (999) 999-99-99'});
        im.mask(phoneInput);
    });
}

setPhoneMask();
