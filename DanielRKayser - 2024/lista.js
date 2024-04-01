frutas = ['Morango', ' Maçã', ' Abacate']
document.write('Lista completa: '+frutas)
document.write('<br>Específica: '+frutas[2])
document.write('<br>Posição: ' +frutas.indexOf(' Abacate'))
document.write('<br>Tamanho da lista: ' +frutas.length)

frutas.push(' Uva')
document.write('<br>Lista (nova) completa: '+frutas)
frutas[1] = ' Pêra'
document.write('<br>Lista (nova mais nova) completa: '+frutas)
//frutas[7] = 'Cacau'

//DELETAR ITENS =
//frutas.pop() //última
//frutas.shift() //primeira
//frutas.splice(2, 1) //sua escolha
//frutas.splice(frutas.indexOf('Nome do item'),1) // melhor q o de cima

//ORDENAR
//fruta.sort() // alfabético
//fruta.reverse() // deixa ao contrário
//fruta.sort().reverse() alfabeto ao contrário

//ALEATÓRIOS
alert(Math.floor(Math.random() * 5 + 1))
alert(Math.floor(Math.random() * 10 - 5)) //negativos