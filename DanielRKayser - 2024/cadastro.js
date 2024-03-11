function acessar(){
    nome = document.getElementById('nome').value
    idade = parseInt(document.getElementById('idade').value)
    senha = document.getElementById('senha').value
    confsenha = document.getElementById('confsenha').value
    if(nome == ''){
        alert('NOME INVÁLIDO')
    }
    else if(!(idade > 0)){
        alert('IDADE INVÁLIDA')
    }
    else if(nome.length < 3){
        alert('NOME PRECISA DE NO MÍNIMO 3 CARACTÉRES')
    }
    else if(idade < 12){
        alert('ACESSO NEGADO, ' + nome + ', VOLTE DAQUI A ' +(12-idade)+ ' ANOS')
    }
    else if(senha.length < 8){
        alert('SENHA PRECISA DE NO MÍNIMO 8 CARACTÉRES')
    }
    else if(confsenha != senha){
        alert('CONFIRME A SENHA CORRETAMENTE')
    }
    else{
        document.getElementById('acesso').innerHTML = 'Bem vindo(a), ' + nome
    }
}