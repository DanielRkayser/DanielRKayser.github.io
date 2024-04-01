mochila = []
function add(){
    item = document.getElementById('item').value
    mochila.push(item)
    document.getElementById('itens').innerHTML = mochila

html = ""
for(i=0; i<mochila.length; i++){
    html += '<div>' +mochila[i]+'<button onclick="remove()">Remover</button></div>'

document.getElementById('itens').innerHTML = html

}
}