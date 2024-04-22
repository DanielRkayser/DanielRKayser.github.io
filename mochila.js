mochila = []

function update(){
    document.getElementById('capacidade').innerHTML = mochila.length + '/7 itens'
    html = ""
    for(i=0; i<mochila.length; i++){
        html += `<div>
            <div id='item`+i+`'>` +mochila[i]+`</div>
            <button onclick="remove(`+i+`)">Remover</button>
            <button onclick="edit(`+i+`)">Editar</button>
        </div>`
    }
    document.getElementById('itens').innerHTML = html
    document.getElementById('item').value = ''
}
function add(){
    item = document.getElementById('item').value
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()
    if(item == ' ' || item == ''){
        alert('Campo vazio')
        document.getElementById('item').value = ''
    }
    else if(mochila.indexOf(item) != -1){
        alert('Já está na lista')
        document.getElementById('item').value = ''
    }
    else if(mochila.length > 6){
        alert('Mochila lotada')
    }
    else{
    mochila.push(item)
    update()
    }
}
function remove(i){
    mochila.splice(i,1)
    update()
}
function edit(i){
    update()
    if(document.getElementById('item'+i).innerHTML == mochila[i]){
        document.getElementById('item'+i).innerHTML = '<input type="text" id="edited" value='+mochila[i]+'>'
    }
    else{
        edited = document.getElementById('edited').value
        mochila[i] = edited
        update()
    }
}