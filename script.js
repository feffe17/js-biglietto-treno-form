// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// let eta;
// let chilometri;


// chilometri = parseFloat(prompt("inserire il numero di chilometri da percorrere"));
// eta = parseInt(prompt("inserire età del passeggero"));

// let prezzo = chilometri * 0.21;

// console.log (chilometri , eta);

// let minorenne = (prezzo - ((prezzo / 100) * 20))
// let magiorenne = (prezzo - ((prezzo / 100) * 40))


// if(eta < 18){
//     alert("il prezzo del biglietto è di " + minorenne.toFixed(2) + "€");
// } else if(eta > 65){
//     alert("il prezzo del biglietto è di " + magiorenne.toFixed(2) + "€");
// } else{
//     alert("il prezzo del biglietto è di " + prezzo.toFixed(2) + "€");
// }

const form = document.getElementById("formPrice");

function convertEta(string) {
    if (string === "Minore di 18 anni (-20%)") {
        return variabileEta = 1;
    }
    else if (string === "Maggiore di 65 anni (-40%)"){
        return variabileEta = 2;
    }
    else {
        return variabileEta = 3;
    }
}

form.addEventListener('submit', function(event) {
    let chilometri = document.getElementById("inputKm4").value;
    let eta = document.getElementById("inputState").value;
    let variabileEta = 0;
    let prezzo;
    
    chilometri = parseInt(chilometri);
    variabileEta = convertEta(eta);
   

    event.preventDefault();
    console.log(chilometri , eta , variabileEta);

    if (variabileEta == 1) {
        prezzo = (chilometri * 0.21 );
        prezzo = prezzo - ((prezzo / 100) * 20);
        prezzo = prezzo.toFixed(2);
    } else if (variabileEta == 2){
        prezzo = (chilometri * 0.21 );
        prezzo = prezzo - ((prezzo / 100) * 40);
        prezzo = prezzo.toFixed(2);
    } else{
        prezzo = (chilometri * 0.21 );
        prezzo = prezzo.toFixed(2);
    }
    console.log(prezzo);
    
});



