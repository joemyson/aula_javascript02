
function calcular() {

    let ini = document.getElementById('txtini')
    let fIM = document.getElementById('txtfim')
    let PAS = document.getElementById('txtpasso')
    let res = document.getElementById('result')




    if (ini.value.length == 0 || fIM.value.length == 0 || PAS.value.length == 0) {

        window.alert(`[ERRO] Falta dados!`)

    } else {

        res.innerHTML = `contador : `
        let i = Number(ini.value)
        let f = Number(fIM.value)
        let p = Number(PAS.value)

        for (let c = i; c <= f; c += p) {

            result.innerHTML += `${c} \u{1f449} `
        }

        res.innerHTML += `\u{1f3C1}`

    }








}