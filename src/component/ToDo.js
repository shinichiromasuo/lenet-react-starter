// @flow
import React from 'react'
import './ToDo.modules.css'
import type { ToDoType } from './InputToDo'

type Props = {
  toDoList: ToDoType[],
  deleteToDo: (index: number) => void
}

class ToDo extends React.Component<Props, any> {
  state = {
    index: 0
  }
  constructor(props: Props) {
    super(props)
    ;(this: any).handleTitleDelete = this.handleTitleDelete.bind(this)
  }

  handleTitleDelete(index: number) {
    const { deleteToDo } = this.props
    return () => deleteToDo(index)
  }

  render() {
    return (
      <div>
        {this.props.toDoList.map((item, index) => (
          <div className="ToDo__item" key={index}>
            Days: {item.days} Title: {item.title}
            <div style={{ flexGrow: 1 }} />
            <button className="Button" onClick={this.handleTitleDelete(index)}>
              delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default ToDo
