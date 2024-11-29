export const Popup = () => {
    
    const openBuyButtons = document.querySelectorAll('.tabs-content__buy-btn');
    const closeModalButton = document.querySelector('.buy-modal__close-btn');
    const buyModal = document.querySelector('.buy-modal');
    const submitBtn = buyModal.querySelector('.buy-modal__submit-btn');    
    
    const modalTitle = buyModal.querySelector('.buy-modal__title');
    const modalPeriod = buyModal.querySelector('.buy-modal__period');
    const modalPrice = buyModal.querySelector('.buy-modal__price');

    
    const openModal = (title, period, price) => {
        modalTitle.textContent = title;
        modalPeriod.textContent = period;
        modalPrice.textContent = price;
        
        buyModal.showModal();
        buyModal.classList.add('is-animated');
        
        
        submitBtn.classList.add('animate');
        setTimeout(() => {
            submitBtn.classList.remove('animate');
        }, 3000); 
    };

    
    openBuyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const plan = e.target.closest('.tabs-content__plan');
            const title = plan.querySelector('.tabs-content__title').textContent;
            const period = plan.querySelector('.tabs-content__period').textContent;
            const price = plan.querySelector('.tabs-content__price-bg').textContent;

            openModal(title, period, price);
        });
    });

    
    const closeModal = () => {
        buyModal.close();
        buyModal.classList.remove('is-animated');
    };

    closeModalButton.addEventListener('click', closeModal);
    buyModal.addEventListener('submit', closeModal);
    
    buyModal.addEventListener('click', (e) => {
        if (e.target === buyModal) {
            closeModal();
        }
    });

    
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    new Inputmask('+7 (999) 999-99-99').mask(phoneInputs);

    const emailInput = document.querySelectorAll('input[type="email"]');
    new Inputmask({ alias: 'email' }).mask(emailInput);
}




