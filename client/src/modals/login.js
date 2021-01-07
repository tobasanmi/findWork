import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className = 'login-modal-wrapper'>
      <div className = 'login-modal'>
        <h3>Login and get productive</h3>
        <div><span aria-hidden="true">&times;</span></div>
        <form>
          <div>
          <input type = 'email' name = 'email' className = 'form-control'  placeholder = "enter registered email address"/><br></br>
          <input type = 'password' className = 'form-control' name = 'password' placeholder = "enter password"/><br></br>
          <button type = 'submit' className = 'btn btn-primary'>Login</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}
