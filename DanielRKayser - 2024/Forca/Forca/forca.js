//new Date() bagulho doido
alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
palavras = ['COMPUTADOR', 'VASCO', 'CAPIVARA', 'CORALINE', 'RELOGIO', 'TECLADO', 'SIM', 'PABLO VEGETTI']
palavra = palavras[Math.floor(Math.random() * palavras.length)]
posicoes = []
vida = 5
tempo = 0
setInterval(function(){
    tempo++
},1000)
erros = []
for(i=0; i<palavra.length; i++){
    if(palavra[i] == "-" || palavra[i] == " "){
        posicoes.push('-')
    }
    else{
    posicoes.push('_')
    }
}
document.getElementById('resultado').innerHTML = 'VIDA: '+ vida+ '<br>ERROS:'+erros+'<br>PALAVRA: '+posicoes.join(' ')
function verificarLetra(){
    letraRecente = document.getElementById('letraEnviada').value.toUpperCase()
    letraEncontrada = false
    document.getElementById('letraEnviada').value = ''
    if(letraRecente.length > 1){
        if(letraRecente == palavra){
           telaVitoria()
        }
        else{
            telaDerrota()
        }
    }
    else if(alfabeto.indexOf(letraRecente) == -1){
        alert('Símbolo Inválido, Insira uma letra do alfabeto.')
    }
    else{
        if(letraRecente.length > 1){
            if(letraRecente = palavra){
                posicoes = palavra
            }
        }
        for (i=0; i<palavra.length; i++){
            if (palavra[i] == letraRecente){
                posicoes[i] = letraRecente
                letraEncontrada = true
            }
        }
        if(letraEncontrada == false){
            if(erros.indexOf(letraRecente) != -1){
                alert('Já errou essa letra!')
            }
            else{
            erros.push(letraRecente)
            vida--
            }
        }   
        if(posicoes.indexOf('_') == -1){
            telaVitoria()
        }
        else if(vida <= 0){
            telaDerrota()
        }
        else{
        document.getElementById('resultado').innerHTML = 'VIDA: '+ vida+ '<br>ERROS:'+erros+'<br>PALAVRA: '+posicoes.join(' ')
        }
    }
}
function telaDerrota(){
    document.getElementById('resultado').innerHTML = '<h1>VOCÊ PERDEU</h1><br>A palavra era <b>'+palavra+'</b>'
}
function telaVitoria(){
    document.getElementById('resultado').innerHTML = '<h1>VOCÊ VENCEU!</h1>Parabéns por acertar a palavra <b>'+palavra+'</b>'
}