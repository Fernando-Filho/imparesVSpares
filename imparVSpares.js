const tabelaValores = [1, 3, 8, 6, 9, 4, 16, 21]
var tabelaPares = []
var tabelaImpares = []
for (c = 0; c <= (tabelaValores.length-1); c++){
    if      (tabelaValores[c]%2 !=0){tabelaPares.push(tabelaValores[c])}
    else    {tabelaImpares.push(tabelaValores[c])}
}
console.log(tabelaImpares)
console.log(tabelaPares)
console.log(c)