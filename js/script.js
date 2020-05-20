//esercizio5
var numeroUtente = parseInt( prompt("Scegli un numero tra 1 e 9") );
var pariodispariUtente = prompt("Pari o dispari?");
var numeroCpu = Math.floor(Math.random() * 9) +1;
var sommaUtenteCpu = numeroUtente + numeroCpu;
var risultato;

if( (sommaUtenteCpu % 2 ) == 0 ) {
  risultato = "pari";
}else {
  risultato = "dispari";
}

console.log(numeroUtente);
console.log(pariodispariUtente);
console.log(numeroCpu);
console.log(sommaUtenteCpu);
console.log(risultato);

if(risultato == pariodispariUtente) {
  alert("Hai azzeccato!")
} else {
  alert("Hai perso!")
}














//
