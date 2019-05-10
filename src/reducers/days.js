const appInitialState = { days: 0 }

const days = (state = appInitialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('click INC')
      return Object.assign({}, { days: state.days + 1 })
    case 'DECREMENT':
      console.log('click DEC')
      return Object.assign({}, { days: state.days + (state.days > 0 ? -1 : 0) })
    default:
      return state
  }
}

export default days
