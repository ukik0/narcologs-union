import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import { rem, swiperDefaultSetting } from '../utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper(
    '.gallery__swiper',
    swiperDefaultSetting('gallery', {
        modules: [Navigation],
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: rem(1),
                slideToClickedSlide: true
            },
            768: {
                spaceBetween: rem(1.6),
                slidesPerView: '4',
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.reviews__swiper',
    swiperDefaultSetting('reviews', {
        modules: [Navigation],
        breakpoints: {
            0: {
                slidesPerView: 1.13,
                spaceBetween: rem(2.1),
                slideToClickedSlide: true
            },
            768: {
                spaceBetween: rem(3.5),
                slidesPerView: '2',
                grabCursor: true
            }
        }
    })
);
