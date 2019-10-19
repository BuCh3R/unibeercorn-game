function backgroundLoadImg(){
    var backgroundIMG = new Image();
    backgroundIMG.src = "starspurple.png";
    backgroundIMG.onload = () => {
        document.getElementById('canvas1').getContext('2d').drawImage(backgroundIMG, 0, 0);
        document.getElementById('canvas1').getContext('2d').drawImage(backgroundIMG, 0, 0);
    }
}

function backgroundScroll() { 
    var can = document.getElementById('canvas1'); 
    var ctx = can.getContext('2d'); 
    
    can.width = 450; 
    can.height = 900; 
    
    var img = new Image(); 
      
    
    img.src = "starspurple.png";
    var imgHeight = 0; 
  

    var scrollSpeed = 1; 
  

    function loop() { 
        ctx.drawImage(img, 0, imgHeight); 
        ctx.drawImage(img, 0, imgHeight - can.height); 
  
        imgHeight += scrollSpeed; 
        if(lives<0){
            return;
          }
        if (imgHeight == can.height) 
            imgHeight = 0; 
            window.requestAnimationFrame(loop); 
    }        
      
    loop();
       
     
  
} 