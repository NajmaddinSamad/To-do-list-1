const youWillInput = document.querySelector('.you_will')
const enterHereBtn =document.querySelector('.enter_here')
const createLists = document.querySelector('.create_lists')
enterHereBtn.addEventListener('click', addHereBtn)
createLists.addEventListener('click', checkAndDelete)
function addHereBtn (){
    const createdDiv = document.createElement('div')
    createdDiv.classList.add('created')
    const todoOpeningLi = document.createElement('li')
    todoOpeningLi.classList.add('todo_opening')
    todoOpeningLi.innerText = youWillInput.value
    createdDiv.appendChild(todoOpeningLi)
    createLists.appendChild(createdDiv)
    const editBtn = document.createElement('button')
    editBtn.className = "you_will_btn"
    editBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('you_did_btn')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    createdDiv.appendChild(editBtn)
    createdDiv.appendChild(deleteBtn)
    youWillInput.value =''
}
function checkAndDelete(e){
    const clickedElements = e.target
    if(clickedElements.classList.contains('you_will_btn'))
    clickedElements.parentElement.classList.toggle('done')
    if(clickedElements.classList.contains('you_did_btn'))
    clickedElements.parentElement.classList.add('delete')}
