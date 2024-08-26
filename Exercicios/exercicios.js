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

function ex9(){



}

function ex10(){



}