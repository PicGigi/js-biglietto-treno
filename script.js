const kilometers = parseFloat(prompt("Benvenuto su TrainTicket.com! Quanti chilometri devi percorrere?"));
var price = parseFloat(kilometers * 0.21).toFixed(2);
console.log("Il prezzo del biglietto è", price, "€");
const age = parseInt(prompt("Quanti anni hai?"));
if (age < 18) {
    var newprice = parseFloat(price * 0.80).toFixed(2);
    console.log("Essendo under 18 hai diritto ad uno sconto del 20%. Il prezzo del biglietto è", newprice, "€");
}
else if (age > 65) {
    var newprice = parseFloat(price * 0.60).toFixed(2);
    console.log("Essendo over 65 hai diritto ad uno sconto del 40%. Il prezzo del biglietto è", newprice, "€");
}
else {
    console.log("Non è applicato alcuno sconto")
}
