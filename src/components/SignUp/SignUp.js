import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordNotMatch: false,
      birthday: moment(),
    };
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onConfirmPasswordChange = (event) => {
    (this.password === event.target.value)
    ? this.setState({passwordNotMatch:false})
    : this.setState({passwordNotMatch:true})
  }

  onDateChange = (event) => {
    this.setState({birthday: event})
  }

  onSubmitSignUp = (e) => {
    e.preventDefault();
    console.log(this.state.birthday)
    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        birthday: this.state.birthday
      })
    })
      .then(response => response.json())
      .then(this.props.onChangeAction('signin'))
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmitSignUp}>
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
          <input onChange={this.onEmailChange} type="email" placeholder="E-mail" required/>
          <div id='datePicker'><label className='birthday'>Birthday</label><DatePicker id="date" onChange={this.onDateChange} selected={this.state.birthday} onChange={this.onDateChange} /></div>
          <input onChange={this.onUsernameChange} type="text" placeholder="Username" required/>
          <input onChange={this.onPasswordChange} type="password"  placeholder="Password" required/>
          <input type="password"  placeholder="Confirm Password" required/>
          <input disabled={this.state.passwordNotMatch} type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}