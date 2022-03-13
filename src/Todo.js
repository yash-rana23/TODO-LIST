import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditi: false, task: this.props.title }
    this.edit = this.edit.bind(this)
    this.handlechange = this.handlechange.bind(this)
    this.handleupdate = this.handleupdate.bind(this)
  }
  edit() {
    this.setState({ isEditi: !this.state.isEditi })
  }
  handleupdate(evt) {
    evt.preventDefault()
    //take your new task data and pass up to parent
    this.props.updatetodo(this.props.id, this.state.task)
    this.setState({ isEditi: !this.state.isEditi })
  }

  handlechange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    let result
    if (this.state.isEditi) {
      result = (
        <div className='container'>
          <form onSubmit={this.handleupdate}>
            <input
              type='text'
              name='task'
              value={this.state.task}
              onChange={this.handlechange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className='container '>
          <div className='row'>
            <div className='col-10'>
              <h3>{this.props.title} </h3>
            </div>
            <div className='col-2'>
              <button onClick={this.props.removetodo}>
                <i class='fa fa-trash' aria-hidden='true'></i>
              </button>
              <button onClick={this.edit}>
                <i class='fas fa-edit'></i>
              </button>
            </div>
          </div>
        </div>
      )
    }
    return result
  }
}
