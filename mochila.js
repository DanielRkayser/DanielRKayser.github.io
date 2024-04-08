mochila = []

function update(){
    html = ""
    for(i=0; i<mochila.length; i++){
        html += '<div>' +mochila[i]+'<button onclick="remove('+i+')">Remover</button></div>'
    }
    document.getElementById('itens').innerHTML = html
}
function add(){
    item = document.getElementById('item').value
    mochila.push(item)
    update()
}
function remove(i){
    mochila.splice(i,1)
    update()
}