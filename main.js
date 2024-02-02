function generaNumeroBanchiere() {
  let numeroRandom = Math.floor(Math.random() * 6) + 1;  // funzione per generare il numero del banchiere
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

conferma.addEventListener('click', function() { //questa funzione serve a far partire il gioco una volta che il giocatore
  const numeroBanchiere = generaNumeroBanchiere(); // ha schiacciato su "conferma"
  console.log('numero banchiere:');
  console.log(numeroBanchiere);
  if (numero > 0) {  // se il numero puntato è diverso da 0 parte la scommessa altrimenti non succede nulla
    if (numero === numeroBanchiere && saldoValore > 0) { // caso vincita, controlla se il numero scelto è uguale al numero
      saldoValore += variabileSomma * 3;  // random del banchiere
    } else {   //caso perdita fa l'opposto
      saldoValore -= variabileSomma;
    }
      saldoTotale.textContent = saldoValore;  //aggiorna contenuto dell'html attraverso il dom
      getSomma.textContent = 0;   //reimposta a 0 le variabili puntata e numero
      variabileSomma = 0;
    }  
  });