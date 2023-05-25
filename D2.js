/* 

ESERCIZIO 1 - Prinicipali Data Types

Tipi primitivi 

1. Number: qualsiasi numero intero, decimale, positivo o negativo (Ex: 10; -2; 9.08647; 0). Si scrive senza virgolette.
2. String: e una sequenza di caratteri, scritta tra virgolette ("testo" o 'testo'). Può anche essere vuota ("") o contenere numeri ("12").
3. Boolean: accetta solo due valori: true o false. Serve per situazione logiche in cui succede o meno qualcosa in base a se qualcosa e vero o falso. Questo si verifica con AND (&&), OR(||) e NOT(!).
4. undefined: un valore che non esiste ancora
5. null: un valore vuoto

Tipi strutturati

1. Oggetti: sono raccolte di dati su una stessa entità (per esempio nome cognome eta e passioni di una persona)
2. Funzioni:
3. Arrays:

*/

// ESERCIZIO 2 - SOMMA 12 + 20

let sommaDodiciPiuVenti = 12 + 20;
console.log('2) 12 più 20 è: ', sommaDodiciPiuVenti);

// ESERCIZIO 3 - ASSEGNARE 12 A VARIABILE X

let x = 12;
console.log('3) x vale: ', x);

// ESERCIZIO 4 - ASSEGNARE IL MIO NOME SOTTO FORMA DI STRINGA NELLA VARIABILE NAME

let name = "Manuel Matias Bellucci";
console.log('4) nome: ', name);

// ESERCIZIO 5 - SOTTRAZIONE NUMERO 4 MENO VARIABILE X

let sottrazioneQuattroMenoX = 4 - x;
console.log('5) 4 meno x = ', sottrazioneQuattroMenoX);

// ESERCIZIO 6 - CREARE UN OGGETTO JS CHE MI RAPPRESENTI, USANDO COME VALORI NOME COGNOME E HOBBY

let manuel = {
    nome: "Manuel",
    cognome: "Matias Bellucci",
    hobby: "Programmazione",
};
console.log('6) oggetto: ', manuel);


// ESERCIZIO 7 - CREARE DUE VARIABILI (name1 e name2). A name1 assegnare la stringa "john" e a name2 "John" con la J maiuscola. Verificare che name 1 e name2
// siano diverse (verificare che la loro uguaglianza sia falsa). Infine verificare che la loro uguaglianza sia true quando entrambe vengano trasformate in
// lowercase usando .toLowerCase (senza cambiare il valore di name2)

let name1 = "john";
let name2 = "John";

let uguaglianzaSenzaLowerCase = name1 == name2; // l'output sarebbe john = John, cioè false perche non sono uguali
console.log('7.1) name1 e name2 uguali senza lowercase?: ', uguaglianzaSenzaLowerCase);

let uguaglianzaConLowerCase = name1 == name2.toLowerCase(); //aggiungendo il metodo .toLowerCase() a name2, l'output sarebbe john = john cioè true.
console.log('7.2) name1 e name2 uguali con lowercase?: ', uguaglianzaConLowerCase);