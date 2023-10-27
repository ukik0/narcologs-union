import {type SwiperOptions } from 'swiper/types';

export function rem(rem: number): string {
    return Math.round(rem * 10) + 'px';
}

export function swiperDefaultSetting(init: string, payload?: SwiperOptions): SwiperOptions {
    return {
        loop: true,
        speed: 1500,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: `.${init}__next`,
            prevEl: `.${init}__prev`
        },
        ...payload
    };
}
