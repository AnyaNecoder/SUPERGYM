export const  FreeTrainingForm = () => {

    const form = document.querySelector('.free-training__form');
    const nameInput = document.getElementById('free-first-name');    
    const nameError = document.querySelector('.free-training__error');
    
    let invalidAttempts = 0; 
    let blockTimeout;
    
    // Валидация имени
    const validateName = (value) => {
        if (/^[a-zA-Z]/.test(value)) return 'Пожалуйста, вводите только кириллицу';
        if (/^\d/.test(value)) return 'Пожалуйста, вводите только буквы';
        if ((value.match(/'/g) || []).length > 1) return 'Допускается не более одного апострофа';
        if (value.length > 15) return 'Допускается не более 15 символов';
        return '';         
    };
    
    // Отображение ошибки
    const showError = (message) => {
        nameError.textContent = message;
    };

    // Очистка ошибки
    const clearError = () => {
        nameError.textContent = '';
    };
    
    // Блокировка поля ввода
    const blockInput = () => {
        nameInput.disabled = true; 
        let timer = 30;
    
        nameError.textContent = `Поле заблокировано на ${timer} секунд`;

        blockTimeout = setInterval(() => {
            timer--;
            nameError.textContent = `Поле заблокировано на ${timer} секунд`;
    
            if (timer <= 0) {
                clearInterval(blockTimeout); 
                nameInput.disabled = false; 
                clearError();
                invalidAttempts = 0;
            }
        }, 1000);
    };

    // Обработка ввода
    const handleInput = () => {
        const value = nameInput.value.trim();
        const error = validateName(value);

        if (error) {
            showError(error);
        } else {
            clearError();
        }
    };
    
    // Отправка данных на сервер
    const sendDataToBackend = async (formData) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData, 
            });
    
            if (response.ok) {
                alert('Данные успешно отправлены!');
            } else {
                alert('Ошибка при отправке данных. Попробуйте позже.');
            }
        } 
        catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось отправить данные. Проверьте соединение с интернетом.');
        }
    };
    
    // Обработка отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const nameValue = nameInput.value.trim(); 
        const error = validateName(nameValue); 
    
        if (error) {
            showError(error);
            invalidAttempts++;
    
            if (invalidAttempts >= 3) {
                blockInput(); 
            } else {
                alert('Пожалуйста, вводите данные в указанном формате.');
                form.reset();
                clearError();
            }
        } else {
            const formData = new FormData(form); 
            sendDataToBackend(formData); 
            form.reset(); 
            clearError();
            invalidAttempts = 0; 
        }
    };

    nameInput.addEventListener('input', handleInput);
    form.addEventListener('submit', handleSubmit);
}




// import { FormsValidation } from './validation.js';

// export const FreeTrainingForm = () => {
//     const formsValidation = new FormsValidation();

//     const onSubmit = async (event) => {
//         const formElement = event.target.closest(formsValidation.selectors.form);

//         if (!formElement) return;

//         const nameField = formElement.querySelector('[name="firstName"]');
//         const isNameValid = formsValidation.validateField(nameField);

//         if (!isNameValid) {
//             if (!formsValidation.checkAttempts(nameField)) {
//                 event.preventDefault();
//             }
//             return;
//         }

//         // Если поле валидно, отправляем данные
//         const formData = new FormData(formElement);
//         await sendDataToBackend(formData);
//     };

//     const sendDataToBackend = async (formData) => {
//         try {
//             const response = await fetch('https://example.com/submit', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 alert('Форма успешно отправлена!');
//             } else {
//                 alert('Ошибка отправки формы. Попробуйте снова.');
//             }
//         } catch (error) {
//             alert('Ошибка соединения с сервером.');
//         }
//     };

//     document.addEventListener('submit', onSubmit, { capture: true });
// };