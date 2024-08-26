function jogarDado(){
    dados = parseInt(document.getElementById('dado').value)
    lados = parseInt(document.getElementById('lado').value)
    numeros = []
    for(i=0; i<dados; i++){
        atual = Math.floor(Math.random() * lados+1)
        numeros.push(atual)
    }
    document.getElementById('resultado').innerHTML = numeros
}