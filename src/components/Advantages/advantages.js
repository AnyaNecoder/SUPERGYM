export const animatedCard = () => {


    const card = document.querySelector('.advantages__item--center');
    
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.7; 
      const y = (event.clientY - rect.top) / rect.height - 0.7;
    
      const rotationX = y * 30;
      const rotationY = x * 30; 
    
      card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0)'; 
    });
    
}