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
    <!-- <img id="unichar" src="unicornchar.png" alt="">  -->
    </div>

<!-- AUDIO -->
<!-- <audio autoplay>
    <source src="audio/rushardbass.mp3">
</audio> -->
<div class="level">
    <h1>Score: <input type="text" id="currentscore" value="" readonly/></h1> 
</div>

<div id="fullbeer">

</div>
</body> 
</html> 
  
<script src="main_javascript.js"></script>
<script src="secondjs.js"></script>  