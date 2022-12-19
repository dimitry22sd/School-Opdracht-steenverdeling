/*Gemaakt door Oden Zondervan en Tyra van der zee En rick geen idee En Dimitry de Hoop */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

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

// Als deze optie is geselecteert kies dan een van de volgende canvassen
const selectie = document.getElementById('select');
const steensoortenselectie = document.getElementById('steensoortenselect');
const sparingenselectie = document.getElementById('deuren-ramen-select');
//const gesmoordestenen = document.getElementsByClassName("gesmoordestenen");


// waalformaat zonder iets anders geselecteert canvas
selectie.addEventListener('change', function handleChange(event) {
  if (event.target.value === "210 X 100 X 50") {
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1103     
canvas.height = 423
       
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,100000);
      
          var steenDx = 210; var steenDy = 50; var steenDz = 100;  
      
          var voegDx = 10; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
img.onload = draw;
img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';

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


  //dikformaat canvas

   else if (event.target.value === "215 X 101 X 65") { 
      
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1115     
canvas.height = 453
       
      
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,20000);
          var steenDx = 215; var steenDy = 65; var steenDz = 101;  
      
          var voegDx = 10; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
img.onload = draw;
img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';

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


  //rijnformaat canvas
   else if (event.target.value === "180 X 87 X 41") {
      
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1160     
canvas.height = 412
       
      
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,20000);
          var steenDx = 180; var steenDy = 41; var steenDz = 87;  
      
          var voegDx = 10; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
img.onload = draw;
img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';

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


  //vechtformaat canvas
  else if (event.target.value === "210 X 100 X 40") {
      
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1100    
canvas.height = 408
       
      
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,20000);
          var steenDx = 210; var steenDy = 40; var steenDz = 100;  
      
          var voegDx = 10; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
      img.onload = draw;
      img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';
      
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


  //ysselformaat canvas

  else if (event.target.value === "160 X 78 X 41") {
      
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1060    
canvas.height = 410
      
       
      
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,20000);
          var steenDx = 160; var steenDy = 41; var steenDz = 78;  
      
          var voegDx = 10; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
img.onload = draw;
img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';

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


  //kloosterformaat canvas
  else if (event.target.value === "280 X 130 X 80") {
     
      
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1193     
canvas.height = 453
      
       
      
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,20000);
          var steenDx = 280; var steenDy = 80; var steenDz = 130;  
      
          var voegDx = 20; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
img.onload = draw;
img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';

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


//Als er niks is geselecteert laat dan de standaard muur zien
  else if (event.target.value === "") {
      
        const canvas = document.getElementById('canvas'); 
      canvas.width = 1100     
canvas.height = 420
      
       
      
        if (canvas.getContext) { 
      
          const ctx = canvas.getContext('2d'); 
      ctx.clearRect(0, 0, 14000,20000);
          var steenDx = 210; var steenDy = 50; var steenDz = 100;  
      
          var voegDx = 10; var voegDy = 10;        
      
          var muurDx = 3000;    var muurDy = 2000; 
      
          var koppenMaat = steenDz+ voegDx; 
      
          var lagenMaat = steenDy + voegDy;  
      
           
      
          for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
      
            for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
      
                ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
      const img = new Image();
img.onload = draw;
img.src = 'https://cdn.webshopapp.com/shops/35999/files/374294167/300x300x2/rebel-of-styles-ultraflex-brick-wf-rood.jpg';

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
     }
);
  //Als een steensoort is geselecteert
  //handvormsteen selectie
  steensoortenselectie.addEventListener('change', function handleChange(event) {
    if (event.target.value === "handvormsteen") {
          const canvas = document.getElementById('canvas'); 
        canvas.width = 1103     
  canvas.height = 423
         
          if (canvas.getContext) { 
        
            const ctx = canvas.getContext('2d'); 
        ctx.clearRect(0, 0, 14000,100000);
        
            var steenDx = 210; var steenDy = 50; var steenDz = 100;  
        
            var voegDx = 10; var voegDy = 10;        
        
            var muurDx = 3000;    var muurDy = 2000; 
        
            var koppenMaat = steenDz+ voegDx; 
        
            var lagenMaat = steenDy + voegDy;  
        
             
        
            for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
        
              for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
        
                  ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
        const img = new Image();
  img.onload = draw;
  img.src = 'https://www.joostdevree.nl/bouwkunde2/jpgb/baksteen_21_wasserstrich_www_wienerberger_nl.jpg';
  
  function draw() {
    const ctx = document.querySelector('canvas').getContext('2d');
    
    const pattern = ctx.createPattern(img, 'repeat');
    
    ctx.fillStyle = pattern;
    ctx.fillRect(10 + xpos , 10 + ypos , steenDx , steenDy);
  }
              } 
        
            } 
        
          } 
    }});

    //Als een handvormsteen en een andere waarde is geselecteert werkt nog niet

      //gesmoordesteen selectie
          steensoortenselectie.addEventListener('change', function handleChange(event) {
            if (event.target.value === "gesmoordesteen") {
                  const canvas = document.getElementById('canvas'); 
                canvas.width = 1103     
          canvas.height = 423
                 
                  if (canvas.getContext) { 
                
                    const ctx = canvas.getContext('2d'); 
                ctx.clearRect(0, 0, 14000,100000);
                
                    var steenDx = 210; var steenDy = 50; var steenDz = 100;  
                
                    var voegDx = 10; var voegDy = 10;        
                
                    var muurDx = 3000;    var muurDy = 2000; 
                
                    var koppenMaat = steenDz+ voegDx; 
                
                    var lagenMaat = steenDy + voegDy;  
                
                     
                
                    for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
                
                      for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
                
                          ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
                const img = new Image();
          img.onload = draw;
          img.src = 'https://josephbricks.com/thumbnail/product-list/8233/eden.jpg?clear=&cssClass=&filter_product_color=&filter_product_dimension=&filter_product_sand_faced=&filter_product_structure=&filter_search=&fullWidth=false&itemsPerPage=20&page=1&sortBy=title&sortingDirection=asc&strip=';
          
          function draw() {
            const ctx = document.querySelector('canvas').getContext('2d');
            
            const pattern = ctx.createPattern(img, 'repeat');
            
            ctx.fillStyle = pattern;
            ctx.fillRect(10 + xpos , 10 + ypos , steenDx , steenDy);
          }
                      } 
                
                    } 
                
                  } 
            }});

            //gevelsteen selectie
              steensoortenselectie.addEventListener('change', function handleChange(event)  {
                if (event.target.value === "gevelsteen") {
                      const canvas = document.getElementById('canvas'); 
                    canvas.width = 1103     
              canvas.height = 423
                     
                      if (canvas.getContext) { 
                    
                        const ctx = canvas.getContext('2d'); 
                    ctx.clearRect(0, 0, 14000,100000);
                    
                        var steenDx = 210; var steenDy = 50; var steenDz = 100;  
                    
                        var voegDx = 10; var voegDy = 10;        
                    
                        var muurDx = 3000;    var muurDy = 2000; 
                    
                        var koppenMaat = steenDz+ voegDx; 
                    
                        var lagenMaat = steenDy + voegDy;  
                    
                         
                    
                        for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
                    
                          for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
                    
                              ctx.strokeRect(10 + xpos , 10 + ypos , steenDx , steenDy ); 
                    const img = new Image();
              img.onload = draw;
              img.src = 'https://www.wienerberger.be/Gevel/collecties/jcr:content/root/teaserbox_674062566/smallteaserbox/image.imgTransformer/crop_2to1/lg-5/1664375116826/BE_MKT_PHO_PSH_FAC_TEX_AMFORA_DUNO_BEIGE_2022.jpg';
              
              function draw() {
                const ctx = document.querySelector('canvas').getContext('2d');
                
                const pattern = ctx.createPattern(img, 'repeat');
                
                ctx.fillStyle = pattern;
                ctx.fillRect(10 + xpos , 10 + ypos , steenDx , steenDy);
              }
                          } 
                    
                        } 
                    
                      } 
                }});
                    //Deuren canvas
                    
                    //gesmoordesteen selectie met 1 deur erin

                    