 /*Gemaakt door Oden Zondervan en Tyra van der zee En rick En Dimitry de Hoop */
 (() => {
  'use strict';

 

  // Haal alle elementen op waarop we aangepaste Bootstrap-validatiestijlen willen toepassen
  const form = document.getElementById("needs-validation");
  const btn = document.getElementById("draw-button");

  btn.addEventListener('click', () => {
    // Creating the event
    const event = new Event('submit', {
      'bubbles': true,
      'cancelable': true
    });

    form.dispatchEvent(event);
  })

 

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
})();

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
      img.src = 'IMAGES/baksteen-standaard.jpg';
    }
    else if (this.value == "8") {
       img.src = 'IMAGES/handvormsteen.JPG';
    }
    else if (this.value == "9") {
      img.src = 'IMAGES/gesmoordesteen.JPG';
    }
    else if (this.value == "10")
{
      img.src = 'IMAGES/gevelsteen.JPG';
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
  document.getElementById('deur-maten').style.display = 'block';
  document.getElementById('door-positions').style.display = 'block';
  if (doorPositions.length >= 2) {
    alert('Er kunnen maar 2 deuren maximaal in de muur');
    return;
  }

  // Creeer een nieuw input veld
  const doorPositionInput = document.createElement('input');
  doorPositionInput.type = 'text';
  doorPositionInput.id = 'deurpositie';
  doorPositionInput.className = 'form-select';
  doorPositionInput.placeholder = 'Deur positie vanaf Links (mm)';
  doorPositionsDiv.appendChild(doorPositionInput);
  doorPositionsDiv.lastChild.id = 'deurpositie2';
  doorPositionsDiv.firstChild.id = 'deurpositie';

  // voeg het nieuwe input veld toe een de deurpositieinputs array
  doorPositions.push(doorPositionInput);
});

//Ramen eventlistener
//addwindowButton.addEventListener('click', () => {
//  let clicks = 0;
 // clicks++;
 //   if (clicks = 1) {
 //   document.getElementById('ramen-formaten').style.display = 'block';
//    document.getElementById('window-positions').style.display = 'block';
 //   alert('1');
 //   }
 //   else if (clicks = 2) {
 //   document.getElementById('ramen-formaten2').style.display = 'block';
//    document.getElementById('window-positions2').style.display = 'block';
 //   alert('2');
//    }
   
