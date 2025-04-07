tela('login') //mudar para tela('login')
contas = []
emailblock = []
posts = []
function tela(pagina){
    document.getElementById('criarconta').style.display= "none"
    document.getElementById('index').style.display= "none"
    document.getElementById('login').style.display= "none"
    document.getElementById('criarconteudo').style.display= "none"
    document.getElementById('e404').style.display= "none"
    document.getElementById(pagina).style.display= "flex"
}
function criarConta(){
    _username = document.getElementById('username').value
    _idade = parseInt(document.getElementById('idade').value)
    _email = document.getElementById('email').value
    _senha = document.getElementById('senha').value
    _senhaconf = document.getElementById('confsenha').value

    if(document.getElementById('gen_m').checked){
        _genero = 'M'
    }else if(document.getElementById('gen_f').checked){
        _genero = 'F'
    }else{
        _genero = 'Outro'
    }
    validarConta()
    if(erros.length ==0){
        conta = {
            username: _username,
            idade: _idade,
            email: _email,
            senha: _senha,
            genero: _genero,
            status: "on"
        }
        contas.push(conta)
        alert('Bem vindo, ' + _username)
        document.getElementById('username').value = ''
        parseInt(document.getElementById('idade').value) = ''
        document.getElementById('email').value = ''
        document.getElementById('senha').value = ''
        document.getElementById('confsenha').value = ''
        tela('index')
    }
    else{
        for(i=0; i<erros.length; i++){
            alert(erros[i])
        }
    }
}
function validarConta(){
    erros=[]
    if(_username == '' || _username == ' '){
        erros.push('Insira um nome de usuário')
    }
    if(_username.toUpperCase() == "ECHOWAVE" || _username.toUpperCase() == "ECHO WAVE"){
        erros.push('Você não é o site >:(')
    }
    if(isNaN(_idade) == true){
        erros.push('Insira uma idade')
    }
    if(_idade < 13){
        erros.push('Idade minima é 13 anos')
        emailblock.push(_email)
    }
    if(_email == '' || _email == ' '){
        erros.push('Insira um email')
    }
    if(_senha.length < 7){
        erros.push('Senha muito curta')
    }
    if(_senha != _senhaconf){
        erros.push('Confirmação de senha inválida')
    }
    for(i=0; i<contas.length; i++){
        if(_email == contas[i].email){
            erros.push('E-Mail já utilizado')
        }
        if(_username == contas[i].username){
            erros.push('Nome de usuário já utilizado')
        }
    }
    for(i=0; i<emailblock.length; i++){
        if(_email == emailblock[i]){
            erros.push('Email bloqueado por causa da idade.')
        }
    }
}
function entrarconta(){
    emaillogar = document.getElementById('emaillogar').value
    senhalogar = document.getElementById('senhalogar').value
    processo = -1
    for(i=0;i<contas.length;i++){
        if(emaillogar == contas[i].email){
            processo = i
        }
    }
    if(processo != -1){
        if(contas[processo].senha == senhalogar){
            contas[processo].status = "on"
            alert('Bem vindo, '+contas[processo].username)
            document.getElementById('emaillogar').value = ''
            document.getElementById('senhalogar').value = ''
            tela('index')
        }
        else{
            alert('Senha incorreta')
        }
    }
    else{
        alert('E-mail não encontrado')
    }
}
function sairconta(){
    for(i=0;i<contas.length;i++){
        if(contas[i].status == "on"){
            alert("Até mais, "+contas[i].username)
            contas[i].status = "off"
            tela('login')
        }
    }
}
function envpost(){
    _post = document.getElementById('cctxt').value
    for(i=0;i<contas.length;i++){
        if(contas[i].status == "on"){
            _remetente = contas[i].username
        }
    }
    post = {
        remetente: _remetente,
        conteudo: _post
    }
    posts.push(post)
    _post = ''
    atualizarpagina()
}
function atualizarpagina(){
    html = `<div class="postxt">
                <label id="remetente">Echo Wave</label>
                <br> <hr> <br>
                <p>Você deve estar se perguntado "que droga de site é esse?!", certo? Pois bem, esse site é um fórum de discussão geral com um único tópico que é escolhido por... Bem, ninguém. Siga o fluxo da discussão e contribua ou fale o que quiser e que se exploda o resto!</p>
                <b>REGRAS:</b>
                <ul>
                <li>Se divirta (opcional)</li>
                </ul
            </div>`
    for(i=0; i<posts.length; i++){
        html += `<div class="postxt" id="postxt`+i+`">
                    <label id="remetente">`+posts[i].remetente+`</label>
                    <br> <hr> <br>
                    <label>`+posts[i].conteudo+`</label>
                </div>`
    }
    document.getElementById('hindex').innerHTML = html
}