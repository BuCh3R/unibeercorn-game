<?php

require 'dbh.inc.php';

if(isset($_POST['hsSub'])){
    $userName = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['username']));
    $highscore = htmlspecialchars(mysqli_real_escape_string($conn, $_POST['score']));

    $sql = "INSERT INTO highscore (highScoreVAL, userName) VALUES (?, ?)";
    $stmt = mysqli_stmt_init($conn);
    if(empty($userName)){
        $userName = "<p>&nbsp;</p>";
        header("Location: ../randomtry.php?empty_field");
    }if(!mysqli_stmt_prepare($stmt, $sql)) {
        header("Location: ../randomtry.php?server=error"); 
    }else{
        mysqli_stmt_bind_param($stmt, "ss", $highscore, $userName);
        mysqli_stmt_execute($stmt);
        header("Location: ../randomtry.php?submit_highscore=success");
    }
    
}
mysqli_stmt_close($stmt);
mysqli_close($conn);