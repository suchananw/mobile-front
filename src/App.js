import React, { Component } from 'react';
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

  loadUser = (data) => {
    this.setState(
      {
        user: {
        username: data.username,
        email: data.email
      }
    })
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
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
          <div class="nav navbar-nav navbar-right0">
            <button class="btn btn-light my-2 my-sm-0" type="submit">Sign In</button>
            <button class="btn btn-light my-2 my-sm-0" type="submit">Logout</button>
          </div>
      </div>
    </nav>

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
