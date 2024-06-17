palavra = 'COMPUTADOR'
function verificarLetra(){
    letraRecente = document.getElementById('letraEnviada').value.toUpperCase()
    posicaoLetraRecente = []
    for (i=0; i<palavra.length; i++){
        if (palavra[i] == letraRecente){
            posicaoLetraRecente.push(i)
        }
    }
        if(posicaoLetraRecente.length == 0){
            document.getElementById('letraRecente').innerHTML = 'Não temos a letra '+letraRecente+' na palavra!'
        }
        else{
            document.getElementById('letraRecente').innerHTML = 'A letra '+letraRecente+' está presente na(s) posição(ões) '+posicaoLetraRecente
        }
}