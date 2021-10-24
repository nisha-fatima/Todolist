var list = document.getElementById("list");


function addTodo(){
    var todo_item = document.getElementById("todo-item");

    //create li tag with text code
    var li = document.createElement('li')
    li.className = "todo_container"
    var liPara = document.createElement('p')
    var liText = document.createTextNode(todo_item.value)
    liPara.className = "itemCont"
    liPara.appendChild(liText)
    li.appendChild(liPara)

    //create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.className="btn btn-danger faar1"
    delBtn.appendChild(delText)

     //create edit button

     var editBtn = document.createElement('button');
     var editText = document.createTextNode('EDIT')
     editBtn.appendChild(editText)
     editBtn.setAttribute("onclick","editItem(this)")
     editBtn.className = "btn btn-dark faar2"


    //  buttons container
    var btnContainer = document.createElement("div")
    btnContainer.className = "btnCont"
    btnContainer.appendChild(delBtn)
    btnContainer.appendChild(editBtn)

    li.appendChild(btnContainer)


    list.appendChild(li)
    
    
    todo_item.value = ""
}

function deleteItem(e){

    e.parentNode.remove()

}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val)

    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = ""

}