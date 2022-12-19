// Chiedere quanti km l'user deve percorrere 

// Chiedere quanti anni ha l'user

// Calcola il costo del biglietto del passeggero:

// 1km = 0.21€

// < 18 = sconto 20%
// > 65 = sconto 40%

// Prezzo finale

// ________________________________________

const distance = prompt('Quanti km devi percorrere?');
console.log('Distanza da percorrere:', distance);

const yearOfBirth = prompt('Inserisci anno di nascita');
console.log("Anno di nascità dell'utente", yearOfBirth);

const now = new Date ();
const age = (now.getFullYear() - yearOfBirth);
console.log("Età dell'utente", age);

let ticket_unit = 0.21;
let ticket_fair = (distance * ticket_unit);

if (age > 18 && age < 65) {
    console.log("Costo biglietto standard:", ticket_fair);

} else if (age < 18) {
    let ticket_fair = (distance * ticket_unit) - ((distance * ticket_unit) * 20 / 100 );
    console.log("Costo biglietto sconto minorenni:", ((ticket_fair * 100) / 100) .toFixed(2));

} else (age > 65) {
    let ticket_fair = (distance * ticket_unit) - ((distance * ticket_unit) * 40 / 100 );
    console.log("Costo biglietto sconto anziani:", ((ticket_fair * 100) / 100) .toFixed(2));
}