//});
let clicks = 0;
function raamtoevoegen() {
  ++clicks;
    if (clicks == 1) {
    document.getElementById('ramen-formaten').style.display = 'block';
    document.getElementById('window-positions').style.display = 'block';
    }
    else if (clicks == 2) {
    document.getElementById('ramen-formaten2').style.display = 'block';
    document.getElementById('window-positions2').style.display = 'block';
    }
   
}
function saveCanvasAsPDF() {
  var canvas = document.getElementById('canvas');
  var imgData = canvas.toDataURL("image/png");
  var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
  var pdfWidth = pdf.internal.pageSize.getWidth();
  var pdfHeight = pdf.internal.pageSize.getHeight();
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save("muur.pdf");
}
function timeout() {
  setTimeout(() => {
    window.open("HTML/muur-kopen.html", 'blank');
  }, 45)
}
//hier stel je in waar de afbeelding kan worden opgehaald
const img = new Image();
img.src = 'IMAGES/baksteen-standaard.jpg';
const deur = new Image();
deur.src = 'IMAGES/deur.png';
const raam = new Image();
raam.src = 'IMAGES/raam.png';    
// Validate form inputs and draw wall
function tekenmuur() {
  
  // Get form input values
  const muurDx = parseInt(document.getElementById('wall-width').value);
  const muurDy = parseInt(document.getElementById('wall-height').value);
  document.getElementById('hoogte-muur').innerHTML = (muurDy / 1000) + "<br>" +'(M)';
  document.getElementById('lengte-muur').innerHTML = (muurDx / 1000) + '(M)';
  let steenDx = 0;
  let steenDy = 0;
  let steenDz = 0;
  const test = berekenformaat();

  steenDx = test[0];
  steenDy = test[1];
  steenDz = test[2];
  const voegDx = parseInt(document.getElementById('joint-horizontal').value);
  const voegDy = parseInt(document.getElementById('joint-vertical').value);
  //const openings = parseInt(document.getElementById('openings').value);
  //const koppenMaat = steenDz + voegDx;
  const lagenMaat = steenDy + voegDy;
  const doorWidth = parseInt(document.getElementById('door-width').value);
  const doorHeight = parseInt(document.getElementById('door-height').value);
  //eerste raam
  const windowWidth = parseInt(document.getElementById('window-width').value);
  const windowHeight = parseInt(document.getElementById('window-height').value);
  //2de raam
  const windowWidth2 = parseInt(document.getElementById('window-width2').value);
  const windowHeight2 = parseInt(document.getElementById('window-height2').value);
   // Get the selected pattern
   const patternSelect = document.getElementById('pattern-select');
  const pattern = patternSelect.value;

  // Validate form input values
  if (isNaN(muurDx) || muurDx <= 0 || isNaN(muurDy) || muurDy <= 0) {
     
    alert('Vul alle muur maten in');
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
                  
  if (pattern === 'halfsteens-om-en-om') {
    // Draw the wall design using the halfsteens pattern
    halfsteensomenom();
  } else if (pattern === 'tegelverband') {
    for (let ypos=5 ;ypos < muurDy;ypos += lagenMaat){ 
      let xpos = 5;
     
      for (let vulsteenx=0;  vulsteenx < maxstenen ; vulsteenx = vulsteenx + 1) {
        
                 ctx.drawImage(img, xpos , ypos , steenDx , steenDy);
                 xpos += SteenMetVoeg;    
      }
    }
  }
  else if (pattern === 'halfsteens') {
    halfsteens();
  }
  else {
    alert('Kies een patroon');
  }

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

    const maxStenenHoogte = Math.floor(  muurDy / SteenMetVoegHoogte );
    
    const Hoogtewaarde = maxStenenHoogte - doorhoogte ;
    const Hoogteberekening = Hoogtewaarde * SteenMetVoegHoogte;
    
    ctx.clearRect( doorPosition+5 - voegDx, Hoogteberekening +5, nieuwebreedte + voegDx, nieuwehoogte); // de +5 is voor de canvas
    ctx.drawImage(deur, doorPosition+5, Hoogteberekening +5, nieuwebreedte - voegDx, nieuwehoogte);
    

  }
  else {
    alert('Let op, De Deur Past niet');
  }

  
});
  
   // Get the window positions
   const raambreedte1 = document.getElementById('window-width').value;
   const raamhoogte1 = document.getElementById('window-height').value;
   let raamlinks1 = document.getElementById('window-left1').value;
   let raamtop1 = document.getElementById('window-hoogte1').value;
   const raambreedte2 = document.getElementById('window-width2').value;
   const raamhoogte2 = document.getElementById('window-height2').value;
   let raamlinks2 = document.getElementById('window-left2').value;
   let raamtop2 = document.getElementById('window-hoogte2').value;
   
    // Draw windows


  if (raamlinks1 > muurDx || raamlinks2 > muurDx) {
    alert('raam past niet in de breedte');
    return false;
  }

  if (raamtop1 > muurDy || raamtop2 > muurDy) {
    alert('raam past niet in de hoogte');
    return false;
  }
   //raam1 vanuit links
    const windowpositie = Math.floor(raamlinks1 / SteenMetVoeg) ; 
    const nieuweraampositie1 = (windowpositie * SteenMetVoeg) ;
    raamlinks1 = nieuweraampositie1;
    document.getElementById('window-left1').value = nieuweraampositie1;
    //raam2 vanuit links
    const windowpositie2 = Math.floor(raamlinks2 / SteenMetVoeg) ; 
    const nieuweraampositie2 = (windowpositie2 * SteenMetVoeg) ;
    raamlinks2 = nieuweraampositie2;
    document.getElementById('window-left2').value = nieuweraampositie2;


       //raam1 vanuit Top
       const windowtoppositie = Math.floor(raamtop1 / SteenMetVoegHoogte) ; 
       const nieuweraamtoppositie1 = (windowtoppositie * SteenMetVoegHoogte) ;
       raamtop1 = nieuweraamtoppositie1;
       document.getElementById('window-hoogte1').value = nieuweraamtoppositie1;

       //raam2 vanuit Top
        const windowtoppositie2 = Math.floor(raamtop2 / SteenMetVoegHoogte) ; 
       const nieuweraamtoppositie2 = (windowtoppositie2 * SteenMetVoegHoogte) ;
       raamtop2 = nieuweraamtoppositie2;
       document.getElementById('window-hoogte2').value = nieuweraamtoppositie2;

