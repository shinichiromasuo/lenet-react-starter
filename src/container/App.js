// @flow
import React from 'react'
import ToDo from '../component/ToDo.js'
import InputToDo from '../component/InputToDo'
import './App.modules.css'
import type { ToDoType } from '../component/InputToDo'

type Props = {}
type State = {
  toDoList: ToDoType[]
}
class ContainerComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      toDoList: []
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <InputToDo
            addToDo={toDo =>
              this.setState(state => ({
                toDoList: state.toDoList.concat(toDo)
              }))
            }
          />
        </div>
        <div className="ToDo">
          <ToDo
            deleteToDo={index =>
              this.setState(state => ({
                toDoList: state.toDoList.filter((_x, i) => i !== index)
              }))
            }
            toDoList={this.state.toDoList}
          />
        </div>
      </div>
    )
  }
}

export default ContainerComponent
