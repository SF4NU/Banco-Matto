const cambiaDado = document.getElementById('dado');
let numeroCasualeMexCroupier = Math.floor(Math.random() * 20);

document.querySelector('.js-div-testo-dado').textContent = `${frasiBenvenuto[numeroCasualeMexCroupier]}`

let messaggiHTML = '';
function generaNumeroBanchiere() {  // funzione per generare il numero del banchiere
  let numeroRandom = Math.floor(Math.random() * 6) + 1; //approssima il numero all'intero più basso
  document.getElementById('dado').src = dadi[numeroRandom - 1].img; //sceglie l'immagine del dado corrispondente dall'array di immagini
  return numeroRandom;
}

let sommaGiocatore1 = 100; //saldo del giocatore 1 nel caso dovessimo aggiungere un giocatore 2
const numeroGiocatore1 = document.getElementById('numeroGiocatore'); // usa id per identificare il numero su cui punta il giocatore che poi parte da 0 nella variabile "numero"
const getSomma = document.getElementById('puntataGiocatore'); // identifica la somma su cui scommette il giocatore
const saldoTotale = document.getElementById('saldoTotale');
const conferma = document.getElementById('pulsanteConferma');
const half = document.getElementById('half');
const threeQuarters = document.getElementById('threeQuarters');
const allIn = document.getElementById('allIn');

let numero = 0;
let saldoValore = 1000;
function aggiornaImmagineDado(param) { //cambia il codice html della pagina 
  messaggiHTML = `
    <div class="messaggioCMEX">
      <p class="cmex" id="messaggioCroupier">
      Scommetti su: 
      </p>
    </div>
    <div>
      <img class="dado-fantasma" src="${dadi[param].img}">
    </div>`;
    document.querySelector('.js-div-testo-dado').innerHTML = messaggiHTML;
}

function cambiaTestoTavolo(param) { //cambia il codice html della pagina 
  messaggiHTML = `
    <div class="messaggioCMEX">
      <p class="cmex" id="messaggioCroupier">
      ${param}
      </p>
    </div>`;
    document.querySelector('.js-div-testo-dado').innerHTML = messaggiHTML;
}

document.getElementById('piu').addEventListener('click', function() {  //funzione per aumentare il numero su cui si scommette                                
  // può arrivare al massimo al 6
  if (numero === 0) {
    numero++;
    aggiornaImmagineDado(numero - 1)
    numeroGiocatore1.textContent = numero;
    return numero;
  } else if (numero > 0 && numero < 6) {
    aggiornaImmagineDado(numero)
    numero++;
    numeroGiocatore1.textContent = numero;
    return numero;
  } 
}); //da completare la funzione

document.getElementById('meno').addEventListener('click', function() { // funzione per diminuire il numero
  if (numero > 0 && numero <= 6) {
    numero--;
    aggiornaImmagineDado(numero - 1)
    return numeroGiocatore1.textContent = numero;
  } 
}); //da completare la funzione

let variabileSomma = 0;

half.addEventListener('click', function() {
  let controllaSaldoHalf = saldoValore / 2;
  let controllaSaldoFinale = controllaSaldoHalf + saldoValore;
  let controllaVariabileSomma = variabileSomma + controllaSaldoHalf;
  if (variabileSomma >= 0 && variabileSomma < saldoValore) {
    if (controllaSaldoFinale > saldoValore && controllaVariabileSomma <= saldoValore ) {
      variabileSomma += Math.floor(Math.round(saldoValore / 2));
      cambiaTestoTavolo("Così tanto?");
      return getSomma.textContent = `${variabileSomma}$`;
    }
  }
})

threeQuarters.addEventListener('click', function() {
  let controllaSaldoThreeQuarters = saldoValore * 3/4;
  let controllaSaldoFinale = controllaSaldoThreeQuarters + saldoValore;
  let controllaVariabileSomma = variabileSomma + controllaSaldoThreeQuarters;
  if (variabileSomma >= 0 && variabileSomma < saldoValore) {
    if (controllaSaldoFinale > saldoValore && controllaVariabileSomma <= saldoValore ) {
      variabileSomma += Math.floor(Math.round(saldoValore * 3/4));
      cambiaTestoTavolo("Perderai sicuramente");
      return getSomma.textContent = `${variabileSomma}$`;
    }
  }
})

allIn.addEventListener('click', function() {
    variabileSomma = Math.floor(Math.round(saldoValore));
    cambiaTestoTavolo("ATTENZIONE! QUALCUNO HA LE PALLE!");
   return getSomma.textContent = `${variabileSomma}$`;
  
})

