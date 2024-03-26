// RICHIESTA KM
let kmScelti = parseInt(prompt("ciao utente, quanti km vuoi percorrere oggi?"));

if (isNaN(kmScelti)) {
    alert ("km non validi");
}

console.log(kmScelti, typeof kmScelti)

// RICHIESTA ETA'
let etaPasseggero = parseInt(prompt("quanti anni hai?"));

if (etaPasseggero < 1) {
    alert ("età non valida");
}

console.log(etaPasseggero, typeof etaPasseggero);

// MOLTIPLICAZIONE PREZZO
let price = kmScelti * 0.21;

console.log(price, typeof price)

let prezzoScontato = price;

// APPLICAZIONE SCONTO
if (etaPasseggero < 18) {
    prezzoScontato = price - price * 0.2;

}
else if (etaPasseggero >=65) {
    prezzoScontato = price - price * 0.4;

}

// ARROTONDAMENTO A 2 CIFRE DECIMALI
prezzoScontato = prezzoScontato.toFixed(2)

console.log (prezzoScontato, typeof prezzoScontato);

// MOSTRARE PREZZO
document.getElementById ("prezzoFinale").innerHTML = prezzoScontato;
