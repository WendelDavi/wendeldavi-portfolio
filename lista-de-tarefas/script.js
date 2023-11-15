// Referências aos elementos

const lista = document.getElementById('lista');
const tarefa = document.getElementById('tarefa');
const listaC = document.getElementById('lConcluidas');

// Functions

function adicionar() {
    const textoTarefa = tarefa.value;
    if (textoTarefa == "") {
        alert('Por favor, escreva uma tarefa!')
    } else {
        // Novo elemento para a lista
        const novaTarefa = document.createElement('li')
        // Adicionar texto à lista
        const textoElemento = document.createElement('span');
        textoElemento.className = 'textoTarefa';
        textoElemento.appendChild(document.createTextNode(textoTarefa));
        novaTarefa.appendChild(textoElemento);
        // Adicionar botão de edição
        const botaoEditar = document.createElement('button')
        botaoEditar.className = 'edtB'
        botaoEditar.textContent = `✏️`
        botaoEditar.onclick = function () {
            editar(this)
        };
        // Adicionar botão de exclusão
        const botaoExcluir = document.createElement('button')
        botaoExcluir.className = 'excB'
        botaoExcluir.textContent = '🗑️'
        botaoExcluir.onclick = function () {
            excluir(this)
        }
        // Adicionar o botão de conclusão de tarefa
        const botaoConcluir = document.createElement('button')
        botaoConcluir.className = 'conB'
        botaoConcluir.textContent = '✔️'
        botaoConcluir.onclick = function () {
            concluir(this)
        }
        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoExcluir)
        novaTarefa.appendChild(botaoConcluir)
        lista.appendChild(novaTarefa)
        tarefa.value = ""
        tarefa.focus()
    }

}

function editar(botaoEditar) {
    const itemLista = botaoEditar.parentNode;
    const textoTarefa = itemLista.querySelector('.textoTarefa');
    const textoAtual = textoTarefa.textContent;

    const novoTexto = prompt('Digite o novo texto da tarefa:', textoAtual.textContent);

    // Verifica se o usuário inseriu um novo texto e atualiza o conteúdo
    if (novoTexto !== null) {
        if (novoTexto.trim() === '') {
            alert('[ERRO] Por favor, digite o novo texto')
        } else {
            textoTarefa.textContent = novoTexto
        }
    }
}

function excluir(botaoExcluir) {
    const itemLista = botaoExcluir.parentNode
    const confirmar = window.confirm('Tem certeza que deseja excluir essa tarefa?')
    if (confirmar) {
        itemLista.remove()
    }
}

function concluir(botaoConcluir) {
    const itemLista = botaoConcluir.parentNode
    const textoTarefa = itemLista.querySelector('.textoTarefa').textContent
    const tarefaC = document.createElement('li')
    tarefaC.textContent = textoTarefa
    tarefaC.innerHTML += ' ✔️'
    listaC.appendChild(tarefaC)
    itemLista.remove()
}

function checarTecla(event) {
    if(event.key === 'Enter') {
        adicionar()
    }
}