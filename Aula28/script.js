// primeniro adicionar as variaveis 

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {

        /*esta função vai verifica se o valor informado e um 'numero' e esta entre 1 e 100*/
        return true



    } else {
        return false
    }

}
function islista(n, l) {

    /*realizar busca de numero */

    if (l.indexOf(Number(n)) != -1) {


        return true


    } else {
        return false
    }


}







function adcionar() {

    if (numero(num.value) && !inlista(num.value, valores)) {

        /*atributo 'função numero() recebendo valor  (num) e diferente da função inlista()*/


        window.alert('tudo ok')



    } else {


        window.alert('vaor invalido ou ja encontrado na lista')
    }



}












