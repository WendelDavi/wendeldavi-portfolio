function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var horaFormatada = `${hora}:${String(minutos).padStart(2, '0')}`;
    msg.innerHTML = `Agora são ${horaFormatada}.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(78, 246, 237)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(232, 162, 32)'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(52, 33, 179)'
    }
}