const addToDoButton = document.getElementById('addToDo')
const toDoContainer = document.getElementById('toDoContainer')
const inputField = document.getElementById('inputField')

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph)
    inputField.value = '';

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
})
