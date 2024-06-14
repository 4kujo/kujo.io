<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
</head>
<body>
          <?
          $mysqli = new mysqli('localhost','root','','htdev');
          if ($mysqli->connect_error){
              die('Error:('.$mysqli->connect_errno.')'.$mysqli->connect_error);
          }
          ?>
</body>
</html>