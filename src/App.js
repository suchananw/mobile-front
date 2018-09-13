import React, { Component } from 'react';
import './App.css';
import Login from './components/LogIn/login'
import Navbar from './components/Navbar/Navbar'

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
    return (
      <div className="App">
      <Navbar isSignedIn={isSignedIn} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        { route === 'signin' 
          ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : ( route === 'home'
              ? <div>
                  { `this is home page, ${user.username},  you are logged in` }
                </div>
              : <div>
                  { '..under construction..' }
                </div>
            )
        }
      </div>
    );
  }
}

export default App;
