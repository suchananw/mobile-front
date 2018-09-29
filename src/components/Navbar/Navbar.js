import React, { Component } from 'react';
import searchPanel from '../searchPanel/searchPanel';
import {Link} from 'react-router-dom';


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
    });
    this.props.resetToken();
    this.props.onRouteChange('signin');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  {/* <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a> */}
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
              <div className="nav navbar-nav navbar-right0">
                { this.props.isSignedIn 
                  ? <button onClick = {this.onClickLogout} className="btn btn-light my-2 my-sm-0" type="submit">Logout</button>
                  : <div></div>
                }
              </div>
          </div>
        </nav>
      </div>
    );
  }
}