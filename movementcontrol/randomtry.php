<?php
require 'includes/dbh.inc.php';
?>
<!DOCTYPE html> 
<html> 
<head> 
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Concert+One&display=swap" rel="stylesheet">
    <title>UniBeerCorn</title>

    <!-- AUDIO -->
<!-- <script>
window.onload = function() {
    var context = new AudioContext();
}
</script> -->
    
</head> 
<body style="background-color: black;"> 
    <div>
    
    <canvas id="canvas1" style="border: 1px solid black;"></canvas>
    <canvas id="canvas2" height="900px" width="450px"></canvas>
    <canvas id="canvas3" height="900px" width="450px"></canvas>
    <!-- <canvas id="canvas4" height="900px" width="450px"></canvas> -->
    <canvas id="canvas5" height="900px" width="450px"></canvas>  
    <canvas id="beercanvas" class="beerlevel" height="250px" width="50px"></canvas>
    <canvas id="ultcanvas" height="900px" width="450px"></canvas> 
     
    </div>

<!-- AUDIO -->
<!-- <audio autoplay>
    <source src="audio/rushardbass.mp3">
</audio> -->
<div class="level">
    <h1>Score: <input type="text" id="currentscore" value="" readonly/></h1>
    <div id="life1"><img id="unichar" src="unicornchar.png" alt=""></div>
    <div id="life2"><img id="unichar" src="unicornchar.png" alt=""></div> 
    <div id="life3"><img id="unichar" src="unicornchar.png" alt=""></div>  
</div>

<div id="fullbeer">

</div>
<form id="submitForm" class="totheright" action="includes/highscore.inc.php" method="POST">
    <h1>Game Over</h1>
    <input type="text" name="username">
    <input id="scoreAmount" type="hidden" name="score" value="">
    <button type="submit" name="hsSub">submit score</button>
</form>

<?php
//get the highscores from the database
getHighscore($conn);
function getHighscore($conn){
    $sql ="SELECT * FROM highscore ORDER BY highScoreVAL DESC LIMIT 10";
    $result = $conn->query($sql);
    echo "<div class='showscore-div'><h1>";
    echo "Top 10 Highscores";
    echo "</h1>";
    while ($row = $result->fetch_assoc()){
        $username = $row['userName'];
        $scoreVal = $row['highScoreVAL'];
        echo "<div class='showscore-rows'><p>";
        echo $row['userName']." ";
        echo "</p><p class='float-right push-up'>";
        echo $row['highScoreVAL']."<br>";
        echo "</p></div>";
    }
}

?>


</body> 
</html> 
  
<script src="main_javascript.js"></script>
<script src="secondjs.js"></script>  