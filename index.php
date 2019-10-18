<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Canvas</title>
<style>
#canvas{
 outline:1px solid #000;
}
</style>
</head>
<body>
<canvas id="canvas2" height="900px" width="450px"></canvas>
<script>


var canvas = document.querySelector('#canvas2');
var context = canvas.getContext('2d');

var xPos = 0;
var yPos = 820;

context.rect(xPos, yPos, 50 , 50);
context.stroke();
context.fill();

function move(e){

 //alert(e.keyCode);

 if(e.keyCode==39){
   if(xPos ==400){

   }else{
    xPos+=200;
   }
  
 }
 if(e.keyCode==37) {
   if(xPos ==0){

   }else{
    xPos-=200;
   }
  
 }
///////////// move up and down (removed) ///////////////////

//  if (e.keyCode == 38) {
//   yPos-=8;
//  }
//  if (e.keyCode == 40){
//   yPos+=8;
//  }

 canvas.width=canvas.width;
 context.rect(xPos, yPos, 50 , 50);
  context.stroke();
  context.fill();

}


document.onkeydown = move;
</script>
</body>
</html>