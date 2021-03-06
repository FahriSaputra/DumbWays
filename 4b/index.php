<?php

include "koneksi.php";
$sql = "select h.id, h.name, t.name AS type, h.photo FROM heroes_tb AS h JOIN type_tb AS t ON (h.id = t.id)";
$result = mysqli_query($conn, $sql)


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">7DW</a>
        <button class="btn btn-outline-success" type="submit">ADD</button>
    </div>
  </nav>
  <div class="container">
    <div class="row gap-3">
        <?php 
        $i = 0;
        while($rows = mysqli_fetch_assoc($result)){
          // $i++;
        ?>
        <div class="card"style="width : 20rem">
          <div class="col-md-3" >
            <div style="width: 18rem">
              <img src="<?=$rows['photo']?>" class="card-img-top" style="height:25rem">
              <div class="card-body">
                <h5 class="card-title"><?=$rows['name']?></h5>
                <p class="card-text"><?=$rows['type']?></p>
                <a href="#" class="btn btn-primary block">Detail</a>
                <a href="#" class="btn btn-danger">DELETE</a>
                <a href="#" class="btn btn-warning">EDIT</a>
              </div>
            </div>
          </div> 
        </div>
        <?php } ?>
    </div>
  </div>
</body>
</html>