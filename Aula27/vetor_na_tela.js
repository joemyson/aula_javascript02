let valores = [8, 2, 5, 4, 9]
console.log(valores)
/*
for (let pos = 0; pos < valores.length; pos++) {





    console.log(`Aposição ${pos} tem o valor  ${valores[pos]}`)
}*/

for (let pos in valores) {


    console.log(valores[pos])


}