function carregar() {


    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()

    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA

        img.src = 'img/manha.png'
        document.body.style.background = '#eeb75c'


    } else if (hora >= 12 && hora < 18) {
        //boa tarde

        img.src = 'img/tarde.png'
        document.body.style.background = '#c6d1e0'
    } else {
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#7f6196'


    }

}