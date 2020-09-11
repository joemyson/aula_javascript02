function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert('[ERRO]Verifica os dados e tente novamente!')


    } else {


        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        //  res.innerHTML = `Idade calculada:${idade}`
        var gênero = ''

        //chamaada da imagem pelo javascript

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {

                // criança

                img.setAttribute('src', 'img/beber.png')


            } else if (idade < 21) {

                //jovem
                img.setAttribute('src', 'img/adolecenteMasc.png')

            } else if (idade < 50) {
                //adulto

                img.setAttribute('src', 'img/adultoMas.png')




            } else {

                //idoso
                img.setAttribute('src', 'img/idosoMasc.png')



            }




        } else if (fsex[1].checked) {


            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'img/beber.png')



            } else if (idade < 21) {

                //jovem
                img.setAttribute('src', 'img/adolecenteFem.png')


            } else if (idade < 50) {
                //adulto


                img.setAttribute('src', 'img/adultoFem.png')



            } else {

                //idoso

                img.setAttribute('src', 'img/idosoFem.png')

            }



        }
        res.style.textealign = 'center' // centralizado texto pelo javascript
        res.innerHTML = `detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }

}