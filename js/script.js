//esercizio5
var eta = parseInt( prompt("Quanti anni hai?"));
var numeroKm = parseInt( prompt("Quanti Km devi percorrere?"));

console.log(eta, numeroKm);

var prezzo = ( numeroKm * 0.21 );

console.log(prezzo);

var scontoMinori = ( prezzo / 100 * 20 );
var scontoAnziani = ( prezzo / 100 * 40 );

console.log(scontoMinori, scontoAnziani)

var prezzoFinale;

if( eta < 18 ) {
  prezzoFinale = ( prezzo - scontoMinori );
  alert("Hai diritto a uno sconto del 20% che corrisponde a " + scontoMinori + " Euro");
}else if( eta >= 65) {
  prezzoFinale = ( prezzo - scontoAnziani );
  alert("Hai diritto a uno sconto del 40% che corrisponde a " + scontoAnziani + " Euro");
}else {
  prezzoFinale = prezzo;
  alert("Mi dispiace. Non hai diritto a nessuno sconto in base alla tua etá anagrafica. Torna quando sarai piú anziano");
}

document.getElementById("ticket").innerHTML = "Il prezzo del tuo biglietto e' " + prezzoFinale.toString() + " Euro";















//
