// funzione per cambiare il contenuto del titolo
function cambiareTitolo() {
    document.getElementsByTagName('h1')[0].innerHTML = 'I migliori prodotti';
}

// funzione per cambiare il colore del background
function cambiareColoreBackground() {
    document.getElementsByTagName('body')[0].style.backgroundColor = "#AA0000";
}

// funzione per cambiare l'indirizzo
function cambiareIndirizzo() {
    document.getElementById('indirizzo').innerHTML = 'Nuova sede - Via Molinella 88';
}

// funzione per aggiungere classe ai link
function aggiungiereClasseLink() {
    const link = document.querySelectorAll('a');
    for(let i = 0; i < link.length; i++) {
        link[i].classList.add('red');
    }
}

// funzione per aggiungere classe alle img
function aggiungiereClasseImg() {
    const immagini = document.querySelectorAll('img');
    for(let i = 0; i < immagini.length; i++) {
        immagini[i].classList.add('size');
    }
}

// funzione per rimuovere classe alle img
function rimuovereClasseImg() {
    const immagini = document.querySelectorAll('img');
    for(let i = 0; i < immagini.length; i++) {
        immagini[i].classList.remove('size');
    }
}

function cambiareColorePrezzi() {
    let prezzi = document.getElementsByClassName("prezzo");
    for (let i = 0; i < prezzi.length; i++) {
        let colore = generaColoreCasuale();
        prezzi[i].style.color = colore;
    }
}

function generaColoreCasuale() {
    let colore = "#";
    let caratteri = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        colore += caratteri[Math.floor(Math.random() * 16)];
    }
    return colore;
}
