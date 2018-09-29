import React, { Component } from 'react';
import './App.css';
import Login from './components/LogIn/login';
import Navbar from './components/Navbar/Navbar';
import SearchPanel from './components/searchPanel/searchPanel';
import {Router, Switch, Route,Redirect,IndexRoute} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        username: '',
        email: ''
      }
    }
  }
  
  loadUser = (data) => {
    this.setState(
      {
        isSignedIn: data.isSignedIn,
        user: {
          username: data.username,
          email: data.email,
        }
    })
  }

  resetToken = () => {
    localStorage.removeItem('appToken'); //remove token from storage
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  loadUserFromToken = () => {
    let token = localStorage.getItem('appToken');
    if(!token || token === '') {//if there is no token, dont bother
      return ;
    }
    //fetch user from token (if server deems it’s valid token)
    fetch('http://localhost:3001/userToken', {
      method: 'get',
      headers: { 'Authorization': `Bearer ${token}`}
    })
      .then((response) => {
        if (!response.error) {
          //store token 
          localStorage.setItem('appToken', response.token);
          this.loadUser({
            isSignedIn : true,
            user : response.user
          })
        } else {
          //remove token from storage
          localStorage.removeItem('appToken');
          this.loadUser({
            isSignedIn : false,
            user : {
              username : '',
              email : ''
            }
          })
          return 'token expired'
        }
      });
  }

  render() {
    const { isSignedIn, route, user } = this.state; 
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        isSignedIn === true
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />
    )
    
    return (
      <div className="App">
      <Navbar isSignedIn={isSignedIn} resetToken={this.resetToken} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />

      <Route exact path = "/" render = {() =>  (
          <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      )}/>
      
      {/* <PrivateRoute path='/home' component={SearchPanel}/> */}
      <Route exact path = "/home" render = {() =>  (
          <div>
            <SearchPanel />
            <Home />
          </div>
      )}/>
      {/* <Route exact path="/home" render = {() => (
        isSignedIn? 
          <div>
            <SearchPanel />
            <Show />
          </div>
        : <Redirect to='/' />
      )}/> */}

      <Footer/>
      </div>
    );
  }
}

export default App;
