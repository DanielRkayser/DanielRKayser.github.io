function mudar(){
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    document.getElementById("caixa").style.backgroundColor = 'rgb('+R+', '+G+', '+B+')';
    document.getElementById("texto").innerHTML = ''+R+', '+G+', '+B+'';
}
numero = 0;

setInterval(() => {
    mudar();
});
