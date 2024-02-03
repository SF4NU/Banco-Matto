const cambiaDado = document.getElementById('dado');
function generaNumeroBanchiere() {
  let numeroRandom = Math.floor(Math.random() * 6) + 1;  // funzione per generare il numero del banchiere
  if (numeroRandom === 1) {
    const dice = "Immagini/dice1.png";
    document.getElementById('dado').src = dice;
  } else if (numeroRandom === 2) {
    const dice = "Immagini/dice2.png";
    document.getElementById('dado').src = dice;
  } else if (numeroRandom === 3) {
    const dice = "Immagini/dice3.png";
    document.getElementById('dado').src = dice;
  } else if (numeroRandom === 4) {
    const dice = "Immagini/dice4.png";
    document.getElementById('dado').src = dice;
  } else if (numeroRandom === 5) {
    const dice = "Immagini/dice5.png";
    document.getElementById('dado').src = dice;
  } else if (numeroRandom === 6) {
    const dice = "Immagini/dice6.png";
    document.getElementById('dado').src = dice;
  }
  return numeroRandom;
}
console.log(generaNumeroBanchiere()); // test numero banchiere

let sommaGiocatore1 = 100; //saldo del giocatore 1 nel caso dovessimo aggiungere un giocatore 2
const pulsanteAumentaPuntata = document.getElementById('piu');  //usa id del pulsante che aumenta il numero da scommettere
const pulsanteDiminuisciPuntata = document.getElementById('meno'); //usa id del pulsante che diminuisce il numero da scommettere
const numeroGiocatore1 = document.getElementById('numeroGiocatore'); // usa id per identificare il numero su cui punta il giocatore che poi parte da 0 nella variabile "numero"
const puntataPiu = document.getElementById('puntataPiu'); //aumenta la puntata del giocatore
const getSomma = document.getElementById('puntataGiocatore'); // identifica la somma su cui scommette il giocatore
const puntataMeno = document.getElementById('puntataMeno'); //diminuisce la puntata del giocatore
const saldoTotale = document.getElementById('saldoTotale');
const conferma = document.getElementById('pulsanteConferma');
let numero = 0;
let saldoValore = 1000;
pulsanteAumentaPuntata.addEventListener('click', function() {  //funzione per aumentare il numero su cui si scommette 
  console.log(numero);                                         // può arrivare al massimo al 6
  if (numero === 0) {
    numero++;
    return numeroGiocatore1.textContent = numero;
  } else if (numero > 0 && numero < 6) {
    numero++;
    return numeroGiocatore1.textContent = numero;
  } 
}); //da completare la funzione

pulsanteDiminuisciPuntata.addEventListener('click', function() { // funzione per diminuire il numero
  if (numero > 0 && numero <= 6) {
    numero--;
    return numeroGiocatore1.textContent = numero;
  } 
}); //da completare la funzione

let variabileSomma = 0;
puntataPiu.addEventListener('click', function() { //funzione per aumentare la somma della puntata di 25 (per ora)
  if (variabileSomma >= 0 && variabileSomma < saldoValore) {
    variabileSomma += 25;
   return getSomma.textContent = variabileSomma;
  }
  console.log(variabileSomma);
})

puntataMeno.addEventListener('click', function() {
  if (variabileSomma > 0) {
    variabileSomma -= 25;
    return getSomma.textContent = variabileSomma;
  }
})
    const mexCroupier = document.getElementById('messaggioCroupier');
    
conferma.addEventListener('click', function() { //questa funzione serve a far partire il gioco una volta che il giocatore
  const numeroBanchiere = generaNumeroBanchiere(); // ha schiacciato su "conferma"
  console.log('numero banchiere:');
  console.log(numeroBanchiere);
  if (numero > 0) {  // se il numero puntato è diverso da 0 parte la scommessa altrimenti non succede nulla
    if (numero === numeroBanchiere && saldoValore > 0) { // caso vincita, controlla se il numero scelto è uguale al numero
      saldoValore += variabileSomma * 3;  // random del banchiere
      mexCroupier.textContent = `Hai vinto: ${variabileSomma * 3}`;
    } else {   //caso perdita fa l'opposto
      saldoValore -= variabileSomma;
      mexCroupier.textContent = `Hai perso: ${variabileSomma}`;
    }
      saldoTotale.textContent = saldoValore;  //aggiorna contenuto dell'html attraverso il dom
      getSomma.textContent = 0;   //reimposta a 0 le variabili puntata e numero
      variabileSomma = 0;
    }  
   if (saldoValore === 0) {
    saldoValore = 500;
    saldoTotale.textContent = saldoValore;
    mexCroupier.textContent = "Hai perso tutto, ecco altri 500$";
   } 
  });