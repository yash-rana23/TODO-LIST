import React from 'react'
import ReactDom from 'react-dom'
import App from './app.js'
import './inex.css'
class Form extends React.Component {
  render() {
    return (
      <div class='contain  '>
        <App />
      </div>
    )
  }
}
ReactDom.render(<Form />, document.getElementById('root'))
