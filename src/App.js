import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/LogIn/login'
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

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route, user } = this.state; 
    return (
      <div className="App">
        { route === 'signin' 
          ? <Login onRouteChange={this.onRouteChange} />
          : ( route === 'home'
              ? <div>
                  { 'this is home page, you are logged in' }
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
