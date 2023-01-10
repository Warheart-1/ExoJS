const list = document.getElementById('list') as HTMLUListElement
const addToListText = document.getElementById('add-to-list') as HTMLInputElement
const addBtn = document.getElementById('add-btn') as HTMLButtonElement
const removeBtn = document.querySelectorAll('.remove') as NodeListOf<HTMLLIElement>

let todos : string[] = []

addBtn.addEventListener('click', () => {
  addToList(addToListText.value, 'add')
  addToListText.value = ''
})

addToListText.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addToList(addToListText.value, 'add')
    addToListText.value = ''
  }
})

removeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeItem(btn)
  })
})

function addToList (text: string, action? : string ) 
{
  const li = document.createElement('li')
  li.innerText = text
  li.classList.add('remove')
  li.addEventListener('click', () => {
    removeItem(li)
  })
  list.appendChild(li)
  if(action === "add"){
    saveToLocalStorage(text, 'add')
  }
}

function removeItem (item: HTMLLIElement)
{
  item.remove()
  saveToLocalStorage(item.innerText, 'remove')
}

function saveToLocalStorage(text : string, action : string) 
{
  if (action === 'remove') {
    todos = todos.filter((todo) => {
      return todo !== text
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  if(action === 'add'){
    todos.push(text)
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

function getFromLocalStorage()
{
  const reference = localStorage.getItem('todos')
  if (reference) {
    todos = JSON.parse(reference)
    todos.forEach((todo) => {
      addToList(todo)
    })
  }
}

window.addEventListener('load', () => {
  getFromLocalStorage()
})

export {}
