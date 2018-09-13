import React, { Component } from "react";
import "./login.css";
import 'react-datepicker/dist/react-datepicker.css';
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "signin",
    };
  } 

  onChangeAction = (action) => {
    this.setState({isActive: action})
  } 

  render() {
    return (
      <div class="wrapper">
        <div id="formContent">
          <h2 class={this.state.isActive==='signin'? "active" : "inactive underlineHover"} onClick = {() => this.onChangeAction('signin')}> Sign In </h2>
          <h2 class={this.state.isActive==='signup'? "active" : "inactive underlineHover"} onClick = {() => this.onChangeAction('signup')}>Sign Up </h2>
            { this.state.isActive === 'signin' 
              ? <SignIn loadUser={this.props.loadUser} onRouteChange = {this.props.onRouteChange}/>
              : <SignUp onChangeAction = {this.onChangeAction} />
            }
        </div>
      </div>
    );
  }
}