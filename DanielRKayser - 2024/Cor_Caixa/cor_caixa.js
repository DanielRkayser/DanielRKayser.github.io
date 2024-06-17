function pintarCaixa(){
    R = parseInt(document.getElementById("R_input").value)
    G = parseInt(document.getElementById("G_input").value)
    B = parseInt(document.getElementById("B_input").value)
    if(isNaN(R)){
        R = 0
    }
    if(isNaN(G)){
        G = 0
    }
    if(isNaN(B)){
        B = 0
    }
        document.getElementById('caixa').style.backgroundColor='rgb('+R+', '+G+', '+B+')'
}
function gerarCor(){
    R = Math.floor(Math.random() * 256)
    G = Math.floor(Math.random() * 256)
    B = Math.floor(Math.random() * 256)
    document.getElementById('caixa').style.backgroundColor='rgb('+R+', '+G+', '+B+')'
    document.getElementById('R_input').value = R
    document.getElementById('G_input').value = G
    document.getElementById('B_input').value = B
}
function modoLouco(){
    setInterval(gerarCor, 500)
}