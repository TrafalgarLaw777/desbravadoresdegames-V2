
//Fazer a janela modal
var botaoEl = document.getElementById("botao-lista");
var modalEl = document.getElementById("modal-lista");
var closeEl = document.getElementsByClassName("close")[0];

botaoEl.onclick = function() {
    modalEl.style.display = "block";
}

closeEl.onclick = function() {
    modalEl.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modalEl) {
        modalEl.style.display = "none";
    }
}

//Adicionar jogos na lista
var jogos = [];



var botaoAddEl = document.getElementById("novo-jogo-add");

function insereJogo(jogo) {
    var jogoLi = document.createElement("li"); 
    jogoLi.innerHTML = jogo.nome + " - Nota: " + jogo.nota;
    jogoLi.classList.add("item-jogo");
    document.getElementById("lista-jogo").appendChild(jogoLi);
}

botaoAddEl.onclick = function() {
    var jogoEl = document.getElementById("novo-jogo-nome");
    var notaEl = document.getElementById("novo-jogo-nota");
    var novoJogo = {
        nome: jogoEl.value,
        nota: notaEl.value
    };

    jogos.push(novoJogo);
    insereJogo(novoJogo);

    jogoEl.value = '';
    jogoEl.focus();
}

var salvarEl = document.getElementById("salvar-lista");
var carregarEl = document.getElementById("carregar-lista");
var nomeEl = document.getElementById("nome-lista");

salvarEl.onclick = function() {
    localStorage.setItem("Lista " + nomeEl.value, JSON.stringify(jogos));
}

carregarEl.onclick = function() {
    let listaEl = localStorage.getItem("Lista " + nomeEl.value);
    jogos = JSON.parse(listaEl);
    document.getElementById("lista-jogo").innerHTML = '';
    jogos.forEach(insereJogo);
}


