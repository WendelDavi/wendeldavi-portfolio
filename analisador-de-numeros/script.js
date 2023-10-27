let txtn = document.getElementById('txtn')
let val = []
let res = document.getElementById('res')
let l = document.getElementById('txtl')

function adicionar() {
    let n = parseInt(txtn.value);

    if (isNaN(n)) { // Validação de campos preenchidos
        alert('[ERRO] Digite um número!')
    } else if (n < 1 || n > 100) { // Validação de valor
        alert('[ERRO] Escolha um número entre 1 e 100!')
    } else if (val.indexOf(n) > -1) { // Validação de repetição de números
        alert('[ERRO] O número já se encontra na lista!')
    } else {
        val.push(n)
        let item = document.createElement('option')
        item.text = `Número ${n} adicionado`
        res.innerHTML = ''
        l.appendChild(item)
    }
    txtn.value = ''
    txtn.focus()
}

function checarTecla(event) {
    if (event.key === 'Enter') {
        adicionar();
    }
}

function finalizar() {
    if (l.options.length == 0) { // Validação de itens na lista
        alert('[ERRO] Adicione números antes de finalizar!')
    } else {
        val.sort(function(a, b) { // Organizar elementos do vetor em ordem crescente
            return a - b;
        });
        // Referências
        let qtd = val.length;
        let maior = val[qtd - 1]
        let menor = val[0]
        let soma = 0
        for (let i = 0; i < val.length; i++) {
            soma += val[i]
        }
        let med = soma / qtd
        
        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${qtd} números;</p>`
        res.innerHTML += `<p>O maior valor é ${maior};</p>`
        res.innerHTML += `<p>O menor valor é ${menor};</p>`
        res.innerHTML += `<p>O soma entre todos os valores é ${soma};</p>`
        res.innerHTML += `<p>E a média entre os valores é ${med.toFixed(2)}.</p>`
    }
    txtn.focus()
}

