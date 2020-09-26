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
function inlista(n, l) {

    /*realizar busca de numero */

    if (l.indexOf(Number(n)) != -1) {


        return true


    } else {
        return false
    }


}







function adcionar() {
    /*atributo 'função numero() recebendo valor  (num) e diferente da função inlista()*/


    if (numero(num.value) && !inlista(num.value, valores)) {


        /*valor atribuido para se adicionado*/

        valores.push(Number(num.value))

        /*criando elemento */

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`

        //adicionar na lista
        lista.appendChild(item)

        //limpaa o resultado ao apos incluido outro valor
        res.innerHTML = ''


    } else {


        window.alert('valor invalido ou ja encontrado na lista')
    }

    //esse comando faz com que limpe o campo prennchido e aguarda o proxima inclusão
    num.value = ''
    num.focus()



}

function Finalizar() {

    // validação de valores incluido que não esteja vazio

    if (valores.length == 0) {

        window.alert('Adicione valores antes de finalizar')

    } else {

        // contado total de elementos incluidos 

        let total = valores.length


        //maior e menor valor
        let maior = valores[0]
        let menor = valores[0]

        // incluido soma dos valores incluidos
        let soma = 0
        let media = 0


        //loop para define o maior e menor numero e somas de todos os valores 

        for (let pos in valores) {
            //loop da soma dos valores iniciado
            soma += valores[pos]

            //loop dos valores menor e maior iniciado

            if (valores[pos] > maior) {

                maior = valores[pos]
            }
            if (valores[pos] < menor) {

                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''

        // texto do total de valores incluidos 
        res.innerHTML += `<p> Ao todo , temos ${total} números cadastrados.</p>`

        //texto dos valores menor e maior
        res.innerHTML += `<p> o maior valor informado foi ${maior} </P}`
        res.innerHTML += `<p> o menor valor informado foi ${menor} </P}`

        // texto da soma de valores
        res.innerHTML += `<p> Somando toos os valores, temos ${soma} .</p>`
        //texto informado media dos valores 

        res.innerHTML += `<p> A media dos valores informado e ${media}.`


    }










}












