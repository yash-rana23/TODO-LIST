import React, { Component } from 'react'
import uuid from 'react-uuid'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default class Newtodoform extends Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    const newtodo = { ...this.state, id: uuid() }
    this.props.createTodo(newtodo)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  render() {
    return (
      <div className='container'>
        <div className='container '>
          <h3>New Todo:</h3>
        </div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-8'>
              <div class='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Sizing example input'
                  aria-describedby='inputGroup-sizing-default'
                  name='title'
                  id='title'
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className='col-4'>
              <button class='btn btn-dark'>Add Todo!</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
