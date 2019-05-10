const appInitialState = { title: '' }

const title = (state = appInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return Object.assign({}, { title: action.title })
    default:
      return state
  }
}

export default title
