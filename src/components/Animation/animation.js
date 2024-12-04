export const  pulseTitle = () => {

    const title = document.querySelector('.js-pulse-title'); 
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach((entry) => {
            if (entry.isIntersecting) { 
            title.classList.add('pulse'); 
            setTimeout(() => title.classList.remove('pulse'), 4500); 
            }
        });
        }, {
            threshold: 0.9
        });
    
    observer.observe(title);    
}