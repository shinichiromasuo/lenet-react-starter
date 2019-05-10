const addTodo = (state = { toDoList: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { toDoList: state.toDoList.concat(action.toDo) }
    case 'FILTER_TODO':
      return { toDoList: state.toDoList.filter((_x, i) => i !== action.index) }
    default:
      return state
  }
}

export default addTodo
