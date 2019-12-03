export function getOneTypeTasks (type, arr) {
  let result = JSON.parse(localStorage.getItem('tasks') || '[]')
  for (let item in result) {
    result[item].date = new Date(result[item].date)
  }
  let items = result.filter(item => item.type === type)
  for (let item in items) {
    arr.unshift(items[item])
  }
  return arr
}
export function addTask (state) {
  let taskID = JSON.parse(localStorage.getItem('ID') || 0)
  let obj = {
    id: taskID++,
    title: state.editing.text,
    date: new Date(),
    done: false,
    deleted: false,
    type: state.selected.todo.name
  }
  localStorage.setItem('ID', JSON.stringify(taskID++))
  let list = JSON.parse(localStorage.getItem('tasks') || '[]')
  list.unshift(obj)
  localStorage.setItem('tasks', JSON.stringify(list))
  let data = JSON.parse(localStorage.getItem('tasks') || '[]')
  let newData = data[0]
  newData.date = new Date(newData.date)
  return newData
}
export function deleteTask (task) {
  let list = JSON.parse(localStorage.getItem('tasks') || '[]')
  for (let item in list) {
    if (list[item].id === task.id) {
      list[item].deleted = true
    }
  }
  localStorage.setItem('tasks', JSON.stringify(list))
}
export function updateTask (task) {
  let list = JSON.parse(localStorage.getItem('tasks') || '[]')
  for (let item in list) {
    if (list[item].id === task.id) {
      list[item].done = !task.done
    }
  }
  localStorage.setItem('tasks', JSON.stringify(list))
}
