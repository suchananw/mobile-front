import React, { Component } from "react";
import {Route, Redirect,withRouter} from 'react-router-dom';


class SignIn extends Component {
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

  onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
      .then(response => response.json())
      .then(user => {
        console.log(user.id)
        if (user.id) {
          this.props.loadUser({
            isSignedIn : true,
            user : user
          })
          //this.props.onRouteChange('home');
          this.props.history.push('/home');
        }
      })
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.onSubmitSignIn}>
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          <input onChange={this.onUsernameChange} type="email" placeholder="E-mail" required/>
          <input onChange={this.onPasswordChange} type="password"  placeholder="Password" required/>
          <input type="submit" value="Log In"/>
        </form>
        <div id="formFooter">
          <a onClick = {() => this.props.onRouteChange('forgetPassword')} class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn)