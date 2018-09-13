import React, { Component } from 'react';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: ''
    };
  }

  onClickLogout = () => {
    this.props.loadUser({
      isSignedIn : false,
      user: {
        username: '',
        email: ''
      }
    })
    this.props.onRouteChange('signin');
  }

  render() {
    return (
      <div>
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
                { this.props.isSignedIn 
                  ? <button onClick = {this.onClickLogout} class="btn btn-light my-2 my-sm-0" type="submit">Logout</button>
                  : <div></div>
                }
              </div>
          </div>
        </nav>
      </div>
    );
  }
}