<?php
if(isset($_GET['id'])){
  include "koneksi.php";
  function validate($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  $id = validate($_GET['id']);

  $sql = "delete from heroes_tb where id=$id";
  $result = mysqli_query($conn, $sql);
  if($result){
    header("Location: index.php?success=successfully Delete");
  }else {
    header("Location: index.php?error=unknown error");
  }

}else {
  header("Location: index.php");
}


?>