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
    steensoortenselectie.addEventListener('change', function handleChange(event)  {
      if (event.target.value === "handvormsteen" && "210 X 100 X 40") {
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

      //gesmoordesteen selectie
        steensoortenselectie.addEventListener('change', function handleChange(event) {
          if (event.target.value === "gesmoordesteen" && "210 X 100 X 50") {
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
            steensoortenselectie.addEventListener('change', function handleChange(event) {
              if (event.target.value === "gevelsteen" && "210 X 100 X 50") {
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
              steensoortenselectie.addEventListener('change', function handleChange(event) {
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
                  steensoortenselectie.addEventListener('change', function handleChange(event) {
                    if (event.target.value === "handvormsteen" && "210 X 100 X 50") {
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