import { Fancybox } from "@fancyapps/ui";
import './components';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import '../scss/styles.scss';

Fancybox.bind('[data-fancybox]', {
    Images: {
        zoom: false,
    },
});