//raam1
if (raambreedte1 < muurDx && (raamhoogte1 < muurDy)) {
    if (windowWidth< SteenMetVoeg) { // checken of de breedte wel minimaal 1 steen en voeg is
      alert('Let op, Het eerste raam moet groter dan steen met voeg breedte');
      return false;
    }
    if (raamhoogte1< SteenMetVoegHoogte) { // checken of de hoogte wel minimaal 1 steen en voeg is
      alert('Let op, Het eerste raam moet groter dan steen met voeg in de hoogte');
      return false;
    }
    const windowbreedte = Math.floor( raambreedte1 / SteenMetVoeg ) ; // raam breedte delen op de steenmaat met voeg, zo weten we hoeveel stenen breed de deur is
    const nieuwewindowbreedte = (windowbreedte * SteenMetVoeg) ; // we bepalen aan de hand van bovenstaande uitkomst hoe breed het raam moet worden. 
    document.getElementById('window-width').value = nieuwewindowbreedte; // de waarde op de site aanpassen naar de waarde die we berekend en getekend hebben
    const windowhoogte = Math.floor( raamhoogte1 / SteenMetVoegHoogte ) ;
    const nieuwewindowhoogte = (windowhoogte * SteenMetVoegHoogte );
    document.getElementById('window-height').value=nieuwewindowhoogte;
    ctx.clearRect(raamlinks1 - voegDx + 5, raamtop1 + 5, nieuwewindowbreedte + voegDx, nieuwewindowhoogte); // de +5 is voor de canvas
    ctx.drawImage(raam, raamlinks1+5, raamtop1 + 5, nieuwewindowbreedte - voegDx, nieuwewindowhoogte - voegDx);
  
  }
  else {
    alert('Het eerste raam Past niet binnenin het canvas');
  }

  //raam 2
  if (raambreedte2 < muurDx && (raamhoogte2 < muurDy)) {
    if (windowWidth< SteenMetVoeg) { // checken of de breedte wel minimaal 1 steen en voeg is
      alert('Let op, Het tweede raam moet groter dan steen met voeg breedte');
      return false;
    }
    if (raamhoogte2< SteenMetVoegHoogte) { // checken of de hoogte wel minimaal 1 steen en voeg is
      alert('Let op, Het tweede raam moet groter dan steen met voeg in de hoogte');
      return false;
    }
    const windowbreedte2 = Math.floor( raambreedte2 / SteenMetVoeg ) ; // raam breedte delen op de steenmaat met voeg, zo weten we hoeveel stenen breed de deur is
    const nieuwewindowbreedte2 = (windowbreedte2 * SteenMetVoeg) ; // we bepalen aan de hand van bovenstaande uitkomst hoe breed het raam moet worden. 
    document.getElementById('window-width2').value = nieuwewindowbreedte2; // de waarde op de site aanpassen naar de waarde die we berekend en getekend hebben
    const windowhoogte2 = Math.floor( raamhoogte2 / SteenMetVoegHoogte ) ;
    const nieuwewindowhoogte2 = (windowhoogte2 * SteenMetVoegHoogte );
    document.getElementById('window-height2').value=nieuwewindowhoogte2;
    ctx.clearRect(raamlinks2 - voegDx + 5, raamtop2 + 5, nieuwewindowbreedte2 + voegDx, nieuwewindowhoogte2); // de +5 is voor de canvas
    ctx.drawImage(raam, raamlinks2 + 5, raamtop2 + 5, nieuwewindowbreedte2 - voegDx, nieuwewindowhoogte2 - voegDx);
   
  }
  else {
    alert('Het eerste raam Past niet binnenin het canvas');
  }

  
};
function halfsteensomenom() {
   // Get form input values
   const muurDx = parseInt(document.getElementById('wall-width').value);
  const muurDy = parseInt(document.getElementById('wall-height').value);
  const voegDx = parseInt(document.getElementById('joint-horizontal').value);
  const voegDy = parseInt(document.getElementById('joint-vertical').value);
  //const openings = parseInt(document.getElementById('openings').value);
  let steenDx = 0;
  let steenDy = 0;
  let steenDz = 0;
  const test = berekenformaat();

  steenDx = test[0];
  steenDy = test[1];
  steenDz = test[2];
  const koppenMaat = steenDz + voegDx;
  const lagenMaat = steenDy + voegDy;
  // Halfsteens-patroon
  
  const SteenMetVoeg = steenDx + voegDx; 
  const SteenMetVoegHoogte = steenDy + voegDy;
  const halvesteen = steenDx / 2;
  const HalveSteenMetVoeg = halvesteen + voegDx;
   // Clear canvas
   canvas.width = 1500;
  canvas.height = 1000;
  //Maximale stenen in de x coordinaat
  const maxStenenDx = Math.floor((muurDx + voegDx) / (steenDx + voegDx));
  //Maximale stenen in de y coordinaat
  const maxStenenDy = Math.floor((muurDy + voegDy) / (steenDy + voegDy));
//Exacte lengte van de muur
  let exacteLengteMuur = (maxStenenDx * steenDx) + ((maxStenenDx) * voegDx);
  //Exacte hoogte van de muur
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
                let xpos=5;
                // beginnen met een halve steen
                
                  ctx.drawImage(img, xpos , 5 + ypos , halvesteen , steenDy);
                  //positie word dus + de halve steen + de voeg
                  xpos = xpos + HalveSteenMetVoeg ;
                  //Omdat er een steen minder inkomt doordat er een nieuwe steen bij word getekent haal ik een hele steen eraf zodat er ruimte is voor de halve steen aan het begin
                  maxstenenVullen2 = maxstenen -1 ;
                //for (let xpos=0 ;xpos < muurDx;xpos += (2 * koppenMaat)){ 
                for (let vulsteenx=0;  vulsteenx < maxstenenVullen2 ; vulsteenx = vulsteenx + 1) {
                  
                       ctx.drawImage(img, xpos , 5 + ypos , steenDx , steenDy);
                       xpos += SteenMetVoeg;    
                    }
                    ctx.drawImage(img,  xpos  , 5 + ypos , halvesteen - voegDx, steenDy);
                    
                }

                else {
                    let xpos=5;
                    for (let vulsteenx=0;  vulsteenx < maxstenen ; vulsteenx = vulsteenx + 1) {
                     //Hier teken ik de rijen met alleen hele stenen
                     ctx.drawImage(img, xpos , 5 + ypos , steenDx , steenDy);
                     xpos += SteenMetVoeg;
                    }

                }
          
        
           } 
                
              

        
}

