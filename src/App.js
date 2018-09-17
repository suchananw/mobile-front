import React, { Component } from 'react';
import './App.css';
import Login from './components/LogIn/login';
import Navbar from './components/Navbar/Navbar';
import SearchPanel from './components/searchPanel/searchPanel';
import {Router, Switch, Route,Redirect} from 'react-router-dom';
import Footer from './components/Footer/Footer';
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

  onRouteChange = (route) => {
    this.setState({route: route});
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
      <Navbar isSignedIn={isSignedIn} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />

      <Route exact path = "/" render = {() =>  (
          <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
      )}/>
      {/* <PrivateRoute path='/home' component={SearchPanel}/> */}

      <Route exact path="/home" render = {() => (
        this.state.isSignedIn? <SearchPanel/>
        : <Redirect to='/' />
      )}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
