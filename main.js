function generaNumeroBanchiere() {
  let numeroRandom = Math.floor(Math.random() * 6) + 1;  // funzione per generare il numero del banchiere
  return numeroRandom;
}
console.log(generaNumeroBanchiere()); // test numero banchiere

let sommaGiocatore1 = 100; //saldo del giocatore 1 nel caso dovessimo aggiungere un giocatore 2
const pulsanteAumentaPuntata = document.getElementById('piu');
const pulsanteDiminuisciPuntata = document.getElementById('meno');
const numeroGiocatore1 = document.getElementById('numeroGiocatore');
const numeroSceltoGiocatore1 = numeroGiocatore1.value;
let numero = 0;
pulsanteAumentaPuntata.addEventListener('click', function() {
  console.log(numero);
  if (numero === 0) {
    numero++;
    return numeroGiocatore1.textContent = numero;
  } else if (numero > 0 && numero < 6) {
    numero++;
    return numeroGiocatore1.textContent = numero;
  } 
}); //da completare la funzione

pulsanteDiminuisciPuntata.addEventListener('click', function() { 
  if (numero > 0 && numero < 6) {
    numero--;
    return numeroGiocatore1.textContent = numero;
  } 
}); //da completare la funzione
function prova() {
  if (true) {
    return console.log('hello');
  }
}

