telacadastro()
/*pessoa = {
    nome: 'Daniel',
    idade: '12',
    genero: 'M'
}
//pessoa.nacionalidade = erro, pois não temos a informação

pessoa = {
    nome: 'Bob',
    idade: '400',
    genero: 'sim'
}
document.write(pessoa.nome) é Bob, pois substitui outro
======| COMO CORRIGIR? |=====
pessoas = []
pessoa = {
    nome: 'Daniel',
    idade: '12',
    genero: 'M'
}
pessoas.push(pessoa)
pessoa = {
    nome: 'Daniel(a)', //sou muito criativo
    idade: '12',
    genero: 'F'
}

pessoas.push(pessoa)
//pessoa.nome não funciona mais
document.write(pessoas[0].nome)
*/
pessoas = []
function telacadastro(){
    document.getElementById('cadastro').style.display = 'block'
    document.getElementById('login').style.display = 'none'
    document.getElementById('sumir').style.display = 'none'
}
function telalogin(){
    document.getElementById('login').style.display = 'block'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('sumir').style.display = 'none'
}
function cadastrar(){
    _nome = document.getElementById('nome').value
    _idade = document.getElementById('idade').value
    _email = document.getElementById('email').value
    _senha = document.getElementById('senha').value
    _username = document.getElementById('username').value
    _confsenha = document.getElementById('confsenha').value
    _genero = ''
    if(document.getElementById('gen_M').checked){
        _genero = 'M'
    }
    else if(document.getElementById('gen_F').checked){
        _genero = 'F'
    }
    else if(document.getElementById('gen_O').checked){
        _genero = 'Outro'
    }
    validarCadastro()
    if(erros.length == 0){
        pessoa = {
            username: _username,
            nome: _nome,
            idade: _idade,
            email: _email,
            senha: _senha,
            genero: _genero
        }
        pessoas.push(pessoa)
        document.getElementById('info').innerHTML = 'Login realizado com sucesso!'
    }
    else{
            document.getElementById('info').innerHTML = erros.join('<br>')
    }
}
function validarCadastro(){
    erros = []
    if(_nome == '' || _nome == ' '){
        erros.push('Insira um nome')
    }
    if(_username == '' || _username == ' '){
        erros.push('Insira um nome de usuário')
    }
    if(_idade == ''){
        erros.push('Insira uma idade')
    }
    if(_email == '' || _email == ' '){
        erros.push('Insira um email')
    }
    if(_senha.length < 4){
        erros.push('senha muito curta')
    }
    if(_senha != _confsenha){
        erros.push('Confirmação de senha inválida')
    }
    for(i=0; i<pessoas.length; i++){
        if(_email == pessoas[i].email){
            erros.push('E-Mail já está sendo utilizado')
        }
    }
    if(_genero != 'M' & _genero != 'F' && _genero && 'O'){
        erros.push('Selecione um gênero')
    }
}
function entrar(){
    email = document.getElementById('emaillogar').value
    senha = document.getElementById('senhalogar').value
    p = -1
    for(i=0; i<pessoas.length; i++){
        if(pessoas[i].email == email){
        p = i
        }
    }
    if(p != -1){
        if(pessoas[p].senha == senha){
            document.getElementById('info').innerHTML = 'Seja bem-vindo, ' + pessoas[p].nome
        }
        else{
            document.getElementById('info').innerHTML = 'Senha incorreta!'
        }
    }
    else{
        document.getElementById('info').innerHTML = 'E-Mail não encontrado!'
    }
}