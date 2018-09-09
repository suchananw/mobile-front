import React, { Component } from "react";
import "./login.css";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      birthday: moment(),
      isActive: "signin",
    };
    this.handleChange = this.handleChange.bind(this);
  } 
  
  handleChange(date) {
    this.setState({
      birthday: date
    });
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
              ? <div>
                  <form>
                    <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    <input type="text" placeholder="Username" required/>
                    <input type="password"  placeholder="Password" required/>
                    <input onClick = {() => this.props.onRouteChange('home')} type="submit" value="Log In"/>
                  </form>
                  <div id="formFooter">
                    <a onClick = {() => this.props.onRouteChange('forgetPassword')} class="underlineHover" href="#">Forgot Password?</a>
                  </div>
                </div>
              : <div>
                  <form>
                    <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                    <input type="email" placeholder="E-mail" required/>
                    <p>birthday <DatePicker id="date" selected={this.state.birthday} onChange={this.handleChange} /></p>
                    <input type="text" placeholder="Username" required/>
                    <input type="password"  placeholder="Password" required/>
                    <input type="password"  placeholder="Confirm Password" required/>
                    <input onClick = {() => this.onChangeAction('signin')} type="submit" value="Sign Up"/>
                  </form>
                </div>
            }
        </div>
      </div>
    );
  }
}