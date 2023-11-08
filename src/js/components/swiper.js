import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import { rem, swiperDefaultSetting } from '../utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

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

new Swiper(
    '.specialists__swiper',
    swiperDefaultSetting('specialists', {
        modules: [Navigation],
        enabled: false,
        breakpoints: {
            768: {
                spaceBetween: rem(4.1),
                slidesPerView: '2',
                grabCursor: true,
                enabled: true
            }
        }
    })
);

new Swiper(
    '.centers__swiper.desktop',
    swiperDefaultSetting('centers', {
        modules: [Navigation],
        breakpoints: {
            768: {
                spaceBetween: rem(3.6),
                slidesPerView: 1,
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.centers__swiper.mobile',
    swiperDefaultSetting('centers', {
        modules: [Navigation],
        breakpoints: {
            0: {
                spaceBetween: rem(3.6),
                slidesPerView: 1,
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.history__swiper',
    swiperDefaultSetting('history', {
        modules: [Navigation],
        breakpoints: {
            0: {
                spaceBetween: rem(1.6),
                slidesPerView: 1.3,
                centeredSlides: true
            },
            768: {
                spaceBetween: rem(7.7),
                slidesPerView: 3,
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.clinics__swiper.desktop',
    swiperDefaultSetting('clinics', {
        modules: [Navigation],
        breakpoints: {
            768: {
                spaceBetween: rem(3.6),
                slidesPerView: 1,
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.clinics__swiper.mobile',
    swiperDefaultSetting('clinics', {
        modules: [Navigation],
        breakpoints: {
            0: {
                spaceBetween: rem(3.6),
                slidesPerView: 1,
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.core__swiper',
    swiperDefaultSetting('core', {
        modules: [Navigation],
        breakpoints: {
            0: {
                spaceBetween: rem(3.6),
                slidesPerView: 1,
                grabCursor: true
            }
        }
    })
);
