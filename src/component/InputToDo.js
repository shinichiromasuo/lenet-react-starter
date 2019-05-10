// @flow
import React, { Fragment } from 'react'
import './ToDo.modules.css'

export type ToDoType = {
  title: string,
  days: number
}

type Props = {
  addToDo: (toDo: ToDoType) => void
}

class InputToDo extends React.Component<Props, any> {
  state = {
    title: '',
    days: 0
  }
  handleTitleChange = (event: any) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = (event: MouseEventHandler) => {
    this.setState(state => ({
      title: (state.title = '')
    }))
    const { addToDo } = this.props
    event.preventDefault()
    addToDo({
      title: this.state.title,
      days: this.state.days
    })
  }

  handleDaysIncrement = () => {
    this.setState(state => ({
      days: state.days + 1
    }))
  }

  handleDaysDecrement = () => {
    this.setState(state => ({
      days: state.days + (state.days > 0 ? -1 : 0)
    }))
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title : {this.state.title} days : {this.state.days}:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <button type="submit">Send</button>
        </form>
        <button onClick={this.handleDaysIncrement}>increment</button>
        <button onClick={this.handleDaysDecrement}>decrement</button>
      </Fragment>
    )
  }
}

export default InputToDo
