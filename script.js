// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





//IL CODICE è SCRITTO INTERAMENTE DA ME. HO USATO CHAT GPT AL FINE DI RIORDINARLO AGGIUNGENDO COMMENTI MA SENZA
//CAMBIARNE IL CONTENUTO. A FINE PAGINA SI PUO TROVARE IL CODICE ORIGINARIO NON ORDINATO (COMUNQUE FUNZIONANTE)


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
    // event.preventDefault();

    // Recupera i valori dai campi del form
    let nome = document.getElementById("inputName4").value;
    let chilometri = document.getElementById("inputKm4").value;
    let eta = document.getElementById("inputState").value;

    // Variabili necessarie
    let variabileEta = 0;
    let prezzo;

    // Elementi DOM per l'output
    let prezzoFinale = document.getElementById("prezzoFinale");
    let passeggero = document.getElementById("nomePasseggero");
    let offerta = document.getElementById("offerta");

    // Converte chilometri e ottiene la variabileEta in base all'età
    chilometri = parseInt(chilometri);
    variabileEta = convertEta(eta);

    console.log(chilometri , eta , variabileEta);

    // Calcolo del prezzo e impostazione dell'offerta
    if (variabileEta == 1) {
        prezzo = (chilometri * 0.21 );
        prezzo = prezzo - ((prezzo / 100) * 20);
        prezzo = prezzo.toFixed(2);
        offerta.textContent = "Offerta Junior";
    } else if (variabileEta == 2) {
        prezzo = (chilometri * 0.21 );
        prezzo = prezzo - ((prezzo / 100) * 40);
        prezzo = prezzo.toFixed(2);
        offerta.textContent = "Offerta Senior";
    } else {
        prezzo = (chilometri * 0.21 );
        prezzo = prezzo.toFixed(2);
        offerta.textContent = "Offerta Standard";
    }

    console.log(prezzo);

    // Aggiorna il DOM con il prezzo e il nome del passeggero
    passeggero.textContent = nome;
    prezzoFinale.textContent = `${prezzo}€`;
});


































// const form = document.getElementById("formPrice");

// function convertEta(string) {
//     if (string === "Minore di 18 anni (-20%)") {
//         return variabileEta = 1;
//     }
//     else if (string === "Maggiore di 65 anni (-40%)"){
//         return variabileEta = 2;
//     }
//     else {
//         return variabileEta = 3;
//     }
// }

// form.addEventListener('submit', function(event) {
//     let nome = document.getElementById("inputName4").value;
//     let chilometri = document.getElementById("inputKm4").value;
//     let eta = document.getElementById("inputState").value;
//     let variabileEta = 0;
//     let prezzo;
//     let prezzoFinale = document.getElementById("prezzoFinale")
//     let passeggero = document.getElementById("nomePasseggero");
//     let offerta = document.getElementById("offerta");
    
//     chilometri = parseInt(chilometri);
//     variabileEta = convertEta(eta);
   

//     event.preventDefault();
//     console.log(chilometri , eta , variabileEta);

//     if (variabileEta == 1) {
//         prezzo = (chilometri * 0.21 );
//         prezzo = prezzo - ((prezzo / 100) * 20);
//         prezzo = prezzo.toFixed(2);
//         offerta.textContent = "Offerta Junior"
//     } else if (variabileEta == 2){
//         prezzo = (chilometri * 0.21 );
//         prezzo = prezzo - ((prezzo / 100) * 40);
//         prezzo = prezzo.toFixed(2);
//         offerta.textContent = "Offerta Senior"
//     } else{
//         prezzo = (chilometri * 0.21 );
//         prezzo = prezzo.toFixed(2);
//         offerta.textContent = "Offerta Standard"
//     }
//     console.log(prezzo);

//     passeggero.textContent = nome;
//     prezzoFinale.textContent =`${prezzo}€`

    
// });



