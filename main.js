let rubrica = {
    lista: [],
    pin: "1234"
};

// CARICA AL VIA
rubrica.lista = JSON.parse(localStorage.getItem("contatti")) || [];

// LOGIN
function entra() {
    let pin = document.getElementById("pin").value;
    if (pin == rubrica.pin) {
        document.getElementById("login").style.display = "none";
        document.getElementById("principale").style.display = "block";
        mostra();
    } else {
        alert("PIN SBAGLIATO!");
        document.getElementById("pin").value = "";
    }
}

// EXIT
function esci() {
    document.getElementById("login").style.display = "block";
    document.getElementById("principale").style.display = "none";
    document.getElementById("pin").value = "";
}

// AGGIUNGI
function aggiungi() {
    let nome = document.getElementById("nome").value;
    let tel = document.getElementById("tel").value;
    
    if (nome && tel) {
        rubrica.lista.push({nome: nome, tel: tel});
        salva();
        mostra();
        document.getElementById("nome").value = "";
        document.getElementById("tel").value = "";
    } else {
        alert("METTI NOME E TELEFONO!");
    }
}

// ELIMINA
function elimina(posizione) {
    if (confirm("Cancelli?")) {
        rubrica.lista.splice(posizione, 1);
        salva();
        mostra();
    }
}

// MOSTRA
function mostra() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    
    for (let i = 0; i < rubrica.lista.length; i++) {
        let div = document.createElement("div");
        div.className = "card mb-2";
        div.innerHTML = `
            <div class="card-body">
                <div class="d-flex">
                    <div>
                        <h5>${rubrica.lista[i].nome}</h5>
                        <p>${rubrica.lista[i].tel}</p>
                    </div>
                    <button class="btn btn-danger ms-auto" onclick="elimina(${i})">X</button>
                </div>
            </div>
        `;
        lista.appendChild(div);
    }
}

// SALVA
function salva() {
    localStorage.setItem("contatti", JSON.stringify(rubrica.lista));
}

// INVIO CON ENTER
document.addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        if (document.getElementById("login").style.display != "none") {
            entra();
        } else {
            aggiungi();
        }
    }
});
