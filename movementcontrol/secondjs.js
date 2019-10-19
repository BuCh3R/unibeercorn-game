// global variables

var gameHasBegun = false;
function onclickBegin(){
  if(!gameHasBegun){
    gameHasBegun = true;
    createBombLoop('canvas3');
    beginBeer();
    backgroundScroll();
    };
  };
  function disappear(){
    document.getElementById('gameStartButton').style.display="none";
  }

  // canvas variables //
  var canvas = document.querySelector('#canvas2');
  var context = canvas.getContext('2d');
  var canvasult = document.querySelector('#ultcanvas');
  var contextult = canvasult.getContext('2d');
  var ctxbeer = document.getElementById('beercanvas').getContext('2d');
  var imgbeer2 = new Image; 
  imgbeer2.src = 'beerliq2.png';
  let beerlvl = 0;
  let xBeer = 0;
  let yBeer = 225;
  let lives = 3;
  var hero = {xPos: 200, yPos: 820};
  let score = 0;
  let ifult = false;
  var audioBoom = new Audio('aw.mp3');
  var audioBeer = new Audio('wuhu.mp3');
  var audioUlt = new Audio('ult.mp3');
  const imgdead = new Image();
  imgdead.src = 'boom.png';

  const imgone = new Image();
  imgone.src = 'unicornchar.png';
  imgone.onload = () => {
    context.drawImage(imgone, hero.xPos, hero.yPos, 50 , 50);
    imgone.onload = null;
  };
  const imgult = new Image();
  imgult.src = 'immune.png';

  // character // char move controls //
  function move(e){
    if(lives<0){
      return;
    }


  if(e.keyCode==39 && gameHasBegun){
    if(hero.xPos ==400){

    }else{
      hero.xPos+=40;
    }
    
  }
  if(e.keyCode==37 && gameHasBegun) {
    if(hero.xPos ==0){

    }else{
      hero.xPos-=40;
    }
    
  }
  if(e.keyCode==32 && beerlvl==10){
    ifult = true;
    audioUlt.play();
    drawImmune();
    beerlvl -= 10;
    yBeer += 250;
    document.getElementById('fullbeer').style.display="none";
    setTimeout(function(){ifult = false; drawImmune();}, 3000);
    ctxbeer.clearRect(0,0, ctxbeer.canvas.width, ctxbeer.canvas.height);
  }

  function drawImmune(){
    contextult.clearRect(0,0, contextult.canvas.width, contextult.canvas.height);
    if(ifult === true){
      contextult.drawImage(imgult, hero.xPos, hero.yPos, 50, 50);
    }
  }

  ///////////// move up and down (removed) ///////////////////

  //  if (e.keyCode == 38) {
  //   yPos-=8;
  //  }
  //  if (e.keyCode == 40){
  //   yPos+=8;
  //  }
    
      
  

  // draw new character when moving //
    canvas.width=canvas.width;
    context.drawImage(imgone, hero.xPos, hero.yPos, 50, 50);
    drawImmune();
  }

    document.onkeydown = move;
  


  // dangerous drops // do not get hit by them //
  var bombs=[];
  var initialBombNumber = 1;

  setInterval(function(){
    var b = {x: 0, y: 0, speed: Math.random()*2+1};
    newRandomBombPos(b);
    bombs.push(b);
  }, 5000);


  function newRandomBombPos(bomb){
    bomb.x = Math.floor(Math.random()*400);
    bomb.y = Math.floor(Math.random()*-900);
  }
  function updateBombPos(bomb, img, ctx){
    bomb.y += bomb.speed;
    if (bomb.y >900) {
      newRandomBombPos(bomb);  
    }
    if(lives<0){
      return;
    }
    ctx.drawImage(img, bomb.x, Math.floor(bomb.y));
  }
  function checkDeath(bomb, hero, img, ctx){
    var xny = 
      (bomb.y>=hero.yPos-25 && bomb.y<=hero.yPos+25) &&
      (bomb.x>=hero.xPos-25 && bomb.x<=hero.xPos+25);        
    if(xny){
      // alert("Game Over"); // changed to lose a life //
      
      newRandomBombPos(bomb);

      if(ifult===true){

      }else{
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        console.log("dead");
        ctx.drawImage(imgdead, hero.xPos-25, hero.yPos-8, 100 , 65);
        lives -=1;
        if(lives>=0){
          audioBoom.play();
        }
        

      }  
      
      if(lives==2){
        document.getElementById('life3').style.display="none";
      }else if(lives==1){
        document.getElementById('life2').style.display="none";
      }else if(lives==0){
        document.getElementById('life1').style.display="none";
      };
      // alert(lives);
      if(lives<0){
        document.getElementById('scoreAmount').value = score;
        document.getElementById('submitForm').style.display="block";
        document.getElementById('replayId').style.display="block";  
        return true;
      }
    }
    return false;
  }

  function createBombLoop (canvasid){
      var
        img = new Image,
        ctx = document.getElementById(canvasid).getContext('2d');
      
        img.src = 'shoot.png';
        img.addEventListener('load', function () {
          bombs=[];
          for(var i=0; i<initialBombNumber; i++){
            bombs[i] = {x: 0, y: 0, speed: Math.random()*2+1};
          };
          for(var i=0; i<bombs.length; i++){
            newRandomBombPos(bombs[i]);
          }
          var interval = setInterval(function() {
            //start pos//
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            for(var i=0; i<bombs.length; i++){
              updateBombPos(bombs[i], img, ctx);
            }
          
            //game over
            for(var i=0; i<bombs.length; i++){
              var isDead = checkDeath(bombs[i], hero, img, context);
              if (isDead){
                clearInterval(interval);
              }
            }
            
          }, 1);
        });
  }



  function beginBeer() {
    
    var
      img = new Image,
      ctx = document.getElementById('canvas5').getContext('2d');
      img.src = 'energy.png';
      img.addEventListener('load', function () {

      var interval = setInterval(function() {
        var  y = Math.floor(Math.random()*-500), x = Math.floor(Math.random()*400);
        
        return function () {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          if(lives<0){
            return;
          }
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
            audioBeer.play();
            // fill up beer'o-meter
            if(beerlvl<=9 && beerlvl>=0){
              ctxbeer.drawImage(imgbeer2, xBeer, yBeer);
              beerlvl++;
              xBeer += 0;
              yBeer -= 25;
            }
                
            
            // beer ultimate power ready!
            if(beerlvl==10){
              document.getElementById('fullbeer').style.display="block";
            };
            document.getElementById('currentscore').value = score;

          }
        };
      }(), 1);
    }, false);
  };

