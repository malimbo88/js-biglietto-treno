//esercizio5
var eta = parseInt( prompt("Quanti anni hai?"));
var numeroKm = parseInt( prompt("Quanti Km devi percorrere?"));

console.log(eta, numeroKm);

var prezzo = ( numeroKm * 0.21 );

console.log(prezzo);

var scontoMinori = ( prezzo / 100 * 20 );
var scontoAnziani = ( prezzo / 100 * 40 );

console.log(scontoMinori, scontoAnziani)

var prezzoScontato;

if( eta < 18 ) {
  prezzoScontato = ( prezzo - scontoMinori )
}else if( eta >= 65) {
  prezzoScontato = ( prezzo - scontoAnziani )
}else {
  alert("Non hai diritto a nessuno sconto")
}

console.log(prezzoScontato)

document.getElemntById("ticket").innerHtml = "Il prezzo del biglietto é " + prezzoScontato;














//
