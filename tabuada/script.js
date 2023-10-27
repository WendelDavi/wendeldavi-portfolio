function tabuada() {
    var n = parseInt(document.getElementById('numero').value)
    var lista = document.getElementById('tabuada')

    if (isNaN(n)) {
        alert('[ERRO] Por favor, preencha o campo.')
    } else {
        lista.innerHTML = 'Tabuada de ' + n + ':'

        for (var c = 1; c <= 10; c++) {
            r = n * c
            var item = document.createElement('li')
            item.textContent = `${n} x ${c} = ${r}`
            lista.appendChild(item)
        }
    }
}