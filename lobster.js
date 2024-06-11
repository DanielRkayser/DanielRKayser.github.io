function enviar(){
    if(document.getElementById('lobsterN').checked){
        alert('Nenhuma lagosta detectada')
    }
    else if(document.getElementById('lobsterS').checked){
        audio = new Audio('videoplayback.mp3')
        document.body.style.backgroundImage=`url(img/lobster.png)`
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.innerHTML = '<h1>LAGOSTA DETECTADA</h1>' 
        audio.play() 
        }
    else{
        alert('Selecione uma opção primeiro!')
    }
}