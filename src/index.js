import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppToDo from './container/AppToDo'
import * as serviceWorker from './serviceWorker'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import days from './reducers/days'
import toDoList from './reducers/toDoList'
import title from './reducers/title'
const RootReducer = combineReducers({ days, title, toDoList })

const store = createStore(RootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppToDo />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
