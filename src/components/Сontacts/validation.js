export class FormsValidation {

    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]',
    };

    errorMessages = {
        cyrillicOnly: () => 'Пожалуйста, вводите только кириллицу.',
        lettersOnly: () => 'Пожалуйста, вводите только буквы.',
        tooManyApostrophes: () => 'Допускается не более одного апострофа.',
        tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов — ${minLength}.`,
        tooLong: ({ maxLength }) => `Слишком длинное значение, максимум символов — ${maxLength}.`,
    };

    invalidAttempts = 0;
    blockTimeout = null;

    constructor() {
        // Инициализация: событий нет, вызывается вручную
    }

    validateField(fieldControlElement) {
        const value = fieldControlElement.value.trim();
        const errors = [];

        // Проверка для поля имени
        if (fieldControlElement.name === 'firstName') {
            if (/^[a-zA-Z]/.test(value)) {
                errors.push(this.errorMessages.cyrillicOnly());
            } else if (/^\d/.test(value)) {
                errors.push(this.errorMessages.lettersOnly());
            } else if ((value.match(/'/g) || []).length > 1) {
                errors.push(this.errorMessages.tooManyApostrophes());
            } else if (value.length < fieldControlElement.minLength) {
                errors.push(this.errorMessages.tooShort(fieldControlElement));
            } else if (value.length > fieldControlElement.maxLength) {
                errors.push(this.errorMessages.tooLong(fieldControlElement));
            }
        }

        this.manageErrors(fieldControlElement, errors);

        return errors.length === 0;
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement
            .closest(this.selectors.form)
            .querySelector(this.selectors.fieldErrors);

        fieldErrorsElement.innerHTML = errorMessages
            .map((message) => `<span class="field__error">${message}</span>`)
            .join('');

        const isValid = errorMessages.length === 0;
        fieldControlElement.ariaInvalid = !isValid;
    }

    blockInput(fieldControlElement) {
        fieldControlElement.disabled = true;
        const fieldErrorsElement = fieldControlElement
            .closest(this.selectors.form)
            .querySelector(this.selectors.fieldErrors);
        let timer = 30;

        const countdown = () => {
            if (timer > 0) {
                fieldErrorsElement.innerHTML = `<span class="field__error">Поле заблокировано на ${timer} секунд</span>`;
                timer--;
            } else {
                clearInterval(this.blockTimeout);
                fieldControlElement.disabled = false;
                fieldErrorsElement.innerHTML = '';
                this.invalidAttempts = 0;
            }
        };

        this.blockTimeout = setInterval(countdown, 1000);
        countdown();
    }

    checkAttempts(fieldControlElement) {
        this.invalidAttempts++;

        if (this.invalidAttempts >= 3) {
            this.blockInput(fieldControlElement);
            return false;
        }

        fieldControlElement.value = ''; // Очистка поля после неверной попытки
        return true;
    }
}





// class FormsValidation {
//     selectors = {
//       form: '[data-js-form]',
//       fieldErrors: '[data-js-form-field-errors]'
//     }
  
//     errorMessages = {
//       valueMissing: () => 'Пожалуйста, заполните это поле',
//       patternMismatch: ({ title }) => title || 'Данные не соответствуют формату',
//       tooShort: ({ minLength }) => `Слишком короткое значение, минимум символов — ${minLength}`,
//       tooLong: ({ maxLength }) => `Слишком длинное значение, ограничение символов — ${maxLength}`,
//     }
  
//     constructor() {
//       this.bindEvents()
//     }
  
//     manageErrors(fieldControlElement, errorMessages) {
//       const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)
  
//       fieldErrorsElement.innerHTML = errorMessages
//         .map((message) => `<span class="field__error">${message}</span>`)
//         .join('')
//     }
  
//     validateField(fieldControlElement) {
//       const errors = fieldControlElement.validity
//       const errorMessages = []
  
//       Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
//         if (errors[errorType]) {
//           errorMessages.push(getErrorMessage(fieldControlElement))
//         }
//       })
  
  
//       this.manageErrors(fieldControlElement, errorMessages)
  
//       const isValid = errorMessages.length === 0
  
//       fieldControlElement.ariaInvalid = !isValid
  
//       return isValid
//     }
  
//     onBlur(event) {
//       const { target } = event
//       const isFormField = target.closest(this.selectors.form)
//       const isRequired = target.required
  
//       if (isFormField && isRequired) {
//         this.validateField(target)
//       }
//     }
  
//     onChange(event) {
//       const { target } = event
//       const isRequired = target.required
//       const isToggleType = ['radio', 'checkbox'].includes(target.type)
  
//       if (isToggleType && isRequired) {
//         this.validateField(target)
//       }
//     }
  
//     onSubmit(event) {
//       const isFormElement = event.target.matches(this.selectors.form)
//       if (!isFormElement) {
//         return
//       }
  
//       const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
//       let isFormValid = true
//       let firstInvalidFieldControl = null
  
//       requiredControlElements.forEach((element) => {
//         const isFieldValid = this.validateField(element)
  
//         if (!isFieldValid) {
//           isFormValid = false
  
//           if (!firstInvalidFieldControl) {
//             firstInvalidFieldControl = element
//           }
//         }
//       })
  
//       if (!isFormValid) {
//         event.preventDefault()
//         firstInvalidFieldControl.focus()
//       }
//     }
  
//     bindEvents() {
//       document.addEventListener('blur', (event) => {
//         this.onBlur(event)
//       }, { capture: true })
//       document.addEventListener('change', (event) => this.onChange(event))
//       document.addEventListener('submit', (event) => this.onSubmit(event))
//     }
//   }
  
//   new FormsValidation()