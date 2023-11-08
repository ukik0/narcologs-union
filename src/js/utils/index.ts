import $ from 'jquery';
import { type SwiperOptions } from 'swiper/types';

export function rem(rem: number): string {
    if ($(window).width()! > 768) {
        return (0.005208335 * $(window).width()! * rem).toString();
    } else {
        return ((100 / 375) * (0.1 * $(window).width()!) * rem).toString();
    }
}

export function swiperDefaultSetting(init: string, payload?: SwiperOptions): SwiperOptions {
    return {
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
