//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numeri1 = [23, 86, 78, 101, 1, 34, 956, 31]; // dichiaro l'array con i numeri interi da analizzare
let len1 = numeri1.length // dichiaro una variabile per il numero totale di elementi presenti nell'array (length)
let piuGrande = 0; // imposto a 0 il conteggio del numero più grande

for (i=1;i<len1;i++) { // creo un for statement, in modo di muoverci per tutti gli elementi dell array di 1 in 1
	if (numeri1[i]>piuGrande) { 
		piuGrande = numeri1[i] // l'elemento più grande si assegnerà a piuGrande
	}
}
console.log(piuGrande)

  //EXTRA: versione con meno codice

let numeri2 = [23, 86, 78, 101, 1, 34, 956, 31]; // dichiariamo l'array con i numeri interi da analizzare
console.log(Math.max(...numeri2)) // usiamo il metodo Math.max(...nomeArray) per trovare il valore più alto
 





/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

num = 200

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else {
  console.log("Huge");
}






//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let text = ''; // creo una stringa vuota

for (let i = 0; i <= 10; i++) { // inizio il ciclo for per i numeri fino il 10 incluso
  if (i === 3) {
    continue; // gli dico ''se trovi il 3, saltalo''
  }
  if (i === 8) {
    continue; // gli dico ''se trovi l'8, saltalo''
  }

  text = text + ' ' + i; // concateno la stringa con uno spazio e con il valore corrente, fino la fine del ciclo for.
}

console.log(text); // faccio un log aspettando un output cosi '0 1 2 4 5 6 7 9 10'






/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let numeri4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // dichiaro l'array
let len4 = numeri4.length; // dichiaro la lunghezza dell'array
let nPari = 0; // azzero il conteggio dei numeri pari
let nDispari = 0; // azzero il conteggio dei numeri dispari

for(let i = 0; i<len4; i++) {  // inizio ciclo for per tutta la lunghezza dell'array

  if(numeri4[i] % 2 == 0) { // usando modulo scopro se il numero è divisibile per 2 
    nPari++
    console.log( numeri4[i], 'è pari') //se lo è, somma uno al conteggio dei pari e fa un log dicendo che quel numero è pari
  } else {
    nDispari++
    console.log(numeri4[i], 'è dispari') // altrimenti, somma uno al conteggio dei dispari e fa un log dicendo che quel numero è dispari
  }

}
console.log('ci sono', nPari, 'numeri pari e', nDispari, 'numeri dispari!') // fuori dall'if faccio un log che dice il conteggio







//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numInteri = [4, 5];

if (numInteri[0] + numInteri[1] === 8) {
  console.log('l\'addizione di', numInteri[0], '+', numInteri[1], 'è uguale a 8')
} else if (numInteri[0] - numInteri[1] === 8) {
  console.log('la sottrazione di', numInteri[0], '-', numInteri[1], 'è uguale a 8')
} else if (numInteri[0] === 8 || numInteri[1] === 8) {
  console.log('uno dei numeri è 8')
} else {
  console.log('non c\'è un 8 presente, nè i due numeri sommati o sottratti tra di loro danno come risultato 8')
}





/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 50; // creo una variabile per l'importo del carrello
let totalCheckout = 0; // imposto il conteggio del checkout a 0
const spedizione = 10; // creo la costante di spedizione, che sarà sempre di 10 euro

if(totalShoppingCart < 50) { // creo un if statement per i carrelli che spendono meno di 50 euro 
  totalCheckout = totalShoppingCart + spedizione // il checkout sarà il totale del carello più i 10 euro di spedizione
  console.log('il totale dell\'ordine è di', totalShoppingCart, 'euro +', spedizione, 'euro di spedizione. Se spende altri', 50 - totalShoppingCart, 'euro la spedizione è gratuita'); // stampo il risultato
} else { // creo un else statement per i carelli che spendono più di 50 euro
  totalCheckout = totalShoppingCart // il checkout sarà solamente il totale del carrello, senza aggiungere la spedizione
  console.log('il totale dell\'ordine è di', totalShoppingCart, 'euro. Spedizione gratuita per ordine superiore ai 50 euro') // stampo il risultato
}





/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 62;
let offerTotalShoppingCart2 = totalShoppingCart2*0.8
let totalCheckout2 = 0;
const spedizione2 = 10;

if(offerTotalShoppingCart2 < 50) {
  totalCheckout2 = offerTotalShoppingCart2 + spedizione2 
  console.log('il totale dell\'ordine è di', offerTotalShoppingCart2, 'euro +', spedizione2, 'euro di spedizione2. Se spende altri', (50 - offerTotalShoppingCart2).toFixed(2), 'euro la spedizione è gratuita');
} else {
  totalCheckout2 = offerTotalShoppingCart2
  console.log('il totale dell\'ordine è di', offerTotalShoppingCart2, 'euro. Spedizione gratuita per ordine superiore ai 50 euro')
}
console.log('Prodotto:', totalShoppingCart2,',', 'prodotto scontato:', offerTotalShoppingCart2)







/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

isMale = false;
let gender = isMale ? "male" : "female";
console.log(gender);





/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

let numeri5 = []; // inizializzo l'array
for (let i = 1; i <= 100; i++) {
  numeri5.push(i); //inserisco i dati nell'array
}
let len5 = numeri5.length; // ottenere la lunghezza dell'array dopo l'inserimento dei dati
console.log(numeri5); // stampo l'array

for (let i = 0; i < len5; i++) {
  if (numeri5[i] % 3 === 0 && numeri5[i] % 5 === 0) {
    console.log(numeri5[i], "FizzBuzz"); // se è multiplo di 3 e 5 (modulo e && AND) stampa FizzBuzz
  } else if (numeri5[i] % 3 === 0) {
    console.log(numeri5[i], "Fizz"); // se è multiplo di 3 stampa Fizz
  } else if (numeri5[i] % 5 === 0) {
    console.log(numeri5[i], "Buzz"); // se è multiplo di 5 stampa Buzz
  } else {
    console.log(numeri5[i], "non è multiplo nè di 3 nè di 5"); // non è multiplo nè di 3 nè di 5
  }
}
