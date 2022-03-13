import React, { Component } from 'react'
import Newtodoform from './Newtodoform.js'
import Todo from './Todo.js'
import uuid from 'react-uuid'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './overlay.css'
export default class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [{ title: 'I am your new ToDo', id: uuid() }] }
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
  }
  create(newtodo) {
    if (newtodo.title.length > 0) {
      this.setState({ todos: [...this.state.todos, newtodo] })
    }
    return
  }
  update(id, updatedtask) {
    const updatedtodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, title: updatedtask }
      return todo
    })
    this.setState({ todos: updatedtodos })
  }
  remove(id) {
    this.setState({ todos: this.state.todos.filter((t) => t.id !== id) })
  }
  render() {
    const Todos = this.state.todos.map((t) => (
      <div class='container border border-4'>
        <Todo
          title={t.title}
          removetodo={() => this.remove(t.id)}
          id={t.id}
          updatetodo={this.update}
        />
      </div>
    ))
    return (
      <div
        className='container  w-50 h-75 mb-5 pb-5 '
        style={{ padding: '100px', background: 'white' }}
      >
        <div className=' container pt-5 border border-4   mx-4'>
          <div className='container text-center title '>
            <h1>A Great React Todo List!</h1>
          </div>
          <br />
          <div class='container '>
            <Newtodoform createTodo={this.create} />
          </div>
        </div>
        <br />
        <br /> <br />
        <br />
        <div className='container '>
          <div class='container  '>{Todos}</div>
        </div>
      </div>
    )
  }
}
