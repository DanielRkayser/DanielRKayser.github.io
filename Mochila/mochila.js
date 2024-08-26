mochila = []

function update(){
    document.getElementById('capacidade').innerHTML = '('+mochila.length+'/7 itens)'
    document.getElementById('item').value = ''
    html = ''
    for(i=0; i<mochila.length; i++){
        html += `<div class='conteudo'>
                    <div id="item`+i+`">`+mochila[i]+`</div>
                    <button onclick="edit(`+i+`)">E</button>
                    <button onclick="remove(`+i+`)">X</button>
                </div>`
    }
    document.getElementById('itens').innerHTML = html
}

function add(){
    item = document.getElementById('item').value
    
    if(validate()){
        if(mochila.length < 7   ){
            mochila.push(item)
            update()
        }else{
            alert('A mochila está cheia.')
        }
    }
    
}

function remove(i){
    mochila.splice(i,1)
    update()
}

function edit(i){
    if(document.getElementById('item'+i).innerHTML == mochila[i]){
        document.getElementById('item'+i).innerHTML = '<input id="editado" type="text" value="'+mochila[i]+'">'
    }else{
        item = document.getElementById('editado').value
        if(validate()){
            mochila[i] = item
            update()
        }
        
    } 
}

function validate(){
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()

    if(item == ''){
        alert('Campo vazio')
        return false
    }else if(mochila.indexOf(item) != -1){
        alert('Este item já está na lista.')
        return false
    }else{
        return true
    }
    
}