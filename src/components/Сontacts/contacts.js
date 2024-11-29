export const  trainingForm = () => {

const title = document.querySelector('.free-training__title'); 
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



const form = document.querySelector(".free-training__form");
const nameInput = document.getElementById("free-first-name");
const nameError = document.querySelector(".free-training__error");

let invalidAttempts = 0;
let blockTimeout;

const validateName = (value) => {
    if (/^[a-zA-Z]/.test(value)) return "Пожалуйста, вводите только кириллицу.";
    if (/^\d/.test(value)) return "Пожалуйста, вводите только буквы.";
    if ((value.match(/'/g) || []).length > 1) return "Допускается не более одного апострофа.";
    if (value.length > 15) return "Допускается не более 15 символов.";
    return ""; 
};

const showError = (message) => {
    nameError.textContent = message;    
};
    
const clearError = () => {
    nameError.textContent = "";
};

const blockInput = () => {
    nameInput.disabled = true;
    let timer = 30;

    nameError.textContent = `Поле заблокировано на ${timer} сек.`;
    blockTimeout = setInterval(() => {
        timer--;
        nameError.textContent = `Поле заблокировано на ${timer} сек.`;

        if (timer <= 0) {
            clearInterval(blockTimeout);
            nameInput.disabled = false;
            clearError();
            invalidAttempts = 0; 
        }
    }, 1000);
};

const handleInput = () => {
const value = nameInput.value.trim();
const error = validateName(value);

    if (error) {
        showError(error);
    } else {
        clearError();
    }
};
    
const handleSubmit = (event) => {
    event.preventDefault();

    const value = nameInput.value.trim();
        if (!value) {
        showError("Поле должно быть заполнено");
        return;
    }

    const error = validateName(value);
        if (error) {
        showError(error);
        invalidAttempts++;

        if (invalidAttempts >= 3) {
            blockInput();
        } else {
            form.reset();
            clearError();
        }
        } else {
            alert("Спасибо! Наш администратор перезвонит вам в ближайшее время.");
            form.reset();
            clearError();
            invalidAttempts = 0; 
        }
};

nameInput.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

}