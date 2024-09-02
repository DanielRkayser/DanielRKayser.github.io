function ex1(){
    nome = document.getElementById('ex1-nome').value
    document.getElementById('ex1-saida').innerHTML = 'Olá '+nome+'!'
}

function ex2(){
    n1 = parseFloat(document.getElementById('ex2-a').value)
    n2 = parseFloat(document.getElementById('ex2-b').value)
    document.getElementById('ex2-saida').innerHTML = n1 + n2
}

function ex3(){
    n = parseFloat(document.getElementById('ex3-numero').value)
    if(n < 0){
        document.getElementById('ex3-saida').innerHTML = n + ' é negativo'
    }
    else if(n > 0){
        document.getElementById('ex3-saida').innerHTML = n + ' é positivo'
    }
    else{
        document.getElementById('ex3-saida').innerHTML = n + 'não é nada'
    }
}

function ex4(){
    txt = document.getElementById('ex4-texto').value
    document.getElementById('ex4-saida').innerHTML = txt.length
}

function ex5(){
    n = parseInt(document.getElementById('ex5-numero').value)
    na = []
    for(i=1;i<n+1;i++){
        na.push(i)
    }
    document.getElementById('ex5-saida').innerHTML= na
}  

function ex6(){

    cor = document.getElementById('ex6-cor').value
    document.getElementById('caixa').style.backgroundColor = cor

}

function ex7(){

    document.getElementById('ex7-saida').innerHTML = Math.floor(Math.random() * 20 + 1)

}
listaEX8 = []
function ex8(){

    numero = document.getElementById('ex8-numero').value
    listaEX8.push(numero)
    document.getElementById('ex8-saida').innerHTML= listaEX8

}
listaEX9 = []
function ex9(){

    numero = parseInt(document.getElementById('ex9-numero').value)
    listaEX9.push(numero)
    ex9r1 = listaEX9.length
    ex9r2 = Math.max(...listaEX9)
    ex9r3 = Math.min(...listaEX9)
    ex9r4 = 0
    for(i=0; i<listaEX9.length; i++){
        ex9r4 = listaEX9[i] + ex9r4
    }
    ex9r5 = ex9r4 / listaEX9.length
    document.getElementById('ex9-saida').innerHTML= 'LISTA: ' + listaEX9 + '<br>TAMANHO DA LISTA: ' + ex9r1 + '<br>MAIOR NUMERO: ' + ex9r2 + '<br>MENOR NUMERO:' + ex9r3 + '<br>SOMA DOS NUMEROS: ' + ex9r4 + '<br>MEDIA DOS NUMEROS: ' + ex9r5
}
function ex10(){

    texto = document.getElementById('ex10-txt').value.toUpperCase()
    ex10r1 = texto.length
    ex10r2a = texto.split(' ')
    ex10r2b = ex10r2a.length
    ex10r3 = texto[0]
    ex10r4 = texto[texto.length-1]
    ex10r5 = 0
    for(i=0;i<texto.length;i++){
        if(texto[i] == 'A' ||texto[i] == 'E' || texto[i] == 'I' ||  texto[i] == 'O' || texto[i] == 'U'){
            ex10r5 = ex10r5 + 1
        }
    }
    document.getElementById('ex10-saida').innerHTML= 'TEXTO: ' + texto + '<br>QUANTIDADE DE CARACTERES: ' + ex10r1 + '<br>QUANTIDADE DE PALAVRAS: ' + ex10r2b + '<br>PRIMEIRA LETRA: ' + ex10r3 + '<br>ULTIMA LETRA: ' + ex10r4 + '<br>QUANTIDADE DE VOGAIS: ' + ex10r5
}