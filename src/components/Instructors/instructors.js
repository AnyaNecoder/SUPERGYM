import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export const InstructorSlider = () => {

  const InstructorsSlide = new Splide('.splide', {
    type: 'loop', 
    perPage: 4,   
    gap: '40px',
    pagination: false,   
    arrows: true,
    classes: {
      arrow: 'splide__arrow', 
      prev: 'splide__arrow--prev', 
      next: 'splide__arrow--next', 
    },
    breakpoints: {
      1280: {
        perPage: 3,
        gap: '30px',
        arrows: false,
        pagination: true       
      },
      860: {
        perPage: 2        
      },
      785: {
        arrows: true,
        pagination: false
      },
      648: {
        perPage: 1
      }
    }
}).mount();
  
}