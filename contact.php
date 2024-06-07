<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-transperent">
  <div class="container">
    <a class="navbar-brand" href="index.php"><img src="img/logo.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Направления
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">UX/UI дизайн</a></li>
            <li><a class="dropdown-item" href="#">Системная аналитика</a></li>
            <li><a class="dropdown-item" href="#">Моушн-дизайн</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="contact.php">Контакты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="galery.php">Галерея</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div class="contact">
    <div class="container">
        <div class="row">
        <div class="col-md-8">
            <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.6669066893174!2d48.39633089189924!3d54.3275070879463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415d39fe264455a3%3A0x13d1a6bba557dbc6!2z0KXQsNC50KLRjdC6INCU0LXQstC10LvQvtC_0LzQtdC90YIg0JPRgNGD0L_QvyAoSFRERyk!5e0!3m2!1sru!2sru!4v1717135914216!5m2!1sru!2sru" width="100%" height="435" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="col-md-4">
            <h1 style="color:white;font-size:70px;">Контакты</h1>
            <p style="color:white;font-size:40px;font-weight:lighter;">ул.Федерации 83</p>
            <p style="color:white;font-size:40px;font-weight:lighter;">hello@htdev.ru</p>
            <p style="color:white;font-size:40px;font-weight:lighter;">8 800 200 53 43</p>
        </div>
        </div>
    </div>
</div>
<div class="container">
<div class="contactus">
<div class="col-md-6">
    <div class="contacttext">
    <h3>Оставьте свои данные</h3>
    <h5>и наши специалисты свяжутся с вами</h5>
    <input style="Border: none; outline: none;padding-top:5%" type="text" name="text" placeholder="Ваше имя*">
    <img src="img/line-4.png">
    <input style="Border: none; outline: none;" type="email" name="text" placeholder="Ваш email*">
    <img src="img/line-4.png">
    <input style="Border: none; outline: none;" type="text" name="text" placeholder="Ваш телефон*">
    <img src="img/line-4.png">
    <button class="butn">Отправить</button>
    </div>
</div>
<div class="col-md-6">
    <img style="padding-top:10%;" src="img/contact-banner.png">
    
</div>

</div>

</div>
<div class="container">
<img  class="linefooter" src="img/linefooter.png">
            </div>
<footer style="background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(32,32,129,1) 50%, rgba(5,31,36,1) 100%);" class="bg-body-tertiary text-center">
<div class="row">

    <div class="brandFooter"><img src="img/logo.png" style="padding-right:50%">
    <img src="img/vk.png" style="padding-right:1%;"><img src="img/vector.svg">
            </div>
        </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>