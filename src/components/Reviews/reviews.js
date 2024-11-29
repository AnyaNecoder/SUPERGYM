import Swiper from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';



export const reviewsSlider = () => {
    const reviewsSwiper = new Swiper('.reviews__slider', {    
        loop: true,        
        modules: [Navigation, EffectCreative],
        effect: "creative",

        creativeEffect: {
            prev: {
                shadow: true, 
                translate: [0, 0, -400],
            },
            next: {
                shadow: true, 
                translate: ["100%", 0, 0], 
            },
        },
    
        navigation: {
            nextEl: '.swiper__arrow-next',
            prevEl: '.swiper__arrow-prev',
        },        
    });
}

