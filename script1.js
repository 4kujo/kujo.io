
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('myForm');
        var nameInput = document.getElementById('nameInput');
        var emailInput = document.getElementById('emailInput');
        var phoneInput = document.getElementById('phoneInput');

        form.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault(); 
            }
        });

        function validateForm() {
            if (!validateName(nameInput.value)) {
                alert('Пожалуйста, введите ваше имя.');
                return false;
            }
            if (!validateEmail(emailInput.value)) {
                alert('Пожалуйста, введите корректный email.');
                return false;
            }
            if (!validatePhoneNumber(phoneInput.value)) {
                alert('Пожалуйста, введите корректный номер телефона.');
                return false;
            }
            return true; 
        }

        function validateName(name) {
            return name.trim() !== '';
        }

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function validatePhoneNumber(phone) {
            return /^\+?[0-9\s()-]{10,}$/.test(phone);
        }
    });
