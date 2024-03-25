
texto = "Olá, meu nome é Daniel"
document.write('Texto: ' + texto)
document.write('<br>Tamanho: ' + texto.length)
document.write('<br>Primeira letra: ' + texto[0])
document.write('<br>Última letra: ' + texto[texto.length - 1] + '<br>')

nome1 = 'bob'
nome2 = 'CARLOS'

nome1 = nome1.toUpperCase()
nome2 = nome2.toLowerCase()

palavras = texto.split(' ')
document.write(palavras)

for(i=1; i<6; i++){
    document.write('Oi ' + i +'<br>')
}
document.write('<br><br><br><br><br><br><br><br>')
texto = 'Olá mundo!'
for(i=0; i<texto.length; i++){
    document.write(texto[i] +'<br>')
}

while(true){
    document.write('bomba')
}
