const tabelaValores = [1, 3, 8, 6, 9, 4, 16, 21]
var tabelaPares = []
var tabelaImpares = []
var c = 0

do{
    if(tabelaValores[c]%2 !== 0) {
        tabelaImpares.push(tabelaValores[c])
    }
    else{
        tabelaPares.push(tabelaValores[c])
    }
    c = c++
}while (c <= tabelaValores.length)
console.log(tabelaValores[c])

