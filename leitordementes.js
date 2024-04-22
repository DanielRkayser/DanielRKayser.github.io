function leramente(){
    numero = document.getElementById('numero').value
    if(numero == '' || numero == ' '){
        alert('Preencha o campo primeiro!')
    }
    else{
        setTimeout('Seu número é: ' + numero, 60000)
    }
}