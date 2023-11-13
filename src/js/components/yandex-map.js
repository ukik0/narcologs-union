import $ from 'jquery';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


import { rem, swiperDefaultSetting } from '../utils';

const PLACEMARKS = [
    {
        lalitude: 55.75244503863624,
        longitude: 37.616599835937514,
        balloonContent: {
            title: 'Москва, Твой шанс',
            address: 'г. Москва, Одинцово'
        },
        index: 0
    },
    {
        lalitude: 55.68267782261003,
        longitude: 37.44356516796877,
        balloonContent: {
            title: 'Москва, Твой шанс',
            address: 'г. Москва, Одинцово'
        },
        index: 1
    },
    {
        lalitude: 55.7354023864321,
        longitude: 37.830833234375,
        balloonContent: {
            title: 'Москва, Твой шанс',
            address: 'г. Москва, Одинцово'
        },
        index: 2
    },
    {
        lalitude: 55.642310811365405,
        longitude: 37.6275861640625,
        balloonContent: {
            title: 'Москва, Твой шанс',
            address: 'г. Москва, Одинцово'
        },
        index: 3
    }
];

const placemarkOptions = {
    hideIconOnBalloonOpen: false,
    iconLayout: 'default#image',
    iconImageHref: '../local/templates/alghoritm_recovery/images/placemark.svg',
    iconImageSize: [28, 28],
    iconImageOffset: [-5, -10]
};

function removeControls(map) {
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
}

function generateBalloon(balloonContent) {
    return `
            		<div class='balloon__content'>
                        <span class='balloon__content-title'>
                            ${balloonContent.title}
                        </span>

                        <address class='balloon__content-address'>
                            ${balloonContent.address}
                        </address>
                    </div>
            	`;
}

function animationMap(placemark, map) {
    const options = {
        flying: true,
        duration: 1500
    };

    map.panTo([placemark[0], placemark[1]], options);
}

function slideTo(index) {
    $('.position__item').removeClass('active');
    $(`[data-swiper-slide-index=${index}]`).find('.position__item').addClass('active');
}

if (document.querySelector('.position')) {
    ymaps.ready(init);

    function init() {
        let map = new ymaps.Map('position-map', {
            center: [55.75244503863624, 37.619346417968764],
            zoom: 10
        });

        removeControls(map);

        const swiper = new Swiper(
            '.position__swiper',
            swiperDefaultSetting('position', {
                modules: [Navigation],
                slideToClickedSlide: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        spaceBetween: rem(3.5),
                        slidesPerView: '2',
                        grabCursor: true
                    }
                },
                on: {
                    slideChange({ realIndex }) {
                        map.geoObjects.each(function (geoObject) {
                            if (geoObject.properties.get('attribute') == realIndex) {
                                geoObject.balloon.open();
                                animationMap(geoObject.geometry._coordinates, map);
                            }
                        });
                        slideTo(realIndex);
                    }
                }
            })
        );

        PLACEMARKS.forEach(({ longitude, lalitude, balloonContent, index }) => {
            const placemark = new ymaps.Placemark(
                [lalitude, longitude],
                {
                    balloonContent: generateBalloon(balloonContent),
                    attribute: index
                },
                placemarkOptions
            );

            map.geoObjects.add(placemark);

            placemark.events.add('click', () => {
                swiper.slideTo(index);
                slideTo(index);
                animationMap([lalitude, longitude], map);
            });
        });
    }
}

if (document.querySelector('.clinics')) {
    ymaps.ready(init);

    function init() {
        let map = new ymaps.Map('clinics-map', {
            center: [55.75244503863624, 37.619346417968764],
            zoom: 10
        });

        removeControls(map);

        PLACEMARKS.forEach(({ longitude, lalitude, balloonContent, index }) => {
            const placemark = new ymaps.Placemark(
                [lalitude, longitude],
                {
                    balloonContent: generateBalloon(balloonContent),
                    attribute: index
                },
                placemarkOptions
            );

            map.geoObjects.add(placemark);
        });
    }
}

if (document.querySelector('.location')) {
    initMap('location-map')
}

if (document.querySelector('.contacts')) {
    initMap('contacts-map')
}

function initMap(mapId) {
    ymaps.ready(init);

    function init() {
        let map = new ymaps.Map(mapId, {
            center: [55.75244503863624, 37.619346417968764],
            zoom: 10
        });

        const placemark = new ymaps.Placemark(
            map.getCenter(),
            {
                balloonContent: generateBalloon({
                    title: 'Москва, Твой шанс',
                    address: 'г. Москва, Одинцово'
                })
            },
            placemarkOptions
        );

        map.geoObjects.add(placemark);

        removeControls(map);
    }
}
