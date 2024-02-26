/*
alert('Olá mundo!')
a = 3
b = 5
alert('resultado é: '+ (a+b))
alert('o resultado NÃO é:' + a+b)
c = "essas são "
d = "2 mensagens unidas"
alert(c+d)
resultado = a+b
alert('feito diferente, mas o resultado ainda é ' + resultado)
nome = "Daniel"
idade = 12
cidade = "Canoas"
trinta_e_cinco = false
console.log(typeof(idade))
*/
function calcular(){
    n1 = parseFloat(document.getElementById('n1').value) //parseInt para inteiro, parseFloat para quebrado
    n2 = parseFloat(document.getElementById('n2').value)
    //alert(n1 + n2)
    document.getElementById('resultado').innerHTML = n1 + n2
}
function acessar(){
    nome = document.getElementById('nome').value
    idade = parseInt(document.getElementById('idade').value)
    document.getElementById('acesso').innerHTML = 'Bem vindo, ' + nome
}