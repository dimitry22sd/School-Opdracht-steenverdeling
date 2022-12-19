function draw() { 

      const canvas = document.getElementById('canvas'); 
    
     
    
      if (canvas.getContext) { 
    
        const ctx = canvas.getContext('2d'); 
    
        var steenDx = 210; var steenDy = 50; var steenDz = 100;  
    
        var voegDx = 5; var voegDy = 0;        
    
        var muurDx = 3000;    var muurDy = 2000; 
    
        var koppenMaat = steenDz+ voegDx; 
    
        var lagenMaat = steenDy + voegDy; 
    
         
    
        for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
    
          for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
    
              ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
    const img = new Image();
img.onload = draw;
img.src = 'https://bgdd.nl/media/1101/bgdd-bocksmeulen-19jpg-klein.jpg?center=0.3875,0.48166666666666669&mode=crop&width=800&height=600&rnd=132447225640000000';

function draw() {
const ctx = document.querySelector('canvas').getContext('2d');

const pattern = ctx.createPattern(img, 'repeat');

ctx.fillStyle = pattern;
ctx.fillRect(10 + xpos , 10 + ypos , steenDx , steenDy);
}
          } 
    
        } 
    
      } 

    } 
 
     
    
    draw(); 