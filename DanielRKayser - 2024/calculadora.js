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
    if(n1 == 2 && n2==2){
        document.getElementById('resultado').innerHTML = '<img src="img/2mais2naofake.png" width="500px" height="500px">'
    }
    else if(n1==77 && n2==33 || n1==33 && n2==77){
        document.getElementById('resultado').innerHTML = '💯'
    }
    else{
        //alert(n1 + n2)
        document.getElementById('resultado').innerHTML = n1 + n2
    }
}
