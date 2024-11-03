export const Popup = () => {

    const openBuyButton = document.querySelectorAll('.tabs-content__buy-btn');
    const closBuyButton = document.querySelector('.buy-modal__close-btn');
    const buyModal = document.querySelector('.buy-modal');
    
    openBuyButton.forEach((btn) => {
        btn.addEventListener('click', () => {            
            buyModal.showModal();
            buyModal.classList.add('is-animated');
        });
    });
    
    closBuyButton.addEventListener('click', () => {        
        buyModal.close();
        buyModal.classList.remove('is-animated');
    });
    
    buyModal.addEventListener('submit', () => {        
        buyModal.close();
        buyModal.classList.remove('is-animated');
    });

    buyModal.addEventListener('click', (e) => {
        const modal = e.currentTarget;
        const isClickOnBackDrop = e.target == modal;
    
        if (isClickOnBackDrop) {            
            modal.close();
            buyModal.classList.remove('is-animated');
        }
    });
    
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    const phoneMask = new Inputmask('+7 (999) 999-99-99');
    phoneMask.mask(phoneInputs);

    const emailInput = document.querySelector('input[type="email"]');
    const emailMask = new Inputmask({
        alias: 'email',
    });
    emailMask.mask(emailInput); 

    

    // phoneInputs.forEach(input => {
    //     input.addEventListener("focus", () => {
    //         input.nextElementSibling.classList.add("shifted");
    //     });
    //     input.addEventListener("blur", () => {
    //         if (input.value === '') {
    //             input.nextElementSibling.classList.remove("shifted");
    //         }
    //     });
    // });
    
    
}   





