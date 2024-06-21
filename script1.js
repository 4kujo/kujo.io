document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const phoneInput = document.getElementById('phoneInput');


    function isValidEmail(email) {
 
        return /\S+@\S+\.\S+/.test(email);
    }

   
    function isValidName(name) {
        return /^[a-zA-Zа-яА-ЯёЁ]+$/.test(name); 
    }


    function isValidPhone(phone) {
        return /^\+7\d{10}$/.test(phone); 
    }


    function validateFields() {
 
        if (!isValidName(nameInput.value.trim())) {
            alert('Пожалуйста, введите корректное имя');
            nameInput.classList.add('invalid');
            return false;
        }


        if (!isValidEmail(emailInput.value.trim())) {
            alert('Пожалуйста, введите корректный email.');
            emailInput.classList.add('invalid');
            return false;
        }


        if (!isValidPhone(phoneInput.value.trim())) {
            alert('Пожалуйста, введите корректный телефонный номер');
            phoneInput.classList.add('invalid');
            return false;
        }


        return true;
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (validateFields()) {

            submitBtn.disabled = true;
            submitBtn.classList.remove('valid');
            submitBtn.classList.add('sending');
            submitBtn.textContent = 'Отправка...';


            setTimeout(function() {
                submitBtn.classList.remove('sending');
                submitBtn.classList.add('sent');
                submitBtn.textContent = 'Отправлено';

             
                form.reset();


                alert('Заявка успешно отправлена!');
            }, 2000); 
        }
    });


    nameInput.addEventListener('input', function() {
        if (isValidName(nameInput.value.trim())) {
            nameInput.classList.remove('invalid');
        } else {
            nameInput.classList.add('invalid');
        }
    });

    emailInput.addEventListener('input', function() {
        if (isValidEmail(emailInput.value.trim())) {
            emailInput.classList.remove('invalid');
        } else {
            emailInput.classList.add('invalid');
        }
    });

    phoneInput.addEventListener('input', function() {
        if (isValidPhone(phoneInput.value.trim())) {
            phoneInput.classList.remove('invalid');
        } else {
            phoneInput.classList.add('invalid');
        }
    });

});
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');


    const originalPlaceholders = {};
    inputs.forEach(input => {
        originalPlaceholders[input.id] = input.placeholder;
    });


    function setNewPlaceholder(input) {
        switch (input.id) {
            case 'phoneInput':
                input.placeholder = '+79999999999';
                break;
            case 'emailInput':
                input.placeholder = 'example@example.com';
                break;
            case 'nameInput':
                input.placeholder = 'Иван';
                break;

            default:
                break;
        }
    }


    function restoreOriginalPlaceholder(input) {
        const originalPlaceholder = originalPlaceholders[input.id];
        if (input.value.trim() === '') {
            input.placeholder = originalPlaceholder;
        }
    }


    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            setNewPlaceholder(input);
        });

        input.addEventListener('blur', function() {
            restoreOriginalPlaceholder(input);
        });

        input.addEventListener('input', function() {
            if (input.value.trim() !== '') {
                restoreOriginalPlaceholder(input);
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    emailjs.init('8bPoJ8brf5yggcbQ3');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }


        emailjs.send("service_ck0k1vf", "template_7lx13ec", {
            from_name: form.nameInput.value,
            phone: form.phoneInput.value,
            email: form.emailInput.value,
        })
        .then(function(response) {
            console.log('Письмо успешно отправлено', response);
            alert('Форма успешно отправлена!');
            form.reset();
        }, function(error) {
            console.error('Произошла ошибка при отправке письма', error);
            alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.');
        });

    });
    });