let intervalloPuntata;

document.getElementById('puntataPiu').addEventListener('mousedown',incrementaPuntata);
document.getElementById('puntataPiu').addEventListener('mouseup',
() => {
  fermaPuntata();
  frasiCroupier();
} );
document.getElementById('puntataPiu').addEventListener('mouseleave', 
() => {
  fermaPuntata();
  frasiCroupier();
});
document.getElementById('puntataMeno').addEventListener('mousedown', 
() => {
  diminuisciPuntata();
  frasiCroupier();
})
document.getElementById('puntataMeno').addEventListener('mouseup', fermaPuntata);
document.getElementById('puntataMeno').addEventListener('mouseleave', 
() => {
  fermaPuntata();
  frasiCroupier();
});

function frasiCroupier() {
  if (variabileSomma >= 849) {
    cambiaTestoTavolo("Chi ti credi di essere?");
  } else if (variabileSomma >= 649) {
    cambiaTestoTavolo("Non puoi competere con me pivello!")
  } else if (variabileSomma >= 349) {
    cambiaTestoTavolo("Mia nonna farebbe di meglio!");
  } else if (variabileSomma >= 249) {
    cambiaTestoTavolo("Pensavo valessi di più!");
  } else if (variabileSomma >= 149) {
    cambiaTestoTavolo("Capisco, sei un principiante!")
  } else if (variabileSomma >= 99) {
    cambiaTestoTavolo("Mi sembra decisamente poco")
  } else if (variabileSomma >= 49) {
    cambiaTestoTavolo("Così poco???")
  } else if (variabileSomma >= 10) {
    cambiaTestoTavolo("Se devi puntare cosi poco cambia tavolo!")
  }
}

function incrementaPuntata() {
  const controllaPuntataPiu = variabileSomma + 1; //fa un check per vedere se facendo +1 si andrebbe sopra il saldo possibile
  frasiCroupier()
  intervalloPuntata = setInterval(() => {
    if (variabileSomma >= 0 && variabileSomma < saldoValore) {
      if (controllaPuntataPiu <= saldoValore) {
        variabileSomma += 1;
     return getSomma.textContent = `${variabileSomma}$`;
      }
    }
  }, 43)
}
function diminuisciPuntata() {
  const controlloPuntataMeno = variabileSomma - 1; //fa un check per vedere se facendo -1 si andrebbe sotto 0
  frasiCroupier()
  intervalloPuntata = setInterval(() => {
    if (variabileSomma > 0 && controlloPuntataMeno >= 0) {
    variabileSomma -= 1;
    return getSomma.textContent = `${variabileSomma}$`;
    }
  }, 43)
}
function fermaPuntata() {
  clearInterval(intervalloPuntata);
}
const mexCroupier = document.getElementById('messaggioCroupier');
    
conferma.addEventListener('click', function() { //questa funzione serve a far partire il gioco una volta che il giocatore
  const numeroBanchiere = generaNumeroBanchiere(); // ha schiacciato su "conferma"
  console.log(`${numeroBanchiere}`);
    if (numero > 0) {  // se il numero puntato è diverso da 0 parte la scommessa altrimenti non succede nulla
      if (numero === numeroBanchiere && saldoValore > 0) { // caso vincita, controlla se il numero scelto è uguale al numero
        saldoValore += variabileSomma * 3;  // random del banchiere
        let numeroCasuale = Math.floor(Math.random() * 30);
        cambiaTestoTavolo(`Hai vinto: ${variabileSomma * 3}$, ${frasiVittoria[numeroCasuale]}`)
    } else {   //caso perdita fa l'opposto
        saldoValore -= variabileSomma;
        let numeroCasuale = Math.floor(Math.random() * 30);
        cambiaTestoTavolo(`Hai perso: ${variabileSomma}$, ${frasiPerdita[numeroCasuale]}`);
    }
        saldoTotale.textContent = `${saldoValore}$`;  //aggiorna contenuto dell'html attraverso il dom
        getSomma.textContent = 0;   //reimposta a 0 le variabili puntata e numero
        variabileSomma = 0;
    }  
    if (saldoValore === 0) {
      saldoValore = 500;
      saldoTotale.textContent = `${saldoValore}$`;
      let numeroCasuale = Math.floor(Math.random() * 20);
      cambiaTestoTavolo(frasiPerditaConRegalo[numeroCasuale]);
  } 
  console.log(numero);
});