function halfsteens() {
 // Get form input values
 const muurDx = parseInt(document.getElementById('wall-width').value);
  const muurDy = parseInt(document.getElementById('wall-height').value);
  const voegDx = parseInt(document.getElementById('joint-horizontal').value);
  const voegDy = parseInt(document.getElementById('joint-vertical').value);
  let steenDx = 0;
  let steenDy = 0;
  let steenDz = 0;
  const test = berekenformaat();

  steenDx = test[0];
  steenDy = test[1];
  steenDz = test[2];

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

function berekenformaat() {
  let steenDx = 0;
  let steenDy = 0;
  let steenDz = 0;
   //Switch voor de selectbox
   const formatenselectbox = document.getElementById('formatenselectbox').value;
  switch (formatenselectbox) {
  case 'waalformaat':
      steenDx = 210;
      steenDy = 50;
      steenDz = 100;
      return [steenDx, steenDy, steenDz];
      break;
  case 'dikformaat':
      steenDx = 215;
      steenDy = 65;
      steenDz = 101;
      return [steenDx, steenDy, steenDz];
      break;
  case 'rijnformaat':
      steenDx = 180;
      steenDy = 41;
      steenDz = 87;
      return [steenDx, steenDy, steenDz];
      break;
  case 'vechtformaat':
      steenDx = 210;
      steenDy = 40;
      steenDz = 100;
      return [steenDx, steenDy, steenDz];
      break;
  case 'ysselformaat':
        steenDx = 160;
      steenDy = 41;
      steenDz = 78;
      return [steenDx, steenDy, steenDz];
      break;
  case 'kloosterformaat':
          steenDx = 280;
          steenDy = 80;
          steenDz = 130;
          return [steenDx, steenDy, steenDz];
          break;
    default:
      break;
  }
  
  
}