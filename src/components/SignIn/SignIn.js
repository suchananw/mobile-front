import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  } 

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <div>
        <form>
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          <input onChange={this.onUsernameChange} type="text" placeholder="Username" required/>
          <input onChange={this.onPasswordChange} type="password"  placeholder="Password" required/>
          <input onClick = {() => this.onSubmitSignIn} type="submit" value="Log In"/>
        </form>
        <div id="formFooter">
          <a onClick = {() => this.props.onRouteChange('forgetPassword')} class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    );
  }
}