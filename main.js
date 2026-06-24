

// cattura con il dom querySelector ed ID

let nameInput = document.querySelector('#nameInput')
let numberInput = document.querySelector('#numberInput')


let btnShow = document.querySelector('#btnShow')
let btnAdd = document.querySelector('#btnAdd')
let btnEdit = document.querySelector('#btnEdit')
let btnRemove = document.querySelector('#btnRemove')

        // FUNZIONE CHE RICERCA valore per risposta
        let check = false
        // lasciando un div apprima in html vuoto ora loposso usare per riempire;
        let containerContacts = document.querySelector('.containerContacts')


// rubrica attendibile scritta da riempimento

        let rubrica = {
        listaContatti: [

            {name: `Ismail`, number: 3290018230},
            {name: `Mohammed`, number: 3201122230},
        ],

// FUNZIONI PER ATTIVARE OGNI CAMBIAMENTO
// Mostrami i contatti funzione per vederli a schermo; 

showContacts: function(){
    this.listaContatti.forEach(contatto => {

let p = document.createElement(`p`)
p.innerHTML = `${contatto.name}: ${contatto.number}`
containerContacts.appendChild(p)

    })
},

// FUNZIONE AGGIUNGO UN CONTATTO 
addContacts: function(newName, newNumber){

    // CREO OGGETTO CON NEW
    this.listaContatti.push({name: newName, number: newNumber})

},


// RIMUOVI CONTATTI FUNZIONE(Scelta Metodo)
removeContacts: function(removeName){
 let filtered = this.listaContatti.filter(contatto=> contatto.name != removeName)
    // aggiungo valore solo a quali devo vedere
    this.listaContatti = filtered
},


// MODIFICO UN CONTATTO funzione
editContacts: function(nome,numero){
this.listaContatti.forEach(contatto =>{
        if(contatto.name == nome){
            contatto.number = numero
        }
    })

}
        }


// BOTTONI__________________________________________



// SHOW CONTACTS (MOSTRO I CONTATTI)
btnShow.addEventListener('click', ()=>{
    if(check == false){
        rubrica.showContacts()
        btnShow.innerHTML = `Nacondi contatti`
        check =true
    }else{
       check=false;
        containerContacts.innerHTML = ``
        btnShow.innerHTML = `Mostra contatti`
    }
})



// ADD CONTACTS (AGGIUNGO I CONTATTI)

btnAdd.addEventListener('click', ()=>{

    if(nameInput.value != ``){
        rubrica.addContacts(nameInput.value, numberInput.value)
        rubrica.showContacts()
        nameInput.value = ``
         numberInput.value = ``
    }
})


// DELETE CONTACTS (RIMUOVO CONTATTO)

btnRemove.addEventListener('click', ()=>{

//   if(numberInput.value != ``){
//         rubrica.removeContacts(nameInput.value)
        // valore al click del bottone, con valori svuotati
    //     nameInput.value = ``
        
    // }



    // OPPURE ANCHE CON UN ALERT:
    
    let nome = prompt("Nome contatto:")

    if(confirm("Eliminare contatto?")){
        rubrica.removeContacts(nome)
        rubrica.showContacts()
    }

})


// EVENTI CORRISPONDENTI ALLE FUNZIONI IN ALTO; 
btnEdit.addEventListener('click', ()=>{

// if(nameInput.value != ``){
//     rubrica.editContacts(nameInput.value, numberInput.value)
// rubrica.showContacts()
//     nameInput.value= ``
//     numberInput.value= ``



 
    let nome = prompt("Nome contatto da modificare:")

    let nuovoNumero = prompt("Nuovo numero:")

    if(confirm("Modificare contatto?")){

        rubrica.editContacts(nome, nuovoNumero)
        rubrica.showContacts()
    }


})





























