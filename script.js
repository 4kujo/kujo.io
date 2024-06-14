
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.myBtn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = this.getAttribute('data-id');
            fetchDataFromPHP(id);
        });
    });
});

function fetchDataFromPHP(id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                displayData(response);
            } else {
                console.error('Произошла ошибка при выполнении запроса:', xhr.status);
            }
        }
    };
    xhr.open('GET', 'fetch_data.php?id=' + id, true);
    xhr.send();
}

function displayData(data) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<div class="base-color"><img src="img/' + data.img + ' " class="out"><h5>' + data.h1 + '</h5><ul><li><p>' + data.p1 + '</p></li><li><p>' + data.p2 + '</p></li><ul></div>';
}



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

    // Проверка наличия кнопки с идентификатором 'showHideBtn'
    if (showHideBtn) {
        // Если кнопка существует, добавляем обработчик события
        showHideBtn.addEventListener('click', function() {
            if (showHideBtn.textContent === 'Показать еще') {
                // Если текст кнопки "Показать еще", изменяем его на "Скрыть"
                showHideBtn.textContent = 'Скрыть';
            } else {
                // Если текст кнопки "Скрыть", изменяем его на "Показать еще"
                showHideBtn.textContent = 'Показать еще';
            }
        });
    }
});