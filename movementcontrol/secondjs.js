




// character // char move controls //
var canvas = document.querySelector('#canvas2');
var context = canvas.getContext('2d');
var hero = {xPos: 0, yPos: 820};

var useUlt = 0;
let beerlvl=0;
let xBeer=0;
let yBeer=225;

const imgone = new Image();
imgone.src = 'unicornchar.png';
imgone.onload = () => {
context.drawImage(imgone, hero.xPos, hero.yPos, 50 , 50);
};


function move(e){
  ctxult = document.getElementById('ultcanvas').getContext('2d');
  imgult = new Image;
  imgult.src = 'rainbow.png';
 //alert(e.keyCode);

 if(e.keyCode==39){
   if(hero.xPos ==400){

   }else{
    hero.xPos+=40;
   }
  
 }
 if(e.keyCode==37) {
   if(hero.xPos ==0){

   }else{
    hero.xPos-=40;
   }
  
 }
 if(e.keyCode==32 && beerlvl==10){
  
  ctxult.drawImage(imgult, 0, 0);
  beerlvl -= 10;
  yBeer += 250;
  document.getElementById('fullbeer').style.display="none"
  setTimeout(function(){ctxult.clearRect(0,0, ctxult.canvas.width, ctxult.canvas.height); }, 3000);
  ctxbeer.clearRect(0,0, ctxbeer.canvas.width, ctxbeer.canvas.height);
 }



///////////// move up and down (removed) ///////////////////

//  if (e.keyCode == 38) {
//   yPos-=8;
//  }
//  if (e.keyCode == 40){
//   yPos+=8;
//  }
  
    
 

// draw new character when after moving //
  canvas.width=canvas.width;
  imgone.src = 'unicornchar.png';
  imgone.onload = () => {
    context.drawImage(imgone, hero.xPos, hero.yPos, 50 , 50);
  }; 
}


document.onkeydown = move;


// dangerous drops // do not get hit by them //
var b1 = {x: 0, y: 0};
var b2 = {x: 0, y: 0};
var bombs=[]; // = [b1,b2];
for(var i=0; i<10; i++){
  bombs[i] = {x: 0, y: 0, speed: Math.random()*2+1};
}


function createNewBomb(bomb){
  bomb.x = Math.floor(Math.random()*400);
  bomb.y = Math.floor(Math.random()*-900);
}
function updateBombPos(bomb, img, ctx){
  bomb.y += bomb.speed;
  if (bomb.y >900) {
    createNewBomb(bomb);  
  }
  ctx.drawImage(img, bomb.x, Math.floor(bomb.y));
}
function checkDeath(bomb, hero, img, ctx){
  var xny = 
    (bomb.y>=hero.yPos-25 && bomb.y<=hero.yPos+25) &&
    (bomb.x>=hero.xPos-25 && bomb.x<=hero.xPos+25);        
  if(xny){
    // alert("Game Over");
    console.log("dead");
    const imgdead = new Image();
    imgdead.src = 'boom.png';
    imgdead.onload = () => {
      ctx.drawImage(imgdead, hero.xPos-25, hero.yPos-8, 100 , 65);
    };   
  }
}

function createbomb (canvasid){
  return function () {
    var
      img = new Image,
      ctx = document.getElementById(canvasid).getContext('2d');
    
      img.src = 'shoot.png';
      img.addEventListener('load', function () {
  
        var interval = setInterval(function() {
        // var  y = Math.floor(Math.random()*-900), x = Math.floor(Math.random()*440);
        //start pos//
        for(var i=0; i<bombs.length; i++){
          createNewBomb(bombs[i]);
        }
        

        return function () {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          for(var i=0; i<bombs.length; i++){
            updateBombPos(bombs[i], img, ctx);
          }
         
          //game over
          for(var i=0; i<bombs.length; i++){
            checkDeath(bombs[i], hero, img, context);
          }
          
        };
      }(), 1);
    });
  };
}

window.addEventListener('load', createbomb('canvas3'));
// window.addEventListener('load', createbomb('canvas4'));



window.addEventListener('load', function () {
  
  
  let score=0;
  
  var
    img = new Image,
    ctx = document.getElementById('canvas5').getContext('2d');
    img.src = 'energy.png';
    img.addEventListener('load', function () {

    var interval = setInterval(function() {
      var  y = Math.floor(Math.random()*-500), x = Math.floor(Math.random()*400);
      
      return function () {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(img, x, y);
        y += 2;
        if (y >900) {
          y = Math.floor(Math.random()*-500), x=Math.floor(Math.random()*400);
          
        }
        var xny = (y>=hero.yPos-25 && y<=hero.yPos+25) && (x>=hero.xPos-25 && x<=hero.xPos+25);
        if(xny){
          console.log("score");
          y = Math.floor(Math.random()*-500), x=Math.floor(Math.random()*400);
          score++;
          // fill up beer'o-meter
          if(beerlvl<10){
            ctxbeer = document.getElementById('beercanvas').getContext('2d');
            imgbeer2 = new Image;
            imgbeer2.src = 'beerliq2.png';
            ctxbeer.drawImage(imgbeer2, xBeer, yBeer);
            beerlvl++;
            xBeer += 0;
            yBeer -= 25;
          }
          
          
          
          
          
          
          
          
          // beer ultimate power ready!
          if(beerlvl==10){
            document.getElementById('fullbeer').style.display="block"
          }
          document.getElementById('currentscore').value = score;

        }
      };
    }(), 1);
  }, false);
}, false);


// ctxbeer = document.getElementById('beercanvas').getContext('2d');
// imgbeer2 = new Image;
// imgbeer2.src = 'beerliq2.png';
// for(var i=0; i<10; i++){
//   ctxbeer.drawImage(imgbeer2, 0, 225);
// }
