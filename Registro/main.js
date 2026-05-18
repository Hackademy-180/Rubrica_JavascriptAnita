

// Lista dove salvo i contatti
let contatti = [];

// Variabile per mostrare o nascondere i contatti
let contattiVisibili = true;

// AGGIUNGE UN NUOVO CONTATTO
function aggiungiContatto() {
    //legge numero che hai inserito in input, con ID #
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;

    // condizione di controllo: se uno dei 2 campi resta vuoto;

    if (nome == "" || numero == "") {
        alert("Inserisci sia il nome sia il numero");
//
        return;
    }


    //Oggetto = rappresenta il contatto ( crea oggetto );
    let nuovoContatto = {
        nome: nome,
        numero: numero
    };
//Aggiungo un nuovo contatto in Array x contatti con metodo push

    contatti.push(nuovoContatto);
//valore svuota campi input - dopo l'Inserimento
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";

    mostraContatti();
}





// MOSTRA O NASCONDE I CONTATTI

function mostraNascondi() {
    if (contattiVisibili == true) {
        contattiVisibili = false;
    } else {
        contattiVisibili = true;
    }


    //Richiama funzione e la visualizzazione
    mostraContatti();
}

// OPPURE QUESTA FUNZIONE SEMPLIFICATA: 
// function mostraNascondi() {
//     contattiVisibili = !contattiVisibili;
//     mostraContatti();
// }


// MOSTRA LA LISTA DEI CONTATTI
function mostraContatti() {
let lista = document.getElementById("listaContatti");
    let numeroContatti = document.getElementById("numeroContatti");
//aggiorna
            numeroContatti.innerHTML = contatti.length;

//pulizia del contenitore prima che si riscriva tutto 
            lista.innerHTML = "";
//FUNZIONE NASCONDE LISTA
    if (contattiVisibili == false) {
        lista.style.display = "none";
        return;
    }

 //RENDERE LA LISTA VISIBILE
    lista.style.display = "block";
//CONDIZIONE, Se non ci sono contatti mostrami messaggio vuoto;
    if (contatti.length == 0) {
        lista.innerHTML = '<div class="vuoto">Non ci sono contatti</div>';
        return;
    }
//CICLARE TUTTI CONTATTI IN ARRAY
    for (let i = 0; i < contatti.length; i++) {

        //Aggiungo pulsanti e contatto in Html:

        lista.innerHTML += `
            <div class="contatto">
                <div>
                    <strong>${contatti[i].nome}</strong><br>
                    <span>${contatti[i].numero}</span>
                </div>

                <div class="azioni">
                    <button class="btn-modifica" onclick="modificaContatto(${i})">Modifica</button>
                    <button class="btn-elimina" onclick="eliminaContatto(${i})">Elimina</button>
                </div>
            </div>
        `;
    }
}

// ELIMINA UN CONTATTO
function eliminaContatto(posizione) {
    contatti.splice(posizione, 1);
    mostraContatti();
}

// MODIFICA UN CONTATTO
function modificaContatto(posizione) {


    let nuovoNome = prompt("Modifica nome", contatti[posizione].nome);
    let nuovoNumero = prompt("Modifica numero", contatti[posizione].numero);
//controllo se i nuovi valori non siano vuoti
            if (nuovoNome == null || nuovoNumero == null) {
                return;
            }

            if (nuovoNome == "" || nuovoNumero == "") {
                alert("Nome e numero non possono essere vuoti");
                return;
            }
//aggiorna nome del contatto
    contatti[posizione].nome = nuovoNome;
    //aggiorna il numero contatto
    contatti[posizione].numero = nuovoNumero;

   //mostra lo status iniziale
    mostraContatti();
  
    
}



// PREMENDO INVIO AGGIUNGE IL CONTATTO

document.addEventListener("keydown", function(evento) {
    if (evento.key == "Enter") {
        aggiungiContatto();
    }


});

// ALL'INIZIO MOSTRO LA LISTA VUOTA

mostraContatti();
