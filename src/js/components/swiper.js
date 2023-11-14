import Swiper from 'swiper';
import { Grid, Navigation } from 'swiper/modules';

import { rem, swiperDefaultSetting } from '../utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

new Swiper(
    '.mySwiper',
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
                grabCursor: true,
                setWrapperSize: true
            }
        }
    })
);

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
                grabCursor: true,
                setWrapperSize: true
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
    '.centers__swiper',
    swiperDefaultSetting('centers', {
        modules: [Navigation, Grid],
        breakpoints: {
            0: {
                spaceBetween: rem(1.5),
                slidesPerView: 1,
                grabCursor: true,
                grid: {
                    rows: 3,
                    fill: 'row'
                }
            },
            768: {
                spaceBetween: rem(3.6),
                slidesPerView: 2,
                grabCursor: true,
                grid: {
                    rows: 2,
                    fill: 'row'
                }
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
    '.clinics__swiper',
    swiperDefaultSetting('clinics', {
        modules: [Navigation, Grid],
        breakpoints: {
            0: {
                spaceBetween: rem(1.5),
                slidesPerView: 1,
                grabCursor: true,
                grid: {
                    rows: 3,
                    fill: 'row'
                },
            },
            768: {
                spaceBetween: rem(3.6),
                slidesPerView: 2,
                grabCursor: true,
                grid: {
                    rows: 5,
                    fill: 'row'
                },
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

new Swiper(
    '.firman__swiper',
    swiperDefaultSetting('firman', {
        modules: [Navigation, Grid],
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: rem(3.6),
                grid: {
                    rows: 3,
                    fill: 'row'
                }
            },
            768: {
                spaceBetween: rem(7.55),
                slidesPerView: 3,
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.others__swiper',
    swiperDefaultSetting('others', {
        modules: [Navigation, Grid],
        breakpoints: {
            0: {
                spaceBetween: rem(3.6),
                slidesPerView: 1,
                grid: {
                    rows: 3,
                    fill: 'row'
                }
            },
            768: {
                spaceBetween: rem(3.6),
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
                grabCursor: true
            }
        }
    })
);

new Swiper(
    '.publication__swiper',
    swiperDefaultSetting('publication', {
        modules: [Navigation, Grid],
        spaceBetween: rem(4.6),
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row'
                }
            },
            768: {
                slidesPerView: 2,
                grabCursor: true
            }
        }
    })
);
