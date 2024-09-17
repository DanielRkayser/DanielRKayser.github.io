function enviar(){
    audio = new Audio('audio.mp3')
    document.body.style.backgroundImage=`url(img/img_pedido1.png)`
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    audio.play()
    document.body.innerHTML = '<h1>FELIZ ANIVERSARIO!!</h1>'
}