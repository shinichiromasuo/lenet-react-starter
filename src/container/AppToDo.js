// @flow
import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { increment, decrement, addToDo, changeTitle, filter } from '../actions/toDoAction'

class ContainerComponent extends React.Component<any> {
  render() {
    const {
      days: { days },
      title: { title },
      toDoList: { toDoList }
    } = this.props.state
    return (
      <div>
        <div>
          Days: {days} Title: {title}
          <form
            onSubmit={e => {
              e.preventDefault()
              this.props.dispatch(
                addToDo({
                  days,
                  title
                })
              )
            }}
          >
            <input
              type="text"
              value={this.props.title}
              onChange={e => {
                this.props.dispatch(changeTitle(e.target.value))
              }}
            />
            <button type="submit">Send</button>
          </form>
          <button
            onClick={e => {
              this.props.dispatch(increment())
            }}
          >
            INC:
          </button>
        </div>
        <div>
          <button
            onClick={e => {
              this.props.dispatch(decrement())
            }}
          >
            DEC:
          </button>
        </div>
        {toDoList.map((toDo, index) => (
          <div key={index}>
            Days{toDo.days} / Title: {toDo.title}
            <button
              onClick={e => {
                this.props.dispatch(filter(index))
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(ContainerComponent)
