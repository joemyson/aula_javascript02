var agora = new Date()
var hora = agora.getHours()

console.log(`agora são ${hora} horas`)
if (hora > 13) {


    console.log('boa tarde!')
} else if (hora >= 18) {


    console.log('boa noite')
} else {
    console.log('bom dia')
}