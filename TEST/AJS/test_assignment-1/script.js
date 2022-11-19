const listItem = document.querySelector("#todo-holder")
const todoInput = document.querySelector("#todo-input")
const todoBtn = document.querySelector("#add-todo")
let todoList = []
for(let i=0;i<window.localStorage.length;i++){
    todoList.push(window.localStorage.getItem(`${i}`))
}
todoBtn.addEventListener("click", addtodo)
let k = 0
function addtodo(){
    todoList.push(todoInput.value)
    window.localStorage.setItem(`${k++}`,`${todoInput.value}`)
    let todoTemplate = `<li>${todoInput.value}</li>`
    listItem.innerHTML += todoTemplate
    todoInput.value = ""
}
window.addEventListener("load",listTodo)
function listTodo(){
    for(let todo of todoList){
        let todoTemplate = `<li>${todo}</li>`
        listItem.innerHTML += todoTemplate
    }
}