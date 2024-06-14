
    document.querySelectorAll('.myBtn').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            document.querySelectorAll('.block').forEach(block => {
                block.style.display = 'none';
            });
            document.getElementById(`block${id}`).style.display = 'block';
        });
    });



document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitButn');
    submitBtn.addEventListener('click', function() {
        var nameInput = document.getElementById('nameInput');
        var phoneInput = document.getElementById('phoneInput');
        if (!validateName(nameInput.value)) {
            alert('Пожалуйста, введите ваше имя.');
            return;
        }
        if (!validatePhoneNumber(phoneInput.value)) {
            alert('Пожалуйста, введите корректный номер телефона.');
            return;
        }
        var modal1 = document.getElementById('myModal');
        var modal2 = document.getElementById('myModal2');
        modal1.style.display = "none";
        modal2.style.display = "block";
    });
});

function validateName(name) {
    return name.trim() !== '';
}

function validatePhoneNumber(phone) {
    return /^(\+7\s?)?(\d{3}[\s-]?)?[\d\s-]{7,10}$/.test(phone);
}

$(document).ready(function() {
    $('.callback').click(function() {
        $('#myModal').show();
    });

    $('.close').click(function() {
        $('#myModal').hide();
    });
    $('.close').click(function() {
        $('#myModal2').hide();
    });
    
    $(window).click(function(event) {
        if (event.target == $('#myModal')[0]) {
            $('#myModal').hide();
        }
    });
});







document.addEventListener('DOMContentLoaded', function() {
    var showHideBtn = document.getElementById('showHideBtn');

    
    if (showHideBtn) {
      
        showHideBtn.addEventListener('click', function() {
            if (showHideBtn.textContent === 'Показать еще') {
                
                showHideBtn.textContent = 'Скрыть';
            } else {
                
                showHideBtn.textContent = 'Показать еще';
            }
        });
    }
});