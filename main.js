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

conferma.addEventListener('click', function() {
  const numeroBanchiere = generaNumeroBanchiere();
  console.log('numero banchiere:');
  console.log(numeroBanchiere);
  if (numero > 0) {
    if (numero === numeroBanchiere && saldoValore > 0) {
      saldoValore += variabileSomma * 3;
    } else {
      saldoValore -= variabileSomma;
    }
      saldoTotale.textContent = saldoValore;
      getSomma.textContent = 0;
      variabileSomma = 0;
    }  
  });