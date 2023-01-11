/*Gemaakt door Oden Zondervan en Tyra van der zee En rick En Dimitry de Hoop */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById('canvas').style.display = true;

    } else {
      x.className = "topnav";
    }
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  //Eventlistener voor welke afbeelding we moeten gebruiken
  window.onload = function () {
    var selectBox = document.getElementById("selectBox");
    selectBox.addEventListener('change', changeFunc);
    function changeFunc() {
       if (this.value == "7") {
        img.src = '../IMAGES/baksteen-standaard.jpg';
      }
      else if (this.value == "8") {
         img.src = '../IMAGES/handvormsteen.JPG';
      }
      else if (this.value == "9") {
        img.src = '../IMAGES/gesmoordesteen.JPG';
      }
      else if (this.value == "10")
  {
        img.src = '../IMAGES/gevelsteen.JPG';
      }
    }
  };
  const drawButton = document.getElementById('draw-button');
  const doorPositionsDiv = document.getElementById('door-positions');
  const addDoorButton = document.getElementById('add-door-button');
  const windowPositionsDiv = document.getElementById('window-positions');
  const addwindowButton = document.getElementById('add-window-button');
  // Create an array to store the door positions and window
  let doorPositions = [];
  let windowPositions = [];
  
  //Deur toevoegen event listener luistert dat wanneer er op de knop word gedrukt er een nieuwe input veld bij komt
  addDoorButton.addEventListener('click', () => {
    // Check if there are already 2 doors
    if (doorPositions.length >= 2) {
      alert('Er kunnen maar 2 deuren maximaal in de muur');
      return;
    }
  
    // Creeer een nieuw input veld
    const doorPositionInput = document.createElement('input');
    doorPositionInput.type = 'text';
    doorPositionInput.id = 'deurpositie';
    
    doorPositionInput.placeholder = 'Deur positie (mm)';
    doorPositionsDiv.appendChild(doorPositionInput);
    doorPositionsDiv.lastChild.id = 'deurpositie2';
    doorPositionsDiv.firstChild.id = 'deurpositie';
  
    // voeg het nieuwe input veld toe een de deurpositieinputs array
    doorPositions.push(doorPositionInput);
  });
  
  //Ramen eventlistener
  addwindowButton.addEventListener('click', () => {
    // Check if there are already 2 doors
    if (windowPositions.length >= 2) {
      alert('Er kunnen maar 2 ramen maximaal in de muur');
      return;
    }
  
    // Creeer een nieuw input veld
    const windowPositionInput = document.createElement('input');
    windowPositionInput.type = 'text';
    windowPositionInput.id = 'windowpositie';
  
    windowPositionInput.placeholder = 'Window positie (mm)';
    windowPositionsDiv.appendChild(windowPositionInput);
    windowPositionsDiv.lastChild.id = 'raampositie2';
    windowPositionsDiv.firstChild.id = 'raampositie';
  
    
  
    // voeg het nieuwe input veld toe een de windowpositioninputs array
    windowPositions.push(windowPositionInput);
  });
  //hier stel je in waar de afbeelding kan worden opgehaald
  const img = new Image();
  img.src = '../IMAGES/baksteen-standaard.jpg';
  const deur = new Image();
  deur.src = '../IMAGES/deur.png';
  const raam = new Image();
  raam.src = '../IMAGES/raam.png';    
  // Validate form inputs and draw wall
  function tekenmuur() {
    // Get form input values
    const muurDx = parseInt(document.getElementById('wall-width').value);
    const muurDy = parseInt(document.getElementById('wall-height').value);
    const steenDx = parseInt(document.getElementById('brick-width').value);
    const steenDy = parseInt(document.getElementById('brick-height').value);
    const steenDz = parseInt(document.getElementById('brick-depth').value);
    const voegDx = parseInt(document.getElementById('joint-horizontal').value);
    const voegDy = parseInt(document.getElementById('joint-vertical').value);
    //const openings = parseInt(document.getElementById('openings').value);
    //const koppenMaat = steenDz + voegDx;
    const lagenMaat = steenDy + voegDy;
    const doorWidth = parseInt(document.getElementById('door-width').value);
    const doorHeight = parseInt(document.getElementById('door-height').value);
    const doorZ = parseInt(document.getElementById('brick-depth').value);
    const windowWidth = parseInt(document.getElementById('window-width').value);
    const windowHeight = parseInt(document.getElementById('window-height').value);
     // Get the selected pattern
     const patternSelect = document.getElementById('pattern-select');
    const pattern = patternSelect.value;
  
    // Validate form input values
    if (isNaN(muurDx) || muurDx <= 0 || isNaN(muurDy) || muurDy <= 0) {
      alert('Vul alle muur maten in');
      return;
    }
    if (isNaN(steenDy) || steenDy <= 0 || isNaN(steenDy) || steenDy <= 0 || isNaN(steenDz) || steenDz <= 0) {
      alert('Vul alle steen formaten in');
      return;
    }
    if (isNaN(voegDx) || voegDx <= 0 || isNaN(voegDy) || voegDy <= 0) {
      alert('Vul alle voeg maten in!');
      return;
    }
    // Clear canvas
    canvas.width = 1500;
    canvas.height = 1000;
    const maxStenenDx = Math.floor((muurDx + voegDx) / (steenDx + voegDx));
    const maxStenenDy = Math.floor((muurDy + voegDy) / (steenDy + voegDy));
  
    let exacteLengteMuur = (maxStenenDx * steenDx) + ((maxStenenDx) * voegDx);
    let exacteHoogteMuur = (maxStenenDy * steenDy) + ((maxStenenDy) * voegDy);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Set canvas size
    ctx.scale(canvas.width/exacteLengteMuur, canvas.height/exacteHoogteMuur);
  
  
     const SteenMetVoeg = steenDx + voegDx;
     const SteenMetVoegHoogte = steenDy + voegDy;
     
     const maxstenen = Math.floor( muurDx / SteenMetVoeg ) ;
                    
    if (pattern === 'halfsteens') {
      // Draw the wall design using the halfsteens pattern
      halfsteens();
    } else if (pattern === 'tegelverband') {
      for (let ypos=5 ;ypos < muurDy;ypos += lagenMaat){ 
        let xpos = 5;
       
        for (let vulsteenx=0;  vulsteenx < maxstenen ; vulsteenx = vulsteenx + 1) {
          
                   ctx.drawImage(img, xpos , ypos , steenDx , steenDy);
                   xpos += SteenMetVoeg;    
        }
      }
    }
    else {
      alert('Kies een patroon');
    }
  
     // Get the window positions
     const windowPositionsValues = windowPositions.map(input => parseInt(input.value));
      // Draw windows
  windowPositionsValues.forEach((windowPosition, index) => {
  //    const raambreedte = Math.floor( raamWidth / SteenMetVoeg ) ;
  //    const nieuwebreedte = (raambreedte * SteenMetVoeg) ;
  //    document.getElementById('raam-width').value = nieuwebreedte;
    
  //    const doorhoogte = Math.floor( doorHeight / SteenMetVoegHoogte ) ;
  //    const nieuwehoogte = (raamhoogte * SteenMetVoegHoogte );
  //    document.getElementById('raam-height').value=nieuwehoogte;
  
    if (windowPosition > muurDx) {
      alert('raam past niet');
      return false;
    }
    if (windowPositionsValues[0] > 0) {
      const windowpositie = Math.floor(windowPosition / SteenMetVoeg) ; 
      const nieuweraampositie1 = (windowpositie * SteenMetVoeg) ;
      windowPosition = nieuweraampositie1;
    }
    if (windowPositionsValues[1] > 0) {
      const windowpositie2 = Math.floor(windowPosition / SteenMetVoeg) ; 
      const nieuweraampositie2 = (windowpositie2 * SteenMetVoeg) ;
      windowPosition = nieuweraampositie2;
    }
  
    switch (index){
    case 0:
      
      document.getElementById('raampositie').value = windowPosition;
      break;
    case 1:
      
      document.getElementById('raampositie2').value = windowPosition;
      break;
  }
  
  if (windowWidth < muurDx && (windowHeight < muurDy)) {
      if (windowWidth< SteenMetVoeg) { // checken of de breedte wel minimaal 1 steen en voeg is
        alert('Let op, Het raam moet groter dan steen met voeg breedte');
        return false;
      }
      if (windowHeight< SteenMetVoegHoogte) { // checken of de hoogte wel minimaal 1 steen en voeg is
        alert('Let op, Het raam moet groter dan steen met voeg in de hoogte');
        return false;
      }
      const windowbreedte = Math.floor( windowWidth / SteenMetVoeg ) ; // deur breedte delen op de steenmaat met voeg, zo weten we hoeveel stenen breed de deur is
      const nieuwewindowbreedte = (windowbreedte * SteenMetVoeg) ; // we bepalen aan de hand van bovenstaande uitkomst hoe breed de deur moet worden. 
      document.getElementById('window-width').value = nieuwewindowbreedte; // de waarde op de site aanpassen naar de waarde die we berekend en getekend hebben
    
      const windowhoogte = Math.floor( windowHeight / SteenMetVoegHoogte ) ;
      const nieuwewindowhoogte = (windowhoogte * SteenMetVoegHoogte );
      document.getElementById('window-height').value=nieuwewindowhoogte;
      ctx.clearRect(windowPosition +5, 60, nieuwewindowbreedte -voegDx, nieuwewindowhoogte); // de +5 is voor de canvas
      ctx.drawImage(raam, windowPosition+5, 60, nieuwewindowbreedte - voegDx, nieuwewindowhoogte);
    }
    else {
      alert('Het raan Past niet binnenin het canvas');
    }
  
    
  });
  // Get the door positions
  const doorPositionsValues = doorPositions.map(input => parseInt(input.value));
  
  // Draw doors
  doorPositionsValues.forEach((doorPosition, index) => {
    if (doorPosition > muurDx) {
      alert('Let op, Deur positie mag niet groter dan de muur breedte!');
      return false;
    } 
  
  
    if (doorPositionsValues[0] > 0) {
      const deurpostitie = Math.floor( doorPosition / SteenMetVoeg ) ;
      const nieuwepositie = (deurpostitie * SteenMetVoeg) ; 
      doorPosition = nieuwepositie; 
    //  
    }
    if (doorPositionsValues[1] > 0) {
      const deurpostitie2 = Math.floor( doorPosition / SteenMetVoeg ) ;
      const nieuwepositie2 = (deurpostitie2 * SteenMetVoeg) ; 
      doorPosition = nieuwepositie2; 
     
    }
  
  
    switch (index){
    case 0:
      
      document.getElementById('deurpositie').value = doorPosition;
      break;
    case 1:
      
      document.getElementById('deurpositie2').value = doorPosition;
      break;
  }
    //eerste check past de deur in de opgegeven muur hoogte en breedte
    if (doorWidth < muurDx && (doorHeight < muurDy)) {
      if (doorWidth< SteenMetVoeg) { // checken of de breedte wel minimaal 1 steen en voeg is
        alert('Let op, deur moet groter dan steen met voeg breedte');
        return false;
      }
      if (doorHeight< SteenMetVoegHoogte) { // checken of de hoogte wel minimaal 1 steen en voeg is
        alert('Let op, deur moet groter dan steen met voeg in de hoogte');
        return false;
      }
      const doorbreedte = Math.floor( doorWidth / SteenMetVoeg ) ; // deur breedte delen op de steenmaat met voeg, zo weten we hoeveel stenen breed de deur is
      const nieuwebreedte = (doorbreedte * SteenMetVoeg) ; // we bepalen aan de hand van bovenstaande uitkomst hoe breed de deur moet worden. 
      document.getElementById('door-width').value = nieuwebreedte; // de waarde op de site aanpassen naar de waarde die we berekend en getekend hebben
    
      const doorhoogte = Math.floor( doorHeight / SteenMetVoegHoogte ) ;
      const nieuwehoogte = (doorhoogte * SteenMetVoegHoogte );
      document.getElementById('door-height').value=nieuwehoogte;
  
      ctx.clearRect(doorPosition +5, muurDy - nieuwehoogte+5, nieuwebreedte -voegDx, nieuwehoogte); // de +5 is voor de canvas
      ctx.drawImage(deur, doorPosition+5, muurDy - nieuwehoogte+5, nieuwebreedte - voegDx, nieuwehoogte);
    }
    else {
      alert('Let op, De Deur Past niet');
    }
  
    
  });
    }
  function halfsteens() {
     // Get form input values
     const muurDx = parseInt(document.getElementById('wall-width').value);
    const muurDy = parseInt(document.getElementById('wall-height').value);
    const steenDx = parseInt(document.getElementById('brick-width').value);
    const steenDy = parseInt(document.getElementById('brick-height').value);
    const steenDz = parseInt(document.getElementById('brick-depth').value);
    const voegDx = parseInt(document.getElementById('joint-horizontal').value);
    const voegDy = parseInt(document.getElementById('joint-vertical').value);
    //const openings = parseInt(document.getElementById('openings').value);
    const koppenMaat = steenDz + voegDx;
    const lagenMaat = steenDy + voegDy;
    // Halfsteens-patroon
    
    const SteenMetVoeg = steenDx + voegDx; 
    const SteenMetVoegHoogte = steenDy + voegDy;
    const halvesteen = steenDx / 2;
     // Clear canvas
     canvas.width = 1500;
    canvas.height = 1000;
    const maxStenenDx = Math.floor((muurDx + voegDx) / (steenDx + voegDx));
    const maxStenenDy = Math.floor((muurDy + voegDy) / (steenDy + voegDy));
  
    let exacteLengteMuur = (maxStenenDx * steenDx) + ((maxStenenDx) * voegDx);
    let exacteHoogteMuur = (maxStenenDy * steenDy) + ((maxStenenDy) * voegDy);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Set canvas size
    ctx.scale(canvas.width/exacteLengteMuur, canvas.height/exacteHoogteMuur);
  
          
              var laag=0;
              // bereken hoeveel stenen met voeg passen in de muur
              //Dit maakt er een heel nummer van zonder komma
             const maxstenen = Math.floor( muurDx / SteenMetVoeg ) ;
             for (let ypos=0 ;ypos < muurDy;ypos += lagenMaat){ 
                  laag = laag + 1;
                  if (laag % 2 == 0){
                  let xpos=0;
                  // beginnen met een halve steen
                  
                    ctx.drawImage(img, 5 + xpos , 5 + ypos , halvesteen , steenDy);
                    //positie word dus + de halve steen + de voeg
                    xpos = xpos + halvesteen + voegDx ;
                    maxstenenVullen2 = maxstenen -1 ;
                  //for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
                  for (let vulsteenx=0;  vulsteenx < maxstenenVullen2 ; vulsteenx = vulsteenx + 1) {
                    
                         ctx.drawImage(img, 5 + xpos , 5 + ypos , steenDx , steenDy);
                         xpos += SteenMetVoeg;    
                      }
                  }
  
                  else {
                      let xpos=5;
                      //de laatste steen verwijderen, die moet een halve worden
                      maxstenenVullen = maxstenen -1 ;
                      for (let vulsteenx=0;  vulsteenx < maxstenenVullen ; vulsteenx = vulsteenx + 1) {
                       
                       ctx.drawImage(img, xpos , 5 + ypos , steenDx , steenDy);
                       xpos += SteenMetVoeg;
                      }
                      //afsluiten met een halve steen minus extra voeg
                      xpos = xpos - voegDx ;
                    
                      ctx.drawImage(img, voegDx + xpos , 5 + ypos , halvesteen , steenDy);
  
                  }
            
          
             } 
                  
                
  
          
  }