export const addToDo = toDo => ({
  type: 'ADD_TODO',
  toDo
})

export const filter = index => ({
  type: 'FILTER_TODO',
  index
})

export const changeTitle = title => ({
  type: 'CHANGE_TITLE',
  title
})

export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})
