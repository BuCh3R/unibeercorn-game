window.onload = function() { 
    var can = document.getElementById('canvas1'); 
    var ctx = can.getContext('2d'); 
    
    can.width = 450; 
    can.height = 900; 
    
    var img = new Image(); 
      
    
    img.src = "starspurple.png";
    var imgHeight = 0; 
  

    var scrollSpeed = 1; 
  

    function loop() 
    { 

        ctx.drawImage(img, 0, imgHeight); 
  

        ctx.drawImage(img, 0, imgHeight - can.height); 
  

        imgHeight += scrollSpeed; 
  

        if (imgHeight == can.height) 
            imgHeight = 0; 

        window.requestAnimationFrame(loop); 
    } 
  

    loop(); 
  
} 