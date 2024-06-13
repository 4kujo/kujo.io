// $(document).ready(function(){
//     $('.myBtn').click(function(){
//         var id = $(this).data('id'); // Получаем data-id нажатой кнопки
//         console.log("id кнопки: " + id); // Выводим id в консоль для проверки
//         $.ajax({
//             type: 'POST',
//             url: '', // Пустая строка указывает на текущую страницу
//             data: {id: id}, // Передаем id на сервер
//             success: function(response){
//                 $('#result').html(response); // Отображаем результат на странице
//             }
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.myBtn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var id = this.getAttribute('data-id');
            fetchDataFromPHP(id);
        });
    });
});

// Функция для отправки AJAX-запроса на сервер PHP
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

// Функция для отображения полученных данных
function displayData(data) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<div class="base-color"><img src="img/' + data.img + ' " class="out"><h5>' + data.h1 + '</h5><ul><li><p>' + data.p1 + '</p></li><li><p>' + data.p2 + '</p></li><ul></div>';
}



$(document).ready(function() {
  
    $('#submitButn').click(function() {
       
        var phoneNumber = $('#phoneInput').val();
        
        
        if (!validatePhoneNumber(phoneNumber)) {
            
            alert('Пожалуйста, введите корректный номер телефона в формате +7 999 999 99 99.');
            return;
        }

        
    });

   
    function validatePhoneNumber(phoneNumber) {
       
        var regex = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
        
        return regex.test(phoneNumber);
    }
});


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

  
    $('#submitButn').click(function() {
       
        $('#myModal').hide();
        $('#myModal2').show();
       
        setTimeout(function() {
            $('#myModal2').hide();
        }, 3000); 
    });
});



$(document).ready(function() {
    $('#emailForm').submit(function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        var formData = $(this).serialize(); // Получаем данные формы в формате, который можно отправить на сервер

        $.ajax({
            type: 'POST',
            url: 'send_email.php', // Путь к файлу на сервере, который будет отправлять электронное письмо
            data: formData,
            success: function(response) {
                alert('Письмо успешно отправлено!');
            },
            error: function(xhr, status, error) {
                alert('Возникла ошибка при отправке письма.');
                console.log(xhr.responseText);
            }
        });
    });
});

$(document).ready(function() {
    $('#emailForm').submit(function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        var formData = $(this).serialize(); // Получаем данные формы в формате, который можно отправить на сервер

        $.ajax({
            type: 'POST',
            url: 'send_email.php', // Путь к файлу на сервере, который будет отправлять электронное письмо
            data: formData,
            success: function(response) {
                alert('Письмо успешно отправлено!');
            },
            error: function(xhr, status, error) {
                alert('Возникла ошибка при отправке письма.');
                console.log(xhr.responseText);
            }
        });
    